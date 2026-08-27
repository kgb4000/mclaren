# Admin Analytics Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a password-protected `/admin/analytics` page that shows the site's own PostHog analytics (pageviews, top pages, CTA clicks, FAQ engagement, traffic sources), mirroring the PostHog dashboard already built (project `560959`, dashboard `2037119`).

**Architecture:** A shared-password auth layer (signed HMAC session cookie, no auth library) gates `/admin/*` via Next.js middleware. A server-only module queries the PostHog Trends API directly. `/admin/analytics/page.js` is an async Server Component that fetches all 7 datasets server-side and passes them to a Recharts-based Client Component — no PostHog credentials ever reach the browser, and no public API route is exposed.

**Tech Stack:** Next.js 16 (App Router, plain `.js` files with ESM `export` syntax, transpiled by Next.js — not run directly via `node`), React 18.2, Tailwind CSS v4 (`--color-gold` / `--color-gold-dark` theme), Web Crypto (`crypto.subtle`) for session signing, `recharts` (new dependency) for charts.

**Spec:** `docs/superpowers/specs/2026-08-26-admin-analytics-page-design.md`

## Global Constraints

- New env vars, server-only, never `NEXT_PUBLIC_`: `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`.
- Session cookie name: `admin_session`. httpOnly, `secure` in production, `sameSite=lax`, 7-day expiry.
- PostHog project ID `560959`, reached via existing env vars `NEXT_PUBLIC_POSTHOG_HOST` and `NEXT_PUBLIC_POSTHOG_PROJECT_ID`, authenticated with the existing `POSTHOG_PERSONAL_API_KEY`. Do not add duplicate env vars for these.
- Every PostHog query must include this exact properties filter (matches the 7 dashboard insights already built): `{"key": "$host", "type": "event", "operator": "not_icontains", "value": "localhost"}`.
- Fixed 30-day window (`dateRange: { date_from: "-30d" }`), daily interval. No date-range picker in this version.
- No test framework exists in this repo and none is introduced. Verification is manual (curl / browser) or via disposable `.mjs` scratch scripts run directly with `node` — never committed.
- No new auth library — session signing uses only Web Crypto (`crypto.subtle`), available in both Edge middleware and Node route handlers.
- Follow existing codebase conventions: relative imports (the repo has an unused `@/*` jsconfig alias — do not use it, match the relative-import pattern seen throughout `app/`), Tailwind gold/gold-dark theme (`bg-gold`, `text-gold`, `border-gold`, `hover:bg-gold-dark`), plain `.js` files using ESM `export` syntax (this only works through Next.js's build — never run these files directly with plain `node`).
- Next.js 16 requires `cookies()` and `searchParams` to be awaited (`await cookies()`, `await searchParams`) — they are Promises.

---

### Task 1: Env var scaffolding

**Files:**
- Modify: `.env.local`
- Modify: `.env.example`

**Interfaces:**
- Produces: `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET` env vars, consumed by Task 2 and Task 4.

- [ ] **Step 1: Generate a random session secret**

Run:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the printed hex string — this is the value for `ADMIN_SESSION_SECRET`.

- [ ] **Step 2: Add the new vars to `.env.local`**

Append to `/Volumes/Elements/code/rent-mclaren/.env.local` (this file is gitignored, confirmed earlier in the session):

```
ADMIN_PASSWORD=choose-a-real-password-here
ADMIN_SESSION_SECRET=<paste the generated hex string from Step 1>
```

Replace `choose-a-real-password-here` with an actual password — this is the login password for `/admin`.

- [ ] **Step 3: Document the vars in `.env.example`**

Read the current `.env.example`, then add (without real values):

```
# Admin area auth (server-only — do not prefix with NEXT_PUBLIC_)
ADMIN_PASSWORD=
ADMIN_SESSION_SECRET=
```

- [ ] **Step 4: Verify `.env.local` is still gitignored**

Run: `git check-ignore -v .env.local`
Expected: prints a match (e.g. `.gitignore:28:.env*.local	.env.local`), confirming it won't be committed.

- [ ] **Step 5: Commit**

```bash
git add .env.example
git commit -m "Document ADMIN_PASSWORD and ADMIN_SESSION_SECRET env vars"
```

(`.env.local` is gitignored and is not committed.)

---

### Task 2: Session signing utility

**Files:**
- Create: `lib/adminSession.js`

**Interfaces:**
- Produces: `signSession(expiresAt: number): Promise<string>` — returns a cookie value string `"<expiresAt>.<hmacHex>"`.
- Produces: `verifySession(cookieValue: string | undefined): Promise<boolean>` — `true` only if the value is present, well-formed, unexpired, and its signature matches.
- Consumed by: Task 3 (`middleware.js`) and Task 4 (`app/admin/actions.js`).

- [ ] **Step 1: Verify the signing/verification algorithm in a scratch script**

Write `/tmp/verify-admin-session.mjs`:

```js
process.env.ADMIN_SESSION_SECRET = 'test-secret-value'

const encoder = new TextEncoder()

async function getKey() {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(process.env.ADMIN_SESSION_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  )
}

function toHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

async function signSession(expiresAt) {
  const key = await getKey()
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(String(expiresAt)))
  return `${expiresAt}.${toHex(signature)}`
}

async function verifySession(cookieValue) {
  if (!cookieValue) return false
  const [expiresAtStr, signatureHex] = cookieValue.split('.')
  if (!expiresAtStr || !signatureHex) return false
  const expiresAt = Number(expiresAtStr)
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) return false
  const expected = await signSession(expiresAt)
  return expected === cookieValue
}

const future = Date.now() + 60_000
const past = Date.now() - 60_000

const validToken = await signSession(future)
console.log('valid token verifies:', (await verifySession(validToken)) === true)

const expiredToken = await signSession(past)
console.log('expired token rejected:', (await verifySession(expiredToken)) === false)

const tamperedToken = validToken.slice(0, -1) + (validToken.slice(-1) === '0' ? '1' : '0')
console.log('tampered token rejected:', (await verifySession(tamperedToken)) === false)

console.log('garbage rejected:', (await verifySession('not-a-real-token')) === false)
console.log('empty rejected:', (await verifySession('')) === false)
```

Run: `node /tmp/verify-admin-session.mjs`
Expected: five lines, each ending in `true`.

- [ ] **Step 2: Create the real file**

Create `lib/adminSession.js` with the same logic, reading the secret from `process.env.ADMIN_SESSION_SECRET` directly (no test override):

```js
const encoder = new TextEncoder()

async function getKey() {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret) {
    throw new Error('ADMIN_SESSION_SECRET is not configured')
  }
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  )
}

function toHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function signSession(expiresAt) {
  const key = await getKey()
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(String(expiresAt)))
  return `${expiresAt}.${toHex(signature)}`
}

export async function verifySession(cookieValue) {
  if (!cookieValue) return false
  const [expiresAtStr, signatureHex] = cookieValue.split('.')
  if (!expiresAtStr || !signatureHex) return false

  const expiresAt = Number(expiresAtStr)
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) return false

  const expected = await signSession(expiresAt)
  return expected === cookieValue
}
```

- [ ] **Step 3: Delete the scratch script**

Run: `rm /tmp/verify-admin-session.mjs`

- [ ] **Step 4: Commit**

```bash
git add lib/adminSession.js
git commit -m "Add HMAC-signed session utility for admin auth"
```

---

### Task 3: Middleware auth gate

**Files:**
- Create: `middleware.js` (repo root, alongside `next.config.js`)

**Interfaces:**
- Consumes: `verifySession(cookieValue): Promise<boolean>` from `lib/adminSession.js` (Task 2).

- [ ] **Step 1: Create the middleware**

```js
import { NextResponse } from 'next/server'
import { verifySession } from './lib/adminSession'

export const config = {
  matcher: ['/admin/:path*'],
}

export async function middleware(request) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin/login')) {
    return NextResponse.next()
  }

  const cookie = request.cookies.get('admin_session')?.value
  const isValid = await verifySession(cookie)

  if (!isValid) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}
```

- [ ] **Step 2: Verify the redirect behavior against the dev server**

Run: `npm run dev` (in background, or a separate terminal)

Once it's up, run:
```bash
curl -sI http://localhost:3000/admin/analytics | grep -i '^location'
```
Expected: `location: http://localhost:3000/admin/login` (or a relative `/admin/login` path) — `app/admin/analytics/page.js` doesn't exist yet, but middleware still intercepts the matched path before route resolution, so the redirect fires regardless.

Then run:
```bash
curl -sI http://localhost:3000/admin/login | grep -i '^location'
```
Expected: no output (no `location` header) — `/admin/login` must never redirect to itself. The response itself will be a 404 at this point since the login page doesn't exist yet; that's fine, we're only checking there's no redirect loop.

Stop the dev server.

- [ ] **Step 3: Commit**

```bash
git add middleware.js
git commit -m "Gate /admin routes behind signed session cookie"
```

---

### Task 4: Login and logout server actions + login page

**Files:**
- Create: `app/admin/actions.js`
- Create: `app/admin/login/page.js`

**Interfaces:**
- Consumes: `signSession(expiresAt): Promise<string>` from `lib/adminSession.js` (Task 2).
- Produces: `login(formData: FormData): Promise<never>` (redirects), `logout(): Promise<never>` (redirects) — consumed by Task 5 (`app/admin/layout.js`) and this task's own login page.

- [ ] **Step 1: Create the server actions**

Create `app/admin/actions.js`:

```js
'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { signSession } from '../../lib/adminSession'

const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000
const COOKIE_NAME = 'admin_session'

export async function login(formData) {
  const password = formData.get('password')

  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) {
    console.error(
      new Error('ADMIN_PASSWORD or ADMIN_SESSION_SECRET is not configured')
    )
    redirect('/admin/login?error=1')
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    redirect('/admin/login?error=1')
  }

  const expiresAt = Date.now() + SESSION_DURATION_MS
  const cookieValue = await signSession(expiresAt)
  const cookieStore = await cookies()

  cookieStore.set(COOKIE_NAME, cookieValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: new Date(expiresAt),
  })

  redirect('/admin/analytics')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
  redirect('/admin/login')
}
```

- [ ] **Step 2: Create the login page**

Create `app/admin/login/page.js`:

```jsx
import { login } from '../actions'

export default async function AdminLoginPage({ searchParams }) {
  const params = await searchParams
  const hasError = params?.error === '1'

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-4 text-white">
      <h1 className="text-3xl font-bold">Admin Login</h1>
      {hasError && (
        <p className="mt-4 rounded border border-red-500/40 bg-red-500/10 px-4 py-2 text-red-300">
          Incorrect password.
        </p>
      )}
      <form action={login} className="mt-6 flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm text-white/70">Password</span>
          <input
            type="password"
            name="password"
            required
            autoFocus
            className="rounded border border-white/20 bg-black px-4 py-3 text-white outline-none focus:border-gold"
          />
        </label>
        <button
          type="submit"
          className="rounded bg-gold px-4 py-3 font-semibold uppercase text-black transition-colors hover:bg-gold-dark"
        >
          Log In
        </button>
      </form>
    </main>
  )
}
```

- [ ] **Step 3: Verify the login flow manually**

Run: `npm run dev`

In a browser, visit `http://localhost:3000/admin/login`:
1. Submit a wrong password → page reloads with "Incorrect password." shown, still on `/admin/login`.
2. Submit the real password (from `.env.local`) → redirected to `/admin/analytics` (will 404 — that page doesn't exist until Task 9 — a 404 with the URL bar showing `/admin/analytics` confirms the redirect and cookie-set worked).
3. Open browser devtools → Application → Cookies → confirm `admin_session` is set, httpOnly, with a value shaped like `<number>.<hex>`.

Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add app/admin/actions.js app/admin/login/page.js
git commit -m "Add admin login flow with signed session cookie"
```

---

### Task 5: Admin layout with logout

**Files:**
- Create: `app/admin/layout.js`

**Interfaces:**
- Consumes: `logout(): Promise<never>` from `app/admin/actions.js` (Task 4).

- [ ] **Step 1: Create the layout**

```jsx
import { logout } from './actions'

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-black">
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-4">
        <span className="font-heading text-lg font-bold text-gold">Admin</span>
        <form action={logout}>
          <button type="submit" className="text-sm text-white/70 hover:text-gold">
            Log out
          </button>
        </form>
      </header>
      {children}
    </div>
  )
}
```

Note: this layout wraps every route under `/admin`, including `/admin/login` — the "Log out" link will also appear on the login page. Calling `logout()` while not logged in is harmless (deletes a cookie that may not exist, redirects to `/admin/login`), so this is an accepted simplification rather than a bug — not worth a route-group split for a single-owner internal tool.

- [ ] **Step 2: Verify in browser**

Run: `npm run dev`. Visit `http://localhost:3000/admin/login` — confirm the dark header with "Admin" and a "Log out" link now renders above the login form. Stop the dev server.

- [ ] **Step 3: Commit**

```bash
git add app/admin/layout.js
git commit -m "Add shared admin layout with logout link"
```

---

### Task 6: PostHog server query module

**Files:**
- Create: `lib/posthog-server.js`

**Interfaces:**
- Produces: `runTrendsQuery({ series: Array, breakdown?: { property: string, type: string } }): Promise<Array>` — returns the raw PostHog `results` array (throws on non-2xx response or missing env vars). Consumed by Task 9 (`app/admin/analytics/page.js`).

- [ ] **Step 1: Verify the exact HTTP contract against the real PostHog API**

Run:
```bash
KEY=$(grep '^POSTHOG_PERSONAL_API_KEY=' .env.local | cut -d'=' -f2-)
PROJECT_ID=$(grep '^NEXT_PUBLIC_POSTHOG_PROJECT_ID=' .env.local | cut -d'=' -f2-)
HOST=$(grep '^NEXT_PUBLIC_POSTHOG_HOST=' .env.local | cut -d'=' -f2-)

curl -s -X POST "${HOST}/api/projects/${PROJECT_ID}/query/" \
  -H "Authorization: Bearer ${KEY}" -H "Content-Type: application/json" \
  -d '{"query":{
    "kind":"TrendsQuery",
    "series":[{"kind":"EventsNode","event":"$pageview","math":"total","custom_name":"Pageviews"}],
    "interval":"day",
    "dateRange":{"date_from":"-30d"},
    "properties":[{"key":"$host","type":"event","operator":"not_icontains","value":"localhost"}]
  }}' | jq '.results[0] | {label, count, days: (.days | length), data: (.data | length)}'
```

Expected: `{"label": "$pageview", "count": <number>, "days": 31, "data": 31}` — confirms the request shape is accepted and the response has `label`/`count`/`days`/`data` on each result row (breakdown queries additionally carry `breakdown_value`, confirmed earlier in this session when the dashboard insights were built).

- [ ] **Step 2: Create the real file**

The implementation below is a direct translation of the verified `curl` call into `fetch`:

```js
const LOCALHOST_FILTER = [
  { key: '$host', type: 'event', operator: 'not_icontains', value: 'localhost' },
]

export async function runTrendsQuery({ series, breakdown }) {
  const apiKey = process.env.POSTHOG_PERSONAL_API_KEY
  const projectId = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_ID
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

  if (!apiKey || !projectId || !host) {
    throw new Error(
      'POSTHOG_PERSONAL_API_KEY, NEXT_PUBLIC_POSTHOG_PROJECT_ID, or NEXT_PUBLIC_POSTHOG_HOST is not configured'
    )
  }

  const query = {
    kind: 'TrendsQuery',
    series,
    interval: 'day',
    dateRange: { date_from: '-30d' },
    properties: LOCALHOST_FILTER,
  }
  if (breakdown) {
    query.breakdownFilter = { breakdowns: [breakdown] }
  }

  const response = await fetch(`${host}/api/projects/${projectId}/query/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 300 },
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`PostHog query failed: ${response.status} ${body}`)
  }

  const payload = await response.json()
  return payload.results
}
```

- [ ] **Step 3: Commit**

```bash
git add lib/posthog-server.js
git commit -m "Add server-only PostHog Trends query module"
```

---

### Task 7: Chart data transforms

**Files:**
- Create: `lib/chartData.js`

**Interfaces:**
- Produces: `toTimeSeries(results: Array): Array<{date: string, [seriesLabel: string]: number}>`, `toBreakdownBars(results: Array, opts?: {limit?: number}): Array<{name: string, value: number}>`. Consumed by Task 8 (`AnalyticsCharts.js`).

- [ ] **Step 1: Verify the transforms with sample PostHog-shaped data**

Write `/tmp/verify-chart-data.mjs`:

```js
function toTimeSeries(results) {
  if (!results || results.length === 0) return []
  const days = results[0].days
  return days.map((date, i) => {
    const point = { date }
    for (const series of results) {
      point[series.label] = series.data[i]
    }
    return point
  })
}

function toBreakdownBars(results, { limit = 10 } = {}) {
  if (!results || results.length === 0) return []
  return results
    .map((row) => ({
      name: row.breakdown_value ?? row.label ?? 'Unknown',
      value: row.count ?? 0,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, limit)
}

const sampleTimeSeries = [
  { label: 'Call Button', days: ['2026-08-01', '2026-08-02'], data: [3, 5] },
  { label: 'Book Now', days: ['2026-08-01', '2026-08-02'], data: [1, 2] },
]
const merged = toTimeSeries(sampleTimeSeries)
console.log('merges series by date:', JSON.stringify(merged) === JSON.stringify([
  { date: '2026-08-01', 'Call Button': 3, 'Book Now': 1 },
  { date: '2026-08-02', 'Call Button': 5, 'Book Now': 2 },
]))
console.log('empty input returns []:', JSON.stringify(toTimeSeries([])) === '[]')

const sampleBreakdown = [
  { breakdown_value: '/pricing', count: 4 },
  { breakdown_value: '/', count: 10 },
  { breakdown_value: '/mclaren-570gt', count: 2 },
]
const bars = toBreakdownBars(sampleBreakdown, { limit: 2 })
console.log('sorts descending and limits:', JSON.stringify(bars) === JSON.stringify([
  { name: '/', value: 10 },
  { name: '/pricing', value: 4 },
]))
console.log('empty breakdown returns []:', JSON.stringify(toBreakdownBars([])) === '[]')
```

Run: `node /tmp/verify-chart-data.mjs`
Expected: four lines, each ending in `true`.

- [ ] **Step 2: Create the real file**

Create `lib/chartData.js` with the same two functions (ESM `export`), then:

```bash
rm /tmp/verify-chart-data.mjs
```

- [ ] **Step 3: Commit**

```bash
git add lib/chartData.js
git commit -m "Add pure transforms from PostHog results to chart-ready data"
```

---

### Task 8: Install Recharts and build the chart component

**Files:**
- Modify: `package.json`, `package-lock.json` (via `npm install`)
- Create: `app/admin/analytics/AnalyticsCharts.js`

**Interfaces:**
- Consumes: `toTimeSeries`, `toBreakdownBars` from `lib/chartData.js` (Task 7).
- Produces: default export `AnalyticsCharts({ data }): JSX.Element`, where `data` is a plain object keyed by query name (`pageviews`, `visitors`, `topPages`, `ctaClicks`, `callByLocation`, `faqOpens`, `trafficSources`), each value shaped `{ ok: true, results: Array } | { ok: false }`. Consumed by Task 9 (`app/admin/analytics/page.js`).

- [ ] **Step 1: Install the dependency**

Run: `npm install recharts`

- [ ] **Step 2: Create the chart component**

Create `app/admin/analytics/AnalyticsCharts.js`:

```jsx
'use client'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { toTimeSeries, toBreakdownBars } from '../../../lib/chartData'

const GOLD = '#f4b755'
const GOLD_DARK = '#d99a2b'

function ChartCard({ title, children }) {
  return (
    <section className="mt-8 rounded-lg border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4 h-64">{children}</div>
    </section>
  )
}

function EmptyState() {
  return <p className="text-white/50">No data yet for this period.</p>
}

function ErrorState() {
  return <p className="text-red-400">Unable to load this chart.</p>
}

function LineChartSection({ title, query, seriesKeys, colors }) {
  if (!query.ok) {
    return (
      <ChartCard title={title}>
        <ErrorState />
      </ChartCard>
    )
  }

  const data = toTimeSeries(query.results)
  const hasData = data.some((point) => seriesKeys.some((key) => (point[key] || 0) > 0))

  return (
    <ChartCard title={title}>
      {!hasData ? (
        <EmptyState />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="date" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} />
            <YAxis tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} allowDecimals={false} />
            <Tooltip contentStyle={{ background: '#111', border: '1px solid #333' }} />
            {seriesKeys.length > 1 && <Legend />}
            {seriesKeys.map((key, i) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[i] || GOLD}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}
    </ChartCard>
  )
}

function BarChartSection({ title, query }) {
  if (!query.ok) {
    return (
      <ChartCard title={title}>
        <ErrorState />
      </ChartCard>
    )
  }

  const data = toBreakdownBars(query.results)

  return (
    <ChartCard title={title}>
      {data.length === 0 ? (
        <EmptyState />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 40 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} allowDecimals={false} />
            <YAxis type="category" dataKey="name" width={140} tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} />
            <Tooltip contentStyle={{ background: '#111', border: '1px solid #333' }} />
            <Bar dataKey="value" fill={GOLD} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </ChartCard>
  )
}

export default function AnalyticsCharts({ data }) {
  return (
    <div>
      <LineChartSection
        title="Pageviews (daily)"
        query={data.pageviews}
        seriesKeys={['Pageviews']}
        colors={[GOLD]}
      />
      <LineChartSection
        title="Unique Visitors (daily)"
        query={data.visitors}
        seriesKeys={['Visitors']}
        colors={[GOLD]}
      />
      <BarChartSection title="Top Pages" query={data.topPages} />
      <LineChartSection
        title="CTA Clicks: Call vs Book Now"
        query={data.ctaClicks}
        seriesKeys={['Call Button', 'Book Now']}
        colors={[GOLD, GOLD_DARK]}
      />
      <BarChartSection title="Call Button Clicks by Location" query={data.callByLocation} />
      <LineChartSection
        title="FAQ Item Opens"
        query={data.faqOpens}
        seriesKeys={['FAQ Opens']}
        colors={[GOLD]}
      />
      <BarChartSection title="Traffic Sources" query={data.trafficSources} />
    </div>
  )
}
```

- [ ] **Step 3: Lint the new file**

Run: `npm run lint`
Expected: no errors reported for `app/admin/analytics/AnalyticsCharts.js` (this catches syntax/import errors even though nothing imports the component yet — Task 9 wires it in).

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json app/admin/analytics/AnalyticsCharts.js
git commit -m "Add Recharts-based chart components for admin analytics"
```

---

### Task 9: Wire the analytics page together

**Files:**
- Create: `app/admin/analytics/page.js`

**Interfaces:**
- Consumes: `runTrendsQuery` from `lib/posthog-server.js` (Task 6), default export `AnalyticsCharts` from `./AnalyticsCharts` (Task 8).

- [ ] **Step 1: Create the page**

```jsx
import { runTrendsQuery } from '../../../lib/posthog-server'
import AnalyticsCharts from './AnalyticsCharts'

export const revalidate = 300

const QUERIES = {
  pageviews: {
    series: [{ kind: 'EventsNode', event: '$pageview', math: 'total', custom_name: 'Pageviews' }],
  },
  visitors: {
    series: [{ kind: 'EventsNode', event: '$pageview', math: 'dau', custom_name: 'Visitors' }],
  },
  topPages: {
    series: [{ kind: 'EventsNode', event: '$pageview', math: 'total', custom_name: 'Pageviews' }],
    breakdown: { property: '$pathname', type: 'event' },
  },
  ctaClicks: {
    series: [
      { kind: 'EventsNode', event: 'call_button_clicked', math: 'total', custom_name: 'Call Button' },
      { kind: 'EventsNode', event: 'book_now_clicked', math: 'total', custom_name: 'Book Now' },
    ],
  },
  callByLocation: {
    series: [{ kind: 'EventsNode', event: 'call_button_clicked', math: 'total', custom_name: 'Call Button Clicks' }],
    breakdown: { property: 'location', type: 'event' },
  },
  faqOpens: {
    series: [{ kind: 'EventsNode', event: 'faq_item_opened', math: 'total', custom_name: 'FAQ Opens' }],
  },
  trafficSources: {
    series: [{ kind: 'EventsNode', event: '$pageview', math: 'total', custom_name: 'Pageviews' }],
    breakdown: { property: '$referring_domain', type: 'event' },
  },
}

export default async function AdminAnalyticsPage() {
  const keys = Object.keys(QUERIES)
  const settled = await Promise.allSettled(keys.map((key) => runTrendsQuery(QUERIES[key])))

  const data = {}
  keys.forEach((key, i) => {
    const result = settled[i]
    data[key] = result.status === 'fulfilled' ? { ok: true, results: result.value } : { ok: false }
  })

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 text-white">
      <h1 className="text-4xl font-bold">Site Analytics</h1>
      <p className="mt-2 text-white/70">Last 30 days, excluding local development traffic.</p>
      <AnalyticsCharts data={data} />
    </main>
  )
}
```

- [ ] **Step 2: Verify end-to-end in the browser**

Run: `npm run dev`. Visit `http://localhost:3000/admin/analytics` while logged out → redirected to `/admin/login`. Log in → redirected to `/admin/analytics` → confirm all 7 chart cards render (as "No data yet for this period" — the PostHog project currently has zero non-localhost events, confirmed earlier in this session). Stop the dev server.

- [ ] **Step 3: Commit**

```bash
git add app/admin/analytics/page.js
git commit -m "Wire admin analytics page to PostHog data and charts"
```

---

### Task 10: Full walkthrough and per-chart failure isolation check

**Files:** none (verification only, follows the spec's Testing section exactly).

- [ ] **Step 1: Unauthenticated redirect**

Run `npm run dev`. In a private/incognito browser window, visit `http://localhost:3000/admin/analytics`.
Expected: redirected to `/admin/login`.

- [ ] **Step 2: Wrong password**

Submit an incorrect password on `/admin/login`.
Expected: inline "Incorrect password." message, still on `/admin/login`, no cookie set.

- [ ] **Step 3: Correct password**

Submit the real password (from `.env.local`).
Expected: redirected to `/admin/analytics`, `admin_session` cookie present (devtools → Application → Cookies).

- [ ] **Step 4: Charts render**

Confirm all 7 chart cards render without crashing (as empty states, since the project has no non-localhost events yet — this matches `https://us.posthog.com/project/560959/dashboard/2037119`, which is equally empty for the same reason).

- [ ] **Step 5: Session persists**

Reload `/admin/analytics`.
Expected: still authenticated, no redirect to login.

- [ ] **Step 6: Logout**

Click "Log out".
Expected: redirected to `/admin/login`; visiting `/admin/analytics` again now redirects back to login.

- [ ] **Step 7: Per-chart failure isolation**

Log back in. Temporarily corrupt the key to force a failure:
```bash
sed -i '' 's/^POSTHOG_PERSONAL_API_KEY=.*/POSTHOG_PERSONAL_API_KEY=invalid-temp-value/' .env.local
```
Restart `npm run dev` (env vars are read at process start), reload `/admin/analytics`.
Expected: all 7 chart cards show "Unable to load this chart." — no crashed page, no stack trace shown to the user.

Restore the real key:
```bash
git diff .env.local
```
Manually re-enter the real `POSTHOG_PERSONAL_API_KEY` value (the one verified working in Task 6) back into `.env.local`, then restart `npm run dev` and confirm charts return to normal (empty-state, not error-state).

- [ ] **Step 8: Stop the dev server**

No commit for this task — verification only.
