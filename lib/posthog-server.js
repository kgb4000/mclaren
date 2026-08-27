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
