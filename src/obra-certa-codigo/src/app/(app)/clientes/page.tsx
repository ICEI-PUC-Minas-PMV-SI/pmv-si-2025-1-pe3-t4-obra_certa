"use client";
import { ChevronDown, Filter, Plus, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import ClientTable from '@/components/clients/clients_table'
import { Cliente, LocalStorageModel } from '@/lib/LocalStorageModel'


export default function Clientes() {
  const initialClients: Cliente[] = LocalStorageModel.readAll<Cliente>('clientes');

  const [clients, setClients] = useState<Cliente[]>(initialClients);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter((client) =>
    client.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.cpf.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          >
            <Plus className="h-4 w-4" />
            Cadastrar Cliente
          </Button>
        </div>
      </div>

      <div className="pt-6 pl-12 pr-12">
        <div className="border border-gray-200 rounded-lg p-6">
          <ClientTable data={filteredClients} onDelete={()=>{}}/>
        </div>
      </div>
    </div>
  )
}
