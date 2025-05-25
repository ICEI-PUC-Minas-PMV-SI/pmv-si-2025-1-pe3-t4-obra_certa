'use client'
import { ChevronDown, Filter, Plus, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import ClientTable from '@/components/clients/clients_table'
import { Cliente, LocalStorageModel } from '@/lib/LocalStorageModel'
import { AddClientModal } from '@/components/clients/clients_popup'


export default function Clientes() {
  const [clientes, setclientes] = useState<Cliente[]>([])
  const [edit, setEdit] = useState<Cliente | null>(null)
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getClients = () => {
    const clients: Cliente[] = LocalStorageModel.readAll('clientes')
    setclientes(clients)
  }

  const handleEdit = (client: Cliente) => {
    setEdit(client)
    handleOpenModal()
  }

  const handleRegister = () => {
    setEdit(null)
    handleOpenModal()
  }

  // deletar cliente da tabela
  const handleDelete = (client: Cliente) => {
    LocalStorageModel.delete('clientes', client.id)
    getClients()
  }

  // clientes filtrados pela barra de busca
  const clientesFilteres: Cliente[] = clientes?.filter((client) =>
    client.nome.toLowerCase().includes(search.toLowerCase()) ||
    client.cpf.toLowerCase().includes(search.toLowerCase()),
  )

  const handleCreateOrUpdate = (client: Cliente) => {
    if (edit) {
      LocalStorageModel.update('clientes', edit.id, client)
    } else {
      LocalStorageModel.create('clientes', client)
    }
    getClients()
    handleCloseModal()
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    getClients()
    window.addEventListener('storage', getClients)
    return () => {
      window.removeEventListener('storage', getClients)
    }
  }, [])

  return (
    <div className="h-full container bg-background">
      <div className="text-3xl font-normal pt-12 pl-12 pr-12">
        <h1>Clientes</h1>
      </div>
      <div className="pt-12 px-12 pb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 pr-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar item..."
              className="pl-10 bg-white text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap">
            <Filter className="h-4 w-4" />
            Filtrar
            <ChevronDown className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 whitespace-nowrap bg-primary text-white border border-primary"
            onClick={handleRegister}
          >
            <Plus className="h-4 w-4" />
            Cadastrar Cliente
          </Button>
        </div>
      </div>

      <div className="pt-6 pl-12 pr-12 pb-12">
        <div className="border border-gray-200 rounded-lg p-6">
          <ClientTable data={clientesFilteres} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
      </div>

      <AddClientModal
        data={edit}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleCreateOrUpdate} />

    </div>
  )
}
