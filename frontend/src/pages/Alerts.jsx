import { useEffect, useState } from 'react'
import { BellRing, Check, CheckCircle2 } from 'lucide-react'
import { api } from '../services/api'
import { PageIntro, Panel, StatusPill } from '../components/UI'

export default function Alerts() {
  const [alerts, setAlerts] = useState([])
  useEffect(() => { api.getAlerts().then(setAlerts) }, [])
  const acknowledge = async id => { await api.acknowledgeAlert(id); setAlerts(v => v.map(a => a.id === id ? {...a, acknowledged: true} : a)) }
  return <><PageIntro title="Central de alertas" description="Priorize eventos e registre o atendimento da equipe."/>
    <div className="mini-stats"><div><span>Críticos</span><b className="red">{alerts.filter(a=>a.severity==='critical').length}</b></div><div><span>Avisos</span><b className="orange">{alerts.filter(a=>a.severity==='warning').length}</b></div><div><span>Informativos</span><b>{alerts.filter(a=>a.severity==='info').length}</b></div><div><span>Reconhecidos</span><b className="green">{alerts.filter(a=>a.acknowledged).length}</b></div></div>
    <Panel title="Eventos recentes" subtitle="Ordenados por prioridade e horário"><div className="event-list">{alerts.map(a=><article key={a.id} className={`event-card severity-${a.severity}`}><div className="event-symbol"><BellRing/></div><div className="event-copy"><div><StatusPill status={a.severity}/><small>{a.time}</small></div><h3>{a.title}</h3><p>{a.detail}</p></div><button disabled={a.acknowledged} onClick={()=>acknowledge(a.id)} className="secondary-btn">{a.acknowledged ? <><CheckCircle2 size={16}/> Reconhecido</> : <><Check size={16}/> Reconhecer</>}</button></article>)}</div></Panel>
  </>
}
