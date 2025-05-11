"use client";
import { useState } from "react"; // Importe useState
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Plus, ChevronDown } from "lucide-react";
import AddEquipmentModal, { EquipmentFormData } from "@/components/equipments/equipments_popup";
import EquipmentsTable from "@/components/equipments/equipments_table";

interface Equipment {
  id: number;
  codigo: string;
  nome: string;
  categoria: string;
  descricao: string;
  quantidade: number;
  status: string;
}

export default function Equipamentos() {
  const initialEquipamentos: Equipment[] = [
    {
      id: 1,
      codigo: "RAD-001",
      nome: "Rádio Motorola XPR7550e",
      categoria: "Comunicação",
      descricao: "Rádio bidirecional digital com Bluetooth",
      quantidade: 15,
      status: "Operacional",
    },
    {
      id: 2,
      codigo: "ACU-002",
      nome: "ACU - Unidade de Controle de Áudio",
      categoria: "Áudio",
      descricao: "Unidade de controle de áudio para integração de rádios",
      quantidade: 5,
      status: "Manutenção",
    },
    {
      id: 3,
      codigo: "PDM-003",
      nome: "PDM - Power Distribution Module",
      categoria: "Elétrica",
      descricao: "Módulo de distribuição de energia para sistemas críticos",
      quantidade: 10,
      status: "Operacional",
    },
    {
      id: 4,
      codigo: "DSJ-004",
      nome: "Disjuntor ABB 63A",
      categoria: "Elétrica",
      descricao: "Disjuntor de proteção para painéis elétricos",
      quantidade: 25,
      status: "Operacional",
    },
    {
      id: 5,
      codigo: "SBR-005",
      nome: "SBR - Sistema de Backup Redundante",
      categoria: "Infraestrutura",
      descricao: "Sistema de redundância para energia e comunicação",
      quantidade: 2,
      status: "Em teste",
    },
  ];

  const [equipamentos, setEquipamentos] = useState<Equipment[]>(initialEquipamentos);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  const handleDeleteEquipment = (equipment: Equipment) => {
    setEquipamentos(prevEquipamentos =>
      prevEquipamentos.filter(e => e.id !== equipment.id)
    );
  };

  const handleAddEquipmentSubmit = (formData: EquipmentFormData) => {
    const newEquipment: Equipment = {
      id: equipamentos.length > 0 ? Math.max(...equipamentos.map(e => e.id)) + 1 : 1,
      ...formData,
    };
    setEquipamentos(prevEquipamentos => [...prevEquipamentos, newEquipment]);
    console.log("Novo equipamento adicionado:", newEquipment);
    handleCloseModal();
  };

  const filteredEquipments = equipamentos.filter((equipamento) =>
    equipamento.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    equipamento.codigo.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="h-full container bg-background">
      <div className="pt-12 px-12 pb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 pr-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar item..."
              className="pl-10 bg-white text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap">
            <Filter className="h-4 w-4" />
            Filtrar
            <ChevronDown className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 whitespace-nowrap"
            onClick={handleOpenModal}
          >
            <Plus className="h-4 w-4" />
            Adicionar Equipamento
          </Button>
        </div>
      </div>

      <div className="pt-6 pl-12 pr-12">
        <div className="border border-gray-200 rounded-[25px] p-6">
          <EquipmentsTable data={filteredEquipments} onDelete={handleDeleteEquipment} />
        </div>
      </div>

      <AddEquipmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddEquipmentSubmit}
      />
    </div>
  );
}
