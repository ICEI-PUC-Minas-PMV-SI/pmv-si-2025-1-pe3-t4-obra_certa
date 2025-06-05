"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {Cliente, LocalStorageModel} from '@/lib/LocalStorageModel'

interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  endereco: string;
}

export interface ReservaFormData {
  equipamento: string;
  codEquipamento: string;
  cliente: string;
  cpfCliente: string;
  dataInicio: string;
  dataFim: string;
  status: string;
}

interface AddReservaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: ReservaFormData) => void;
}

export default function AddReservaModal({ isOpen, onClose, onSubmit }: AddReservaModalProps) {
  

  const [formData, setFormData] = useState<ReservaFormData>({
    equipamento: "",
    codEquipamento: "",
    cliente: "",
    cpfCliente: "",
    dataInicio: "",
    dataFim: "",
    status: "Reservado",
  });

    const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const clientesFromStorage = LocalStorageModel.readAll<Cliente>("clientes");
    setClientes(clientesFromStorage);
    }, []);
   const handleChange = (
   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
   ) => {
   const { name, value } = e.target;
   setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      equipamento: "",
      codEquipamento: "",
      cliente: "",
      cpfCliente: "",
      dataInicio: "",
      dataFim: "",
      status: "Reservado",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Reserva</DialogTitle>
        </DialogHeader>
        <Input placeholder="Equipamento" name="equipamento" value={formData.equipamento} onChange={handleChange} />
         <Input
          placeholder="Código do Equipamento"
          name="codEquipamento"
          value={formData.codEquipamento}
          onChange={handleChange}
        />
        <select
  name="cliente"
  value={formData.cliente}
  onChange={(e) => {
    const nomeSelecionado = e.target.value;
    const clienteSelecionado = clientes.find(c => c.nome === nomeSelecionado);
    setFormData(prev => ({
      ...prev,
      cliente: nomeSelecionado,
      cpfCliente: clienteSelecionado?.cpf || ""
    }));
  }}
  className="border rounded px-3 py-2 text-sm w-full"
>
  <option value="">Selecione um cliente</option>
  {clientes.map(cliente => (
    <option key={cliente.id} value={cliente.nome}>
      {cliente.nome}
    </option>
  ))}
</select>
         <Input
          placeholder="CPF do Cliente"
          name="cpfCliente"
          value={formData.cpfCliente}
          onChange={handleChange}
        />
        <Input type="date" name="dataInicio" value={formData.dataInicio} onChange={handleChange} />
        <Input type="date" name="dataFim" value={formData.dataFim} onChange={handleChange} />
       <select name="status" value={formData.status} onChange={handleChange} className="border rounded px-3 py-2 text-sm w-full">
         <option value="Reservado">Reservado</option>
         <option value="Em uso">Em uso</option>
         <option value="Finalizado">Finalizado</option>
         </select>
        <Button onClick={handleSubmit} className="mt-4 w-full">Salvar Reserva</Button>
      </DialogContent>
    </Dialog>
  );
}
