'use client'

import { useState } from 'react'
import { Search, Filter, ChevronDown, Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { Rental, RentalTable } from '@/components/rental/rental_table'
import { AddRentalModal } from '@/components/rental/rental_popup'

export default function Alugueis() {
  const initialAluguelList: Rental[] = [
    {
      id: 301,
      client_id: 101,
      equipamentos: [501],
      start_date: new Date('2025-05-01'),
      end_date: new Date('2025-05-07'),
      valor_total: 210.0,
      status: 'Ativo',
    },
    {
      id: 302,
      client_id: 102,
      equipamentos: [502, 503],
      start_date: new Date('2025-05-03'),
      end_date: new Date('2025-05-10'),
      valor_total: 350.0,
      status: 'Encerrado',
    },
  ]

  const [aluguéis, setAlugueis] = useState<Rental[]>(initialAluguelList)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleDelete = (aluguel: Rental) => {
    setAlugueis((prev) => prev.filter((a) => a.id !== aluguel.id))
  }

  const handleAddAluguelSubmit = (formData: Omit<Rental, 'id'>) => {
    const novoAluguel: Rental = {
      id: aluguéis.length > 0 ? Math.max(...aluguéis.map((a) => a.id)) + 1 : 1,
      ...formData,
    }
    setAlugueis((prev) => [...prev, novoAluguel])
    console.log('Novo aluguel adicionado:', novoAluguel)
    handleCloseModal()
  }

  const filteredAlugueis = aluguéis.filter((a) =>
    a.status.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-full container bg-background md:px-12 pt-12 pb-8">
      <div>
        <h2 className="text-3xl font-normal">Aluguéis</h2>
      </div>

      <div className="pt-12 pb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 pr-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por status..."
              className="pl-10 bg-white text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Button
            variant="outline"
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <Filter className="h-4 w-4" />
            Filtrar
            <ChevronDown className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 whitespace-nowrap bg-primary text-white border border-primary"
            onClick={handleOpenModal}
          >
            <Plus className="h-4 w-4" />
            Adicionar Aluguel
          </Button>
        </div>
      </div>

      <div className="pt-6">
        <div className="border border-gray-200 rounded-[25px] p-6">
          <RentalTable data={filteredAlugueis} onDelete={handleDelete} />
        </div>
      </div>

      <AddRentalModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddAluguelSubmit}
      />
    </div>
  )
}
