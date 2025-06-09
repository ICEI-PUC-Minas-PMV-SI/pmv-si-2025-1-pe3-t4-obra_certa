"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { LocalStorageModel, Cliente, Equipamento } from '@/lib/LocalStorageModel';

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
  reservaEditando?: ReservaFormData | null;  // prop para edição
}

export default function AddReservaModal({
  isOpen,
  onClose,
  onSubmit,
  reservaEditando = null,
}: AddReservaModalProps) {

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
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([]);

  // Carregar clientes e equipamentos do storage ao montar o componente
  useEffect(() => {
    const clientesFromStorage = LocalStorageModel.readAll<Cliente>("clientes");
    setClientes(clientesFromStorage);

    const equipamentosFromStorage = LocalStorageModel.readAll<Equipamento>("equipamentos");
    setEquipamentos(equipamentosFromStorage);
  }, []);

  // Atualiza o formulário sempre que mudar a reserva editando ou abrir/fechar o modal
  useEffect(() => {
    if (reservaEditando) {
      setFormData(reservaEditando);
    } else {
      setFormData({
        equipamento: "",
        codEquipamento: "",
        cliente: "",
        cpfCliente: "",
        dataInicio: "",
        dataFim: "",
        status: "Reservado",
      });
    }
  }, [reservaEditando, isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    // opcional: limpa o form aqui, mas já faz isso no efeito quando modal fecha
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{reservaEditando ? "Editar Reserva" : "Nova Reserva"}</DialogTitle>
        </DialogHeader>

        {/* Equipamento */}
        <select
          name="equipamento"
          value={formData.equipamento}
          onChange={(e) => {
            const nomeSelecionado = e.target.value;
            const equipamentoSelecionado = equipamentos.find(eq => eq.nome === nomeSelecionado);
            setFormData(prev => ({
              ...prev,
              equipamento: nomeSelecionado,
              codEquipamento: equipamentoSelecionado?.codigo || ""
            }));
          }}
          className="border rounded px-3 py-2 text-sm w-full"
        >
          <option value="">Selecione um equipamento</option>
          {equipamentos.map(equipamento => (
            <option key={equipamento.id} value={equipamento.nome}>
              {equipamento.nome} - {equipamento.categoria}
            </option>
          ))}
        </select>

        {/* Código do equipamento */}
        <Input
          placeholder="Código do Equipamento"
          name="codEquipamento"
          value={formData.codEquipamento}
          onChange={handleChange}
        />

        {/* Cliente */}
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

        {/* CPF Cliente */}
        <Input
          placeholder="CPF do Cliente"
          name="cpfCliente"
          value={formData.cpfCliente}
          onChange={handleChange}
        />

        {/* Data Início */}
        <Input
          type="date"
          name="dataInicio"
          value={formData.dataInicio}
          onChange={handleChange}
        />

        {/* Data Fim */}
        <Input
          type="date"
          name="dataFim"
          value={formData.dataFim}
          onChange={handleChange}
        />

        {/* Status */}
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border rounded px-3 py-2 text-sm w-full"
        >
          <option value="Reservado">Reservado</option>
          <option value="Em uso">Em uso</option>
          <option value="Finalizado">Finalizado</option>
        </select>

        <Button onClick={handleSubmit} className="mt-4 w-full">
          {reservaEditando ? "Salvar Alterações" : "Salvar Reserva"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
