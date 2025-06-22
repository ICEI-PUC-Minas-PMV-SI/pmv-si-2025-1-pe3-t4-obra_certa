import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Pencil, Trash2 } from 'lucide-react'
import { Cliente } from '@/lib/LocalStorageModel'
import {useRouter} from "next/navigation";

export interface ClientsTableProps {
  data: Cliente[],
  onDelete: (client: Cliente) => void,
  onEdit: (client: Cliente) => void,
}

export default function ClientTable({data, onDelete, onEdit}: ClientsTableProps) {
    const router = useRouter()

    const handleRowClick = (id: number) => {
        router.push(`/clientes/${id}`)
    }

    return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12"></TableHead>
          <TableHead>Id</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>CPF</TableHead>
          <TableHead className="w-12 text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((client) => (
          <TableRow className="cursor-pointer" key={client.id} onClick={() => handleRowClick(client.id)}>
            <TableCell onClick={(e) => e.stopPropagation()}>
              <Checkbox className="peer h-4 w-4 border-black peer-checked:bg-black peer-checked:border-black" />
            </TableCell>
            <TableCell className="font-medium">{client.id}</TableCell>
            <TableCell className="text-primary hover:underline">{client.nome}</TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell>{client.cpf}</TableCell>
            <TableCell className="text-right flex gap-1 justify-end" onClick={(e) => e.stopPropagation()}>
              <Button variant="ghost" size="icon" aria-label="Editar" onClick={():void => onEdit(client)}>
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Deletar" onClick={():void => onDelete(client)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}