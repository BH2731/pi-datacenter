import { useState } from 'react'
import { Activity, ArrowRight, Eye, EyeOff, LockKeyhole, Mail, Server, ShieldCheck, Wifi } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ email: 'admin@nexus.local', password: 'admin123' })
  if (user) return <Navigate to="/" replace />
  const submit = async (e) => {
    e.preventDefault(); setError(''); setLoading(true)
    try { await login(form); navigate('/') } catch (err) { setError(err.message) } finally { setLoading(false) }
  }
  return <main className="login-page">
    <section className="login-visual">
      <div className="login-brand"><span><Activity /></span><div><b>NEXUS</b><small>DATACENTER</small></div></div>
      <div className="login-message"><span className="eyebrow">PROJETO INTEGRADOR</span><h1>Infraestrutura sob controle, <em>dados em movimento.</em></h1><p>Monitoramento inteligente para decisões mais rápidas, operação eficiente e disponibilidade contínua.</p></div>
      <div className="login-stats"><div><Server /><span><b>48</b><small>servidores</small></span></div><div><Wifi /><span><b>99,98%</b><small>disponibilidade</small></span></div><div><ShieldCheck /><span><b>24/7</b><small>monitoramento</small></span></div></div>
      <div className="server-lines" aria-hidden="true"><i/><i/><i/><i/><i/></div>
    </section>
    <section className="login-form-wrap">
      <form className="login-form" onSubmit={submit}>
        <div className="login-form-heading"><span className="login-mobile-logo"><Activity /></span><span className="eyebrow">ACESSO RESTRITO</span><h2>Bem-vindo de volta</h2><p>Entre com suas credenciais para acessar o painel.</p></div>
        <label>E-mail institucional<div className="input-with-icon"><Mail size={18}/><input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="nome@instituicao.com" required /></div></label>
        <label>Senha<div className="input-with-icon"><LockKeyhole size={18}/><input type={show ? 'text' : 'password'} value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder="Sua senha" required/><button type="button" onClick={() => setShow(!show)} aria-label="Mostrar senha">{show ? <EyeOff size={18}/> : <Eye size={18}/>}</button></div></label>
        <div className="login-options"><label><input type="checkbox"/> Manter conectado</label><a href="#recuperar">Esqueci minha senha</a></div>
        {error && <p className="form-error">{error}</p>}
        <button className="primary-btn login-submit" disabled={loading}>{loading ? 'Entrando...' : <>Entrar no painel <ArrowRight size={18}/></>}</button>
        <p className="demo-hint">Demonstração: use os dados já preenchidos.</p>
      </form>
    </section>
  </main>
}
