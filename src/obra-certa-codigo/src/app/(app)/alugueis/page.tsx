'use client'
import { useEffect, useState } from 'react'
import { Search, Filter, ChevronDown, Plus } from 'lucide-react'

import {
  LocalStorageModel,
  Aluguel,
  Cliente,
  Equipamento,
} from '@/lib/LocalStorageModel'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RentalTable } from '@/components/rental/rental_table'
import { AddRentalModal } from '@/components/rental/rental_popup'

export default function Alugueis() {
  const [aluguéis, setAlugueis] = useState<Aluguel[]>([])
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [editRental, setEditRental] = useState<Aluguel | null>(null)

  const handleEdit = (rental: Aluguel) => {
    setEditRental(rental)
    setIsModalOpen(true)
  }

  const handleOpenModal = () => setIsModalOpen(true)

  const handleModalClose = () => {
    setIsModalOpen(false)
    setEditRental(null)
  }

  const handleDelete = (aluguel: Aluguel) => {
    LocalStorageModel.delete('alugueis', aluguel.id)
    setAlugueis(LocalStorageModel.readAll<Aluguel>('alugueis'))
  }

  const handleAddOrEditSubmit = (formData: Aluguel) => {
    if (editRental) {
      LocalStorageModel.update<Aluguel>('alugueis', editRental.id, formData)
    } else {
      LocalStorageModel.create<Aluguel>('alugueis', formData)
    }
    setAlugueis(LocalStorageModel.readAll<Aluguel>('alugueis'))
    handleModalClose()
  }

  const filteredAlugueis = aluguéis.filter((a) =>
    a.status.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    setAlugueis(LocalStorageModel.readAll<Aluguel>('alugueis'))
    setClientes(LocalStorageModel.readAll<Cliente>('clientes'))
    setEquipamentos(LocalStorageModel.readAll<Equipamento>('equipamentos'))
  }, [])

  return (
    <div className="min-h-[calc(100svh-150px)] container bg-background md:px-12 pt-12 pb-8">
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
          <RentalTable
            data={filteredAlugueis}
            clientes={clientes}
            equipamentos={equipamentos}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>

      <AddRentalModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleAddOrEditSubmit}
        initialData={editRental || undefined}
      />
    </div>
  )
}
