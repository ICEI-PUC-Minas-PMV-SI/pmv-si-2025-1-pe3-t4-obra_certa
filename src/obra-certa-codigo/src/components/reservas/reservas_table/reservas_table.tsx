"use client";
import { Trash2 } from "lucide-react";

interface Reserva {
  id: number;
  equipamento: string;
  cliente: string;
  dataInicio: string;
  dataFim: string;
  status: string;
}

interface Props {
  data: Reserva[];
  onDelete: (reserva: Reserva) => void;
}

export default function ReservasTable({ data, onDelete }: Props) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="text-sm text-muted-foreground border-b">
          <th className="py-2">Equipamento</th>
          <th>Cliente</th>
          <th>Início</th>
          <th>Fim</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map(reserva => (
          <tr key={reserva.id} className="border-b hover:bg-gray-50 text-sm">
            <td className="py-2">{reserva.equipamento}</td>
            <td>{reserva.cliente}</td>
            <td>{reserva.dataInicio}</td>
            <td>{reserva.dataFim}</td>
            <td>{reserva.status}</td>
            <td>
              <button onClick={() => onDelete(reserva)}>
                <Trash2 className="h-4 w-4 text-red-500 hover:text-red-700" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
