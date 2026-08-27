# Admin Analytics Page

## Purpose

Give the site owner an in-app view of the site's PostHog analytics at
`/admin/analytics`, so they don't have to leave the site or hold PostHog
credentials to check traffic and CTA performance. Mirrors the tiles already
built on the PostHog dashboard (project `560959`, dashboard `2037119`).

## Constraints

- No auth system, `/admin` route, or server-side data-fetching layer exists
  in this codebase yet — this is new infrastructure, not an extension of an
  existing flow.
- The PostHog personal API key (`POSTHOG_PERSONAL_API_KEY` in `.env.local`)
  must never reach the browser bundle.
- Single site owner — no multi-user accounts needed.
- No test framework exists in the repo (checked `package.json`); this build
  does not introduce one.

## Auth

Shared-password auth, scoped to `/admin/*`, using a signed session cookie —
no third-party auth library.

- **Env vars** (server-only, never `NEXT_PUBLIC_`):
  - `ADMIN_PASSWORD` — the shared password.
  - `ADMIN_SESSION_SECRET` — random secret used to sign session cookies.
- **`app/admin/login/page.js`** — password form (Client Component).
- **`app/admin/login/actions.js`** — a server action `login(formData)`:
  - Compares submitted password to `ADMIN_PASSWORD`.
  - On success: sets an httpOnly, `sameSite=lax`, `secure` (in prod) cookie
    containing `<expiry>.<hmac>`, where `hmac = HMAC-SHA256(expiry,
    ADMIN_SESSION_SECRET)` computed via Web Crypto (`crypto.subtle`) — works
    identically in Edge middleware and Node route handlers.
    Session lifetime: 7 days.
  - On failure: re-renders the login form with an error, no cookie set.
  - If `ADMIN_PASSWORD` or `ADMIN_SESSION_SECRET` is unset, login fails
    closed (denies all) and logs a server-side error, following the same
    pattern `instrumentation-client.js` uses for missing PostHog env vars.
- **`middleware.js`** (repo root) — matches `/admin/:path*`, excludes
  `/admin/login`. Recomputes the HMAC from the cookie and checks expiry; if
  invalid/missing/expired, redirects to `/admin/login`.
- **`app/admin/logout/actions.js`** (or a logout button posting to a small
  action) — clears the cookie, redirects to `/admin/login`.

## Data Layer

- **`lib/posthog-server.js`** (server-only module):
  - `runTrendsQuery({ series, breakdown })` — POSTs to
    `https://us.i.posthog.com/api/projects/{PROJECT_ID}/query/` using
    `POSTHOG_PERSONAL_API_KEY`, with `TrendsQuery` shaped like the insights
    already created on the PostHog dashboard.
  - Every query includes the same `properties` filter baked into the 7
    dashboard insights: `{"key": "$host", "type": "event", "operator":
    "not_icontains", "value": "localhost"}`.
  - Fixed 30-day window (`dateRange: { date_from: "-30d" }`), daily
    interval — no date-range picker in this version.
  - Returns parsed `results` or throws; callers handle failure per-query.

- **`app/admin/analytics/page.js`** — async Server Component:
  - Calls `Promise.allSettled` over the 7 queries (pageviews, unique
    visitors, top pages, CTA clicks call-vs-book, call-button-by-location,
    FAQ opens, traffic sources — same event names as the PostHog dashboard:
    `$pageview`, `call_button_clicked`, `book_now_clicked`,
    `faq_item_opened`).
  - `export const revalidate = 300` (5 minutes) — avoids hitting the
    PostHog API on every request.
  - Passes each settled result (or an error flag) as props into chart
    components.
  - No separate public API route is created — data fetching happens
    entirely in the Server Component, so there's no additional endpoint to
    protect or leak the key through.

## UI

- New dependency: `recharts`.
- `app/admin/analytics/AnalyticsCharts.js` (Client Component, since Recharts
  needs the DOM) renders each chart, styled with the site's existing
  Tailwind conventions:
  - Pageviews (daily) — line chart
  - Unique Visitors (daily) — line chart
  - Top Pages — horizontal bar chart
  - CTA Clicks: Call vs Book Now — dual-line chart
  - Call Button Clicks by Location — bar chart
  - FAQ Item Opens — line chart
  - Traffic Sources — bar chart
- A chart whose query failed (present in the `Promise.allSettled` results
  as `rejected`) renders an inline "Unable to load this chart" message
  instead of crashing the page.
- `app/admin/layout.js` — minimal wrapper for the `/admin` section with a
  "Log out" link.

## Error Handling

- Per-chart failure isolation via `Promise.allSettled` (above).
- Login: wrong password shows inline form error; missing env vars fail
  closed with a server log, not a crash.
- Middleware: any cookie verification error (malformed, expired, bad HMAC)
  is treated as "not authenticated" and redirects to login — never throws.

## Testing

No test framework exists in this repo. Verification will be manual:

1. Visit `/admin/analytics` unauthenticated → redirected to `/admin/login`.
2. Submit wrong password → inline error, still on login page.
3. Submit correct password → redirected to `/admin/analytics`, cookie set.
4. Charts render with the same data as the PostHog dashboard
   (`https://us.posthog.com/project/560959/dashboard/2037119`).
5. Reload the page → still authenticated (cookie persists).
6. Log out → redirected to login, `/admin/analytics` now redirects again.
7. Manually break `POSTHOG_PERSONAL_API_KEY` (temporarily) → confirm charts
   show the per-chart error message instead of a crashed page, then restore
   the key.

## Out of Scope (this version)

- Date-range picker (fixed 30-day window only).
- Multi-user accounts / third-party auth.
- Exporting charts or scheduled email reports.
- Editing PostHog dashboard tiles from this page.
