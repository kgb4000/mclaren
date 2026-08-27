export function toTimeSeries(results) {
  if (!results || results.length === 0) return []
  const days = results[0].days
  return days.map((date, i) => {
    const point = { date }
    for (const series of results) {
      const key = series.action?.custom_name || series.label
      point[key] = series.data[i]
    }
    return point
  })
}

export function toBreakdownBars(results, { limit = 10 } = {}) {
  if (!results || results.length === 0) return []
  return results
    .map((row) => {
      const bv = row.breakdown_value
      const name = Array.isArray(bv) ? bv.join(' / ') : (bv ?? row.label ?? 'Unknown')
      return {
        name,
        value: row.count ?? 0,
      }
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, limit)
}
