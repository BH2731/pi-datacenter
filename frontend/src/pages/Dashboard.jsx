import { useEffect, useState } from 'react'
import { Activity, BellRing, Bolt, RefreshCw, Server, Thermometer, Wifi } from 'lucide-react'
import { api } from '../services/api'
import { LineChart } from '../components/Charts'
import { MetricCard, PageIntro, Panel, Progress, StatusPill } from '../components/UI'

export default function Dashboard() {
  const [data, setData] = useState(null)
  const [refreshing, setRefreshing] = useState(false)
  const load = async () => { setRefreshing(true); setData(await api.getDashboard()); setRefreshing(false) }
  useEffect(() => { load() }, [])
  if (!data) return <div className="loading-screen"><Activity className="spin"/> Carregando telemetria...</div>
  const { summary: s } = data
  return <>
    <PageIntro title="Centro de operações" description="Acompanhe a saúde da infraestrutura em tempo real." actions={<><span className="live-indicator"><i/> Atualização ao vivo</span><button className="secondary-btn" onClick={load}><RefreshCw size={16} className={refreshing ? 'spin' : ''}/> Atualizar</button></>} />
    <div className="metric-grid">
      <MetricCard label="Disponibilidade" value={s.availability.toFixed(2)} unit="%" trend={0.02} trendLabel="últimos 30 dias" icon={Wifi}/>
      <MetricCard label="Servidores ativos" value={s.activeServers} unit={`/ ${s.totalServers}`} trend={4.8} trendLabel="desde ontem" icon={Server} tone="blue"/>
      <MetricCard label="Consumo atual" value={s.power} unit="kW" trend={-6.2} trendLabel="comparado à média" icon={Bolt} tone="green"/>
      <MetricCard label="Temperatura média" value={s.temperature} unit="°C" trend={1.4} trendLabel="última hora" icon={Thermometer} tone="orange"/>
    </div>
    <div className="dashboard-grid">
      <Panel title="Temperatura e carga" subtitle="Comportamento nas últimas 24 horas" action={<div className="chart-legend"><i/> Temperatura</div>} className="chart-panel"><LineChart data={data.history}/></Panel>
      <Panel title="Alertas recentes" subtitle={`${s.activeAlerts} eventos requerem atenção`} action={<a className="text-link" href="/alertas">Ver todos</a>} className="alerts-panel">
        <div className="alert-list">{data.alerts.map(a => <div className={`alert-row severity-${a.severity}`} key={a.id}><span className="alert-icon"><BellRing size={17}/></span><div><b>{a.title}</b><p>{a.detail}</p></div><small>{a.time}</small></div>)}</div>
      </Panel>
      <Panel title="Ocupação dos racks" subtitle="Capacidade e condição térmica" action={<a className="text-link" href="/infraestrutura">Detalhes</a>} className="racks-panel">
        <div className="rack-grid">{data.racks.map(r => <article className="rack-card" key={r.id}><div><span className="rack-icon"><Server size={18}/></span><div><b>{r.id}</b><small>{r.devices} dispositivos</small></div><StatusPill status={r.status}/></div><Progress value={r.usage}/><footer><span>Ocupação <b>{r.usage}%</b></span><span>Temperatura <b>{r.temperature} °C</b></span></footer></article>)}</div>
      </Panel>
    </div>
  </>
}
