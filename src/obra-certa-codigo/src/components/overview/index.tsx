'use client'
import React, { use, useEffect } from 'react';
import { jsPDF } from 'jspdf'
import { FileInput } from 'lucide-react'

import { Button } from '../ui/button'
import { OverviewCard, OverviewCardData } from '../overview_card'
import { OverviewGraph } from '../overview_graph'
import { DateRangePicker } from '../ui/date-range-picker'

import { LocalStorageModel } from '@/lib/LocalStorageModel'
import type { Cliente } from '@/lib/LocalStorageModel'

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
  const handleDownloadReport = () => {
    const doc = new jsPDF()
    doc.text('Obra Certa PDF - Relatório Dashboard', 20, 30)

    const pdfBlob = doc.output('blob')
    const url = URL.createObjectURL(pdfBlob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'relatorio-obra-certa.pdf'
    link.target = '_blank'
    link.click()

    URL.revokeObjectURL(url)
  }

  useEffect(() => {
    const novoCliente: Partial<Cliente> = {
      nome: 'João Teste',
      cpf: '999.999.999-99',
      email: 'joao@email.com',
      telefone: '11999999999',
      endereco: 'Rua Teste, 123'
    }

    try {
      const cliente = LocalStorageModel.create('clientes', novoCliente, 'cpf')
      console.log('Criado:', cliente)
      const clientes = LocalStorageModel.readAll('clientes');
      console.log('Clientes:', clientes)
      const clientId = LocalStorageModel.readById('clientes', 101);
      console.log('Cliente ID 1:', clientId)
    } catch (err) {
      console.error(err)
    }
  })

  return (
    <section className="flex flex-col mt-8 gap-3">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h3 className="text-2xl font-normal">Visão Geral</h3>

        <div className="flex gap-6 md:flex-row flex-col">
          <DateRangePicker showCompare={false} />

          <Button className="min-h-[40px]" onClick={handleDownloadReport}>
            Gerar Relatório <FileInput />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 w-full">
        {Array.isArray(cardsContent) &&
          cardsContent.length > 0 &&
          cardsContent.map((cardData) => (
            <OverviewCard key={cardData.id} data={cardData} />
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
