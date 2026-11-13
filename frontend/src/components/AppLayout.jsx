import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Activity, Bell, Bolt, ChevronLeft, FileBarChart, LayoutDashboard, LogOut, Menu, Server, Settings, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { USE_MOCK } from '../services/api'

const navItems = [
  { to: '/', label: 'Visão geral', icon: LayoutDashboard },
  { to: '/infraestrutura', label: 'Infraestrutura', icon: Server },
  { to: '/alertas', label: 'Alertas', icon: Bell, badge: 3 },
  { to: '/energia', label: 'Energia e ambiente', icon: Bolt },
  { to: '/relatorios', label: 'Relatórios', icon: FileBarChart },
  { to: '/configuracoes', label: 'Configurações', icon: Settings },
]

export default function AppLayout() {
  const [open, setOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()
  const current = navItems.find((item) => item.to === location.pathname)?.label || 'Visão geral'
  return (
    <div className={`app-shell ${collapsed ? 'is-collapsed' : ''}`}>
      <button className="mobile-menu" onClick={() => setOpen(true)} aria-label="Abrir menu"><Menu /></button>
      {open && <button className="nav-backdrop" onClick={() => setOpen(false)} aria-label="Fechar menu" />}
      <aside className={`sidebar ${open ? 'is-open' : ''}`}>
        <div className="brand"><span className="brand-mark"><Activity size={23} /></span><span className="brand-copy"><b>NEXUS</b><small>DATACENTER</small></span><button className="mobile-close" onClick={() => setOpen(false)}><X /></button></div>
        <nav aria-label="Menu principal">
          <span className="nav-caption">MONITORAMENTO</span>
          {navItems.map(({ to, label, icon: Icon, badge }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)} title={collapsed ? label : undefined}>
              <Icon size={19} /><span>{label}</span>{badge && <em>{badge}</em>}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="system-status"><i /> <span><b>Sistema operacional</b><small>{USE_MOCK ? 'Modo demonstração' : 'Conectado à AWS'}</small></span></div>
          <button className="logout" onClick={logout}><LogOut size={18} /><span>Sair da conta</span></button>
        </div>
        <button className="collapse-btn" onClick={() => setCollapsed((v) => !v)} aria-label="Recolher menu"><ChevronLeft size={17} /></button>
      </aside>
      <main className="main-area">
        <header className="topbar">
          <div><span className="eyebrow">PROJETO INTEGRADOR</span><h1>{current}</h1></div>
          <div className="top-actions"><button className="notification-btn" aria-label="Notificações"><Bell size={20} /><i /></button><div className="user-chip"><span>{user?.name?.slice(0, 2).toUpperCase()}</span><div><b>{user?.name}</b><small>{user?.role}</small></div></div></div>
        </header>
        <div className="page-content"><Outlet /></div>
      </main>
    </div>
  )
}
