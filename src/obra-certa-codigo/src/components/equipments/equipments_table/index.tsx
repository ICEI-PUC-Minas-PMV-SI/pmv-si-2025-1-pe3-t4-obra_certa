// components/equipments/equipments_table.tsx
"use client"

import { useRouter } from "next/navigation"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

export interface EquipmentsTableProps {
  data: {
    id: number
    codigo: string
    nome: string
    categoria: string
    descricao: string
    quantidade: number
    status: string
  }[]
  onDelete: (equipment: {
    id: number
    codigo: string
    nome: string
    categoria: string
    descricao: string
    quantidade: number
    status: string
  }) => void
}

export default function EquipmentsTable({ data, onDelete }: EquipmentsTableProps) {
  const router = useRouter()

  const handleRowClick = (id: number) => {
    router.push(`/equipamentos/${id}`)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12"></TableHead>
          <TableHead>Código</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Qtd.</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-12 text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((equipamento) => (
          <TableRow
            key={equipamento.id}
            className="cursor-pointer hover:bg-muted"
            onClick={() => handleRowClick(equipamento.id)}
          >
            <TableCell onClick={(e) => e.stopPropagation()}>
              <Checkbox className="peer h-4 w-4 border-black peer-checked:bg-black peer-checked:border-black" />
            </TableCell>
            <TableCell>{equipamento.codigo}</TableCell>
            <TableCell className="font-medium">{equipamento.nome}</TableCell>
            <TableCell>{equipamento.categoria}</TableCell>
            <TableCell>{equipamento.descricao}</TableCell>
            <TableCell>{equipamento.quantidade}</TableCell>
            <TableCell>{equipamento.status}</TableCell>
            <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
              <Button variant="ghost" size="icon" onClick={() => onDelete(equipamento)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}