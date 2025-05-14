'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'
import { useState, useEffect } from 'react'
import { Card } from '../ui/card'
import { useIsMobile } from '@/hooks/use-mobile'

interface Props {
  data: {
    [key: string]: string | number
  }[]
  title: string
  barColor?: string
  xKey?: string
  type?: 'bar' | 'pie'
}

const COLORS = [
  '#3b82f6',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#6366f1',
  '#14b8a6',
  '#f43f5e',
]

export const OverviewGraph = ({
  data,
  title,
  barColor = '#2563eb',
  xKey = 'day',
  type = 'bar',
}: Props) => {
  const [clickedPayload, setClickedPayload] = useState<any>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleResize = () => {
      setClickedPayload(null)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Card className="bg-white rounded-xl flex flex-col shadow-xl p-4 w-full min-h-[320px] md:min-h-[380px] hover:shadow-2xl transition-all duration-300 ease-in-out">
      <h4 className="text-base font-medium mb-2">{title}</h4>
      <div className="w-full h-full flex-1 relative">
        {isMobile && clickedPayload && (
          <div className="absolute top-2 left-2 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-md text-sm z-10">
            <p className="font-semibold">{clickedPayload.label}</p>
            <p>
              {type === 'bar'
                ? `Aluguéis: ${clickedPayload.value}`
                : `Reservas: ${clickedPayload.value}`}
            </p>
          </div>
        )}

        <ResponsiveContainer width="100%" height="100%">
          {type === 'bar' ? (
            <BarChart data={data}>
              <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              {!isMobile && (
                <Tooltip
                  cursor={{ fill: '#f0f0f0' }}
                  content={({ active, payload, label }) => {
                    if (!active || !payload || payload.length === 0) return null
                    return (
                      <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-md text-sm">
                        <p className="font-semibold">{label}</p>
                        <p>{`Aluguéis: ${payload[0].value}`}</p>
                      </div>
                    )
                  }}
                />
              )}
              <Bar
                dataKey="value"
                fill={barColor}
                radius={[4, 4, 0, 0]}
                onClick={(data) => {
                  if (!isMobile) return
                  const label =
                    type === 'bar'
                      ? (data[xKey] as string)
                      : (data.name as string)
                  const value = data.value
                  if (
                    clickedPayload?.label === label &&
                    clickedPayload?.value === value
                  ) {
                    setClickedPayload(null)
                  } else {
                    setClickedPayload({ label, value })
                  }
                }}
              />
            </BarChart>
          ) : (
            <PieChart>
              {!isMobile && (
                <Tooltip
                  content={({ active, payload }) => {
                    if (!active || !payload || payload.length === 0) return null
                    return (
                      <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-md text-sm">
                        <p className="font-semibold">{payload[0].name}</p>
                        <p>{`Reservas: ${payload[0].value}`}</p>
                      </div>
                    )
                  }}
                />
              )}
              <Legend />
              <Pie
                data={data}
                dataKey="value"
                nameKey="day"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
                onClick={(data) => {
                  if (!isMobile) return
                  const label = data.name
                  const value = data.value
                  if (
                    clickedPayload?.label === label &&
                    clickedPayload?.value === value
                  ) {
                    setClickedPayload(null)
                  } else {
                    setClickedPayload({ label, value })
                  }
                }}
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
