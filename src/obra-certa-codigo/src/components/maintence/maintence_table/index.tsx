import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

export interface Maintence {
  id: number;
  client_id: number;
  equipamentos: number[];
  start_date: Date;
  end_date: Date;
  status: string;
}

export interface ManutencaoTableProps {
  data: Maintence[];
  onDelete: (manutencao: Maintence) => void;
}

export default function ManutencaoTable({ data, onDelete }: ManutencaoTableProps) {
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
          <TableHead>Status</TableHead>
          <TableHead className="w-12 text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((manutencao) => (
          <TableRow key={manutencao.id}>
            <TableCell>
              <Checkbox className="peer h-4 w-4 border-black peer-checked:bg-black peer-checked:border-black" />
            </TableCell>
            <TableCell>{manutencao.id}</TableCell>
            <TableCell>{manutencao.client_id}</TableCell>
            <TableCell>{manutencao.equipamentos.join(', ')}</TableCell>
            <TableCell>{new Date(manutencao.start_date).toLocaleDateString()}</TableCell>
            <TableCell>{new Date(manutencao.end_date).toLocaleDateString()}</TableCell>
            <TableCell>{manutencao.status}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon" onClick={() => onDelete(manutencao)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
