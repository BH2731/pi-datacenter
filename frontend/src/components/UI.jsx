import { ArrowDownRight, ArrowUpRight, Server } from 'lucide-react'

export function PageIntro({ title, description, actions }) {
  return <div className="page-intro"><div><h2>{title}</h2><p>{description}</p></div>{actions && <div className="page-actions">{actions}</div>}</div>
}

export function MetricCard({ label, value, unit, trend, trendLabel, icon: Icon = Server, tone = 'cyan' }) {
  const positive = Number(trend) >= 0
  return <article className={`metric-card tone-${tone}`}><div className="metric-top"><span>{label}</span><i><Icon size={20} /></i></div><div className="metric-value">{value}<small>{unit}</small></div>{trend !== undefined && <div className={`trend ${positive ? 'up' : 'down'}`}>{positive ? <ArrowUpRight size={15} /> : <ArrowDownRight size={15} />} {Math.abs(trend)}% <span>{trendLabel}</span></div>}</article>
}

export function StatusPill({ status }) {
  const labels = { online: 'Online', warning: 'Atenção', offline: 'Offline', critical: 'Crítico', info: 'Informativo' }
  return <span className={`status-pill status-${status}`}><i />{labels[status] || status}</span>
}

export function Progress({ value, warn = 80 }) {
  return <div className="progress-wrap"><div className="progress"><i className={value >= warn ? 'warn' : ''} style={{ width: `${Math.min(value, 100)}%` }} /></div><span>{value}%</span></div>
}

export function Panel({ title, subtitle, action, children, className = '' }) {
  return <section className={`panel ${className}`}><header><div><h3>{title}</h3>{subtitle && <p>{subtitle}</p>}</div>{action}</header>{children}</section>
}

export function EmptyState({ icon: Icon, title, text }) {
  return <div className="empty-state"><Icon size={28} /><h3>{title}</h3><p>{text}</p></div>
}
