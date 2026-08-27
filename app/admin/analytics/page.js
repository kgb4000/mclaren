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
