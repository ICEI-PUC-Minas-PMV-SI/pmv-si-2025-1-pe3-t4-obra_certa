// components/equipments/equipments_popup.tsx
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export interface EquipmentFormData {
  codigo: string;
  nome: string;
  categoria: string;
  descricao?: string; // Made optional
  quantidade: number
  status: string;
}

interface AddEquipmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EquipmentFormData) => void;
}

export default function AddEquipmentModal({ isOpen, onClose, onSubmit }: AddEquipmentModalProps) {
  const [formData, setFormData] = useState<EquipmentFormData>({
    codigo: "",
    nome: "",
    categoria: "",
    descricao: "", // Initialize with an empty string
    quantidade: 0,
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      ...formData,
      quantidade: Number(formData.quantidade),
      descricao: formData.descricao || undefined, // Ensure empty string becomes undefined if not provided
    });
    setFormData({ codigo: "", nome: "", categoria: "", descricao: "", quantidade: 0, status: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg relative max-h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Adicionar Novo Equipamento</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Fechar modal">
            <X className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="codigo" className="block text-sm font-medium text-gray-700 mb-1">Código</label>
            <Input id="codigo" name="codigo" type="text" value={formData.codigo} onChange={handleChange} required className="w-full" />
          </div>
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
            <Input id="nome" name="nome" type="text" value={formData.nome} onChange={handleChange} required className="w-full" />
          </div>
          <div>
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
            <Input id="categoria" name="categoria" type="text" value={formData.categoria} onChange={handleChange} required className="w-full" />
          </div>
          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">Descrição (Opcional)</label>
            <Input id="descricao" name="descricao" value={formData.descricao} onChange={handleChange} className="w-full" /> {/* Removed 'required' */}
          </div>
          <div>
            <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700 mb-1">Quantidade</label>
            <Input id="quantidade" name="quantidade" type="number" value={formData.quantidade} onChange={handleChange} required className="w-full" />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <Input id="status" name="status" type="text" value={formData.status} onChange={handleChange} required className="w-full" />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              Adicionar Equipamento
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}