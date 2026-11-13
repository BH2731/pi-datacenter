import { useEffect, useMemo, useState } from 'react'
import { Download, Search, Server } from 'lucide-react'
import { api } from '../services/api'
import { PageIntro, Panel, Progress, StatusPill } from '../components/UI'

export default function Infrastructure() {
  const [servers, setServers] = useState([])
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  useEffect(() => { api.getServers().then(setServers) }, [])
  const filtered = useMemo(() => servers.filter(s => (filter === 'all' || s.status === filter) && `${s.id} ${s.role} ${s.ip}`.toLowerCase().includes(query.toLowerCase())), [servers, query, filter])
  return <>
    <PageIntro title="Infraestrutura" description="Inventário, desempenho e disponibilidade dos servidores." actions={<button className="secondary-btn"><Download size={16}/> Exportar inventário</button>}/>
    <div className="mini-stats"><div><span>Total</span><b>{servers.length}</b></div><div><span>Online</span><b className="green">{servers.filter(s=>s.status==='online').length}</b></div><div><span>Em atenção</span><b className="orange">{servers.filter(s=>s.status==='warning').length}</b></div><div><span>Offline</span><b className="red">{servers.filter(s=>s.status==='offline').length}</b></div></div>
    <Panel title="Servidores cadastrados" subtitle="Dados atualizados pela API da infraestrutura">
      <div className="table-toolbar"><div className="search-field"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar por nome, função ou IP"/></div><select value={filter} onChange={e=>setFilter(e.target.value)}><option value="all">Todos os estados</option><option value="online">Online</option><option value="warning">Atenção</option><option value="offline">Offline</option></select></div>
      <div className="table-scroll"><table><thead><tr><th>Servidor</th><th>Endereço IP</th><th>Status</th><th>CPU</th><th>Memória</th><th>Disco</th><th>Uptime</th></tr></thead><tbody>{filtered.map(s => <tr key={s.id}><td><div className="server-name"><i><Server size={16}/></i><span><b>{s.id}</b><small>{s.role}</small></span></div></td><td><code>{s.ip}</code></td><td><StatusPill status={s.status}/></td><td><Progress value={s.cpu}/></td><td><Progress value={s.memory}/></td><td><Progress value={s.disk}/></td><td>{s.uptime}</td></tr>)}</tbody></table></div>
    </Panel>
  </>
}
