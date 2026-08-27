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
