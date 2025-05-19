import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

export interface ClientsTableProps {
  data: {
    id: number,
    nome: string,
    email: string,
    cpf: string
  }[],
  onDelete: (client: {
    id: number
    nome: string
    email: string
    cpf: string
  }) => void
}

export default function ClientTable(params: ClientsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12"></TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>CPF</TableHead>
          <TableHead className="w-12 text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {params.data.map((client) => (
          <TableRow key={client.id}>
            <TableCell>
              <Checkbox className="peer h-4 w-4 border-black peer-checked:bg-black peer-checked:border-black" />
            </TableCell>
            <TableCell className="font-medium">{client.nome}</TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell>{client.cpf}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon" onClick={() => params.onDelete(client)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}