'use client'
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
import { Trash2 } from 'lucide-react'

export interface Rental {
  id: number
  client_id: number
  equipamentos: number[]
  start_date: Date
  end_date: Date
  valor_total: number
  status: string
}

export interface RentalTableProps {
  data: Rental[]
  onDelete: (rental: Rental) => void
}

export const RentalTable = ({ data, onDelete }: RentalTableProps) => {
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
        {data.map((rental) => (
          <TableRow key={rental.id}>
            <TableCell>
              <Checkbox className="peer h-4 w-4 border-black peer-checked:bg-black peer-checked:border-black" />
            </TableCell>
            <TableCell>{rental.id}</TableCell>
            <TableCell>{rental.client_id}</TableCell>
            <TableCell>{rental.equipamentos.join(', ')}</TableCell>
            <TableCell>
              {new Date(rental.start_date).toLocaleDateString()}
            </TableCell>
            <TableCell>
              {new Date(rental.end_date).toLocaleDateString()}
            </TableCell>
            <TableCell>R$ {rental.valor_total.toFixed(2)}</TableCell>
            <TableCell>{rental.status}</TableCell>
            <TableCell className="text-right">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(rental)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
