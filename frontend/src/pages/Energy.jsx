import { useEffect, useState } from 'react'
import { Bolt, CloudSun, DollarSign, Leaf, Thermometer } from 'lucide-react'
import { api } from '../services/api'
import { Bars, Donut } from '../components/Charts'
import { MetricCard, PageIntro, Panel } from '../components/UI'

export default function Energy() {
  const [energy, setEnergy] = useState(null)
  useEffect(()=>{api.getEnergy().then(setEnergy)},[])
  if(!energy) return null
  return <><PageIntro title="Energia e ambiente" description="Indicadores de eficiência energética e condições ambientais."/>
    <div className="metric-grid"><MetricCard label="PUE atual" value={energy.pue} unit="" trend={-3.1} trendLabel="melhoria mensal" icon={Bolt}/><MetricCard label="Consumo no mês" value={(energy.monthlyConsumption/1000).toFixed(1)} unit="MWh" icon={CloudSun} tone="blue"/><MetricCard label="Custo estimado" value={`R$ ${(energy.monthlyCost/1000).toFixed(1)}`} unit="mil" icon={DollarSign} tone="orange"/><MetricCard label="CO₂ evitado" value={energy.carbonAvoided} unit="kg" icon={Leaf} tone="green"/></div>
    <div className="energy-grid"><Panel title="Eficiência energética" subtitle="Power Usage Effectiveness"><div className="donut-wrap"><Donut value={energy.pue} label="PUE" color="#30d9af"/><div><h4>Operação eficiente</h4><p>Quanto mais próximo de 1,0, menor o gasto de energia com refrigeração e infraestrutura auxiliar.</p><span className="status-pill status-online"><i/>Dentro da meta</span></div></div></Panel><Panel title="Consumo semanal" subtitle="Energia utilizada em kWh"><Bars values={[{label:'SEG',value:580},{label:'TER',value:640},{label:'QUA',value:610},{label:'QUI',value:720},{label:'SEX',value:685},{label:'SÁB',value:430},{label:'DOM',value:390}]}/></Panel></div>
    <Panel title="Condições ambientais" subtitle="Sensores distribuídos na sala técnica"><div className="environment-strip"><div><Thermometer/><span><small>Temperatura</small><b>22,6 °C</b></span></div><div><CloudSun/><span><small>Umidade relativa</small><b>46%</b></span></div><div><Bolt/><span><small>Carga do nobreak</small><b>68%</b></span></div><div><Leaf/><span><small>Qualidade do ar</small><b>Boa</b></span></div></div></Panel>
  </>
}
