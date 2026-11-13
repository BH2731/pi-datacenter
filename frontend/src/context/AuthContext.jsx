import { createContext, useContext, useMemo, useState } from 'react'
import { api } from '../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('nexus_user') || 'null'))
  const login = async (credentials) => {
    const data = await api.login(credentials)
    localStorage.setItem('nexus_token', data.token)
    localStorage.setItem('nexus_user', JSON.stringify(data.user))
    setUser(data.user)
  }
  const logout = () => {
    localStorage.removeItem('nexus_token')
    localStorage.removeItem('nexus_user')
    setUser(null)
  }
  const value = useMemo(() => ({ user, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
