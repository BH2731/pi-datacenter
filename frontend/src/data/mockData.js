export const dashboardData = {
  summary: {
    availability: 99.98,
    activeServers: 42,
    totalServers: 48,
    power: 28.4,
    temperature: 22.6,
    activeAlerts: 3,
  },
  history: [
    { time: '00h', temperature: 21.8, power: 23 },
    { time: '04h', temperature: 22.1, power: 24 },
    { time: '08h', temperature: 22.8, power: 29 },
    { time: '12h', temperature: 23.4, power: 32 },
    { time: '16h', temperature: 22.9, power: 30 },
    { time: '20h', temperature: 22.6, power: 28 },
  ],
  racks: [
    { id: 'RACK-A01', usage: 82, temperature: 23.1, status: 'online', devices: 12 },
    { id: 'RACK-A02', usage: 64, temperature: 21.9, status: 'online', devices: 10 },
    { id: 'RACK-B01', usage: 91, temperature: 27.4, status: 'warning', devices: 14 },
    { id: 'RACK-B02', usage: 38, temperature: 22.0, status: 'online', devices: 7 },
  ],
  alerts: [
    { id: 1, severity: 'critical', title: 'Temperatura elevada', detail: 'RACK-B01 atingiu 27,4 °C', time: 'há 4 min', acknowledged: false },
    { id: 2, severity: 'warning', title: 'Armazenamento acima de 85%', detail: 'Servidor DB-PRD-01 com 88% de uso', time: 'há 18 min', acknowledged: false },
    { id: 3, severity: 'info', title: 'Backup concluído', detail: 'Rotina diária finalizada sem erros', time: 'há 42 min', acknowledged: true },
  ],
  servers: [
    { id: 'SRV-APP-01', role: 'Aplicação', ip: '10.0.1.21', cpu: 42, memory: 68, disk: 54, status: 'online', uptime: '36d 14h' },
    { id: 'SRV-DB-01', role: 'Banco de dados', ip: '10.0.1.31', cpu: 71, memory: 82, disk: 88, status: 'warning', uptime: '18d 02h' },
    { id: 'SRV-WEB-01', role: 'Web', ip: '10.0.1.11', cpu: 27, memory: 44, disk: 31, status: 'online', uptime: '42d 08h' },
    { id: 'SRV-BKP-01', role: 'Backup', ip: '10.0.2.41', cpu: 12, memory: 38, disk: 74, status: 'online', uptime: '11d 19h' },
    { id: 'SRV-DEV-01', role: 'Desenvolvimento', ip: '10.0.3.15', cpu: 0, memory: 0, disk: 47, status: 'offline', uptime: '—' },
  ],
  energy: {
    pue: 1.42,
    monthlyConsumption: 18420,
    monthlyCost: 13780,
    carbonAvoided: 324,
  },
}
