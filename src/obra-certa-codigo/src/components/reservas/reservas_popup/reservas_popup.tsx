"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface ReservaFormData {
  equipamento: string;
  cliente: string;
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
    cliente: "",
    dataInicio: "",
    dataFim: "",
    status: "Reservado",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      equipamento: "",
      cliente: "",
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
        <Input placeholder="Cliente" name="cliente" value={formData.cliente} onChange={handleChange} />
        <Input type="date" name="dataInicio" value={formData.dataInicio} onChange={handleChange} />
        <Input type="date" name="dataFim" value={formData.dataFim} onChange={handleChange} />
        <Button onClick={handleSubmit} className="mt-4 w-full">Salvar Reserva</Button>
      </DialogContent>
    </Dialog>
  );
}
