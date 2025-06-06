"use client";
import { Trash2, Pencil } from "lucide-react";

interface Reserva {
  id: number;
  equipamento: string;
  codEquipamento: string;
  cliente: string;
  cpfCliente: string;
  dataInicio: string;
  dataFim: string;
  status: string;
}

interface Props {
  data: Reserva[];
  onDelete: (reserva: Reserva) => void;
  onEdit: (reserva: Reserva) => void;
}

export default function ReservasTable({ data, onDelete, onEdit }: Props) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="text-sm text-muted-foreground border-b">
          <th className="py-2">Equipamento</th>
          <th>Cód. Equipamento</th>
          <th>Cliente</th>
          <th>CPF Cliente</th>
          <th>Início</th>
          <th>Fim</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((reserva) => (
          <tr key={reserva.id} className="border-b hover:bg-gray-50 text-sm">
            <td className="py-2">{reserva.equipamento}</td>
            <td>{reserva.codEquipamento}</td>
            <td>{reserva.cliente}</td>
            <td>{reserva.cpfCliente}</td>
            <td>{reserva.dataInicio}</td>
            <td>{reserva.dataFim}</td>
            <td>{reserva.status}</td>
            <td>
             <button type="button" onClick={() => onEdit(reserva)} className="mr-2">
             <Pencil className="h-4 w-4 text-black hover:text-gray-800" />
             </button>
              <button type="button" onClick={() => onDelete(reserva)}>
                <Trash2 className="h-4 w-4 text-red-500 hover:text-red-700" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
