import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import AppLayout from './components/AppLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Infrastructure from './pages/Infrastructure'
import Alerts from './pages/Alerts'
import Energy from './pages/Energy'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function ProtectedRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="infraestrutura" element={<Infrastructure />} />
        <Route path="alertas" element={<Alerts />} />
        <Route path="energia" element={<Energy />} />
        <Route path="relatorios" element={<Reports />} />
        <Route path="configuracoes" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
