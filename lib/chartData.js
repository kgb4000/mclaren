export function toTimeSeries(results) {
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

export function toBreakdownBars(results, { limit = 10 } = {}) {
  if (!results || results.length === 0) return []
  return results
    .map((row) => ({
      name: row.breakdown_value ?? row.label ?? 'Unknown',
      value: row.count ?? 0,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, limit)
}
