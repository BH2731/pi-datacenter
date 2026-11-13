export function LineChart({ data, dataKey = 'temperature', color = '#24d3ee', unit = '°C' }) {
  const values = data.map((d) => d[dataKey])
  const min = Math.min(...values) - 1
  const max = Math.max(...values) + 1
  const points = values.map((v, i) => `${(i / (values.length - 1)) * 100},${92 - ((v - min) / (max - min)) * 72}`).join(' ')
  const area = `0,100 ${points} 100,100`
  return <div className="line-chart"><svg viewBox="0 0 100 105" preserveAspectRatio="none" role="img" aria-label={`Histórico em ${unit}`}><defs><linearGradient id={`fill-${dataKey}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={color} stopOpacity=".3"/><stop offset="1" stopColor={color} stopOpacity="0"/></linearGradient></defs>{[20,40,60,80].map(y => <line key={y} x1="0" y1={y} x2="100" y2={y} className="grid-line"/>)}<polygon points={area} fill={`url(#fill-${dataKey})`} /><polyline points={points} fill="none" stroke={color} strokeWidth="1.4" vectorEffect="non-scaling-stroke" /></svg><div className="chart-labels">{data.map(d => <span key={d.time}>{d.time}</span>)}</div></div>
}

export function Donut({ value, label, color = '#24d3ee' }) {
  return <div className="donut" style={{ '--value': value, '--color': color }}><div><b>{value}</b><span>{label}</span></div></div>
}

export function Bars({ values }) {
  const max = Math.max(...values.map(v => v.value))
  return <div className="bars">{values.map(v => <div key={v.label}><span style={{ height: `${(v.value / max) * 100}%` }} /><small>{v.label}</small></div>)}</div>
}
