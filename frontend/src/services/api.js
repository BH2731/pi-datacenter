import { dashboardData } from '../data/mockData'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'
const USE_MOCK = import.meta.env.VITE_USE_MOCK !== 'false'

const wait = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms))

async function request(path, options = {}) {
  const token = localStorage.getItem('nexus_token')
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  })
  if (!response.ok) throw new Error((await response.json().catch(() => ({}))).message || 'Falha na comunicação com o servidor')
  return response.status === 204 ? null : response.json()
}

export const api = {
  async login(credentials) {
    if (!USE_MOCK) return request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) })
    await wait(550)
    if (!credentials.email || !credentials.password) throw new Error('Informe e-mail e senha.')
    return { token: 'demo-token', user: { name: 'Administrador', email: credentials.email, role: 'Administrador' } }
  },
  async getDashboard() { if (!USE_MOCK) return request('/dashboard'); await wait(); return dashboardData },
  async getServers() { if (!USE_MOCK) return request('/servers'); await wait(); return dashboardData.servers },
  async getAlerts() { if (!USE_MOCK) return request('/alerts'); await wait(); return dashboardData.alerts },
  async acknowledgeAlert(id) { if (!USE_MOCK) return request(`/alerts/${id}/acknowledge`, { method: 'PATCH' }); await wait(200); return { success: true } },
  async getEnergy() { if (!USE_MOCK) return request('/energy'); await wait(); return dashboardData.energy },
}

export { API_URL, USE_MOCK }
