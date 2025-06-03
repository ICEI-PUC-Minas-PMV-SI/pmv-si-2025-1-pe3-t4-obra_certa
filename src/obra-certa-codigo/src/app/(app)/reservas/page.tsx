"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Plus, ChevronDown } from "lucide-react";
import AddReservaModal, { ReservaFormData } from "@/components/reservas/reservas_popup/reservas_popup";
import ReservasTable from "@/components/reservas/reservas_table/reservas_table";

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

export default function Reservas() {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddReservaSubmit = (formData: ReservaFormData) => {
    const novaReserva: Reserva = {
      id: reservas.length > 0 ? Math.max(...reservas.map(r => r.id)) + 1 : 1,
      ...formData
    };
    setReservas(prev => [...prev, novaReserva]);
    handleCloseModal();
  };

  const handleDeleteReserva = (reserva: Reserva) => {
    setReservas(prev => prev.filter(r => r.id !== reserva.id));
  };

  const reservasFiltradas = reservas.filter((reserva) =>
    reserva.equipamento.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reserva.cliente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full container bg-background">
      <div className="text-3xl font-normal pt-12 pl-12 pr-12">
        <h1>Reservas</h1>
      </div>

      <div className="pt-12 px-12 pb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 pr-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por cliente ou equipamento..."
              className="pl-10 bg-white text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filtrar
            <ChevronDown className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 bg-primary text-white border border-primary"
            onClick={handleOpenModal}
          >
            <Plus className="h-4 w-4" />
            Nova Reserva
          </Button>
        </div>
      </div>

      <div className="pt-6 pl-12 pr-12">
        <div className="border border-gray-200 rounded-[25px] p-6">
          <ReservasTable data={reservasFiltradas} onDelete={handleDeleteReserva} />
        </div>
      </div>

      <AddReservaModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddReservaSubmit}
      />
    </div>
  );
}

