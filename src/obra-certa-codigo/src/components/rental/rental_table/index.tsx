'use client'
import { Pencil, Trash2 } from 'lucide-react'

import { Aluguel, Cliente, Equipamento } from '@/lib/LocalStorageModel'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export interface Rental {
  id: number
  cliente_id: number
  equipamentos: number[]
  data_inicio: string
  data_fim: string
  valor_total: number
  status: string
}
export interface RentalTableProps {
  data: Aluguel[]
  clientes: Cliente[]
  equipamentos: Equipamento[]
  onDelete: (rental: Rental) => void
  onEdit: (rental: Aluguel) => void
}

export const RentalTable = ({
  data,
  clientes,
  equipamentos,
  onDelete,
  onEdit,
}: RentalTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12"></TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Equipamentos</TableHead>
          <TableHead>Início</TableHead>
          <TableHead>Término</TableHead>
          <TableHead>Valor Total</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-12 text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((rental) => {
          const cliente = clientes.find((c) => c.id === rental.cliente_id)
          const equipamentosNomes = rental.equipamentos
            .map(
              (id) => equipamentos.find((eq) => eq.id === id)?.nome || `#${id}`
            )
            .join(', ')
          return (
            <TableRow key={rental.id}>
              <TableCell>
                <Checkbox className="peer h-4 w-4 border-black peer-checked:bg-black peer-checked:border-black" />
              </TableCell>
              <TableCell>{rental.id}</TableCell>
              <TableCell>
                {cliente ? cliente.nome : rental.cliente_id}
              </TableCell>
              <TableCell>{equipamentosNomes}</TableCell>
              <TableCell>
                {new Date(rental.data_inicio).toLocaleDateString('pt-BR')}
              </TableCell>
              <TableCell>
                {new Date(rental.data_fim).toLocaleDateString('pt-BR')}
              </TableCell>
              <TableCell>R$ {rental.valor_total.toFixed(2)}</TableCell>
              <TableCell>{rental.status}</TableCell>
              <TableCell className="text-right flex gap-1 justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(rental)}
                  aria-label="Editar"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(rental)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
