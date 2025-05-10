import { FileInput } from 'lucide-react'

import { Button } from '../ui/button'
import { OverviewCard, OverviewCardData } from '../overview_card'
import { OverviewGraph } from '../overview_graph'
import { DateRangePicker } from '../ui/date-range-picker'

const cardsContent: OverviewCardData[] = [
  {
    id: '1',
    title: 'Novos Clientes',
    value: '134',
    percentage: 20,
    type: 'trending-up',
  },
  {
    id: '2',
    title: 'Aluguéis Ativos',
    value: '123',
    percentage: 3,
    type: 'trending-up',
  },
  {
    id: '3',
    title: 'Reservas Atuais',
    value: '284',
    percentage: -10,
    type: 'trending-down',
  },
  {
    id: '4',
    title: 'Receita Total',
    value: 'R$ 284.453,21',
    percentage: 5,
    type: 'trending-up',
  },
]

const totalRentalsData = [
  { equipment: 'Betoneira 400L', value: 12 },
  { equipment: 'Compactador de Solo', value: 9 },
  { equipment: 'Placa Vibratória', value: 7 },
  { equipment: 'Rompedor Elétrico', value: 14 },
  { equipment: 'Gerador 5kVA', value: 6 },
  { equipment: 'Andaime Tubular', value: 18 },
  { equipment: 'Cortadora de Piso', value: 11 },
]

const rentalsPerDayData = [
  { day: 'Domingo', value: 0 },
  { day: 'Segunda', value: 35 },
  { day: 'Terça', value: 33 },
  { day: 'Quarta', value: 28 },
  { day: 'Quinta', value: 20 },
  { day: 'Sexta', value: 18 },
  { day: 'Sábado', value: 10 },
]

export const Overview = () => {
  return (
    <section className="flex flex-col mt-12 gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-normal">Visão Geral</h3>

        <div className="flex gap-6">
          <DateRangePicker showCompare={false} />

          <Button>
            Gerar Relatório <FileInput />
          </Button>
        </div>
      </div>

      <div className="flex py-16 gap-6 md:flex-wrap md:gap-10 w-full overflow-x-auto no-scrollbar pr-4 md:pr-0">
        {Array.isArray(cardsContent) &&
          cardsContent.length > 0 &&
          cardsContent.map((cardData) => (
            <OverviewCard key={cardData.id} data={cardData} />
          ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
        <OverviewGraph
          data={totalRentalsData}
          title="Total de Aluguéis por Equipamento"
          xKey="equipment"
          barColor="#22c55e"
          type="bar"
        />
        <OverviewGraph
          data={rentalsPerDayData}
          title="Quantidade de Reservas por Dia"
          type="pie"
        />
      </div>
    </section>
  )
}
