'use client'
import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

import {
  LocalStorageModel,
  Cliente,
  Equipamento,
} from '@/lib/LocalStorageModel'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function MultiSelectEquipamento({
  options,
  value,
  onChange,
}: {
  options: Equipamento[]
  value: number[]
  onChange: (v: number[]) => void
}) {
  const [open, setOpen] = useState(false)
  const handleToggle = (id: number) => {
    onChange(
      value.includes(id) ? value.filter((i) => i !== id) : [...value, id]
    )
  }
  return (
    <div className="relative">
      <Button
        type="button"
        variant="outline"
        className="w-full justify-between"
        onClick={() => setOpen((v) => !v)}
      >
        {value.length > 0
          ? options
              .filter((o) => value.includes(o.id))
              .map((o) => o.nome)
              .join(', ')
          : 'Selecione os equipamentos'}
        <span className="ml-2">▼</span>
      </Button>
      {open && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded shadow p-2 max-h-48 overflow-auto">
          {options.map((opt) => (
            <label
              key={opt.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={value.includes(opt.id)}
                onChange={() => handleToggle(opt.id)}
                className="accent-primary"
              />
              <span>{opt.nome}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

interface AddRentalModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
  initialData?: any
}

const STATUS_OPTIONS = [
  { value: 'Ativo', label: 'Ativo' },
  { value: 'Encerrado', label: 'Encerrado' },
  { value: 'Cancelado', label: 'Cancelado' },
  { value: 'Aguardando', label: 'Aguardando' },
]

export const AddRentalModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: AddRentalModalProps) => {
  const [ready, setReady] = useState(false)
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([])
  const [formData, setFormData] = useState({
    cliente_id: '',
    equipamentos: [] as number[],
    data_inicio: '',
    data_fim: '',
    valor_total: '',
    status: '',
  })

  console.log('Clientes carregados:', clientes)
  console.log('InitialData:', initialData)
  console.log('FormData:', formData)

  useEffect(() => {
    setClientes(LocalStorageModel.readAll<Cliente>('clientes'))
    setEquipamentos(LocalStorageModel.readAll<Equipamento>('equipamentos'))
  }, [])

  useEffect(() => {
    if (isOpen && clientes.length > 0 && equipamentos.length > 0) {
      setReady(true)
      if (initialData) {
        setFormData({
          cliente_id: initialData.cliente_id
            ? String(initialData.cliente_id)
            : '',
          equipamentos: initialData.equipamentos || [],
          data_inicio: initialData.data_inicio || '',
          data_fim: initialData.data_fim || '',
          valor_total: initialData.valor_total
            ? String(initialData.valor_total)
            : '',
          status: initialData.status ? String(initialData.status) : '',
        })
      } else {
        setFormData({
          cliente_id: '',
          equipamentos: [],
          data_inicio: '',
          data_fim: '',
          valor_total: '',
          status: '',
        })
      }
    } else {
      setReady(false)
    }
  }, [isOpen, initialData, clientes, equipamentos])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectCliente = (v: string) =>
    setFormData((prev) => ({ ...prev, cliente_id: v }))
  const handleSelectStatus = (v: string) =>
    setFormData((prev) => ({ ...prev, status: v }))
  const handleSelectEquipamentos = (v: number[]) =>
    setFormData((prev) => ({ ...prev, equipamentos: v }))

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = {
      cliente_id: Number(formData.cliente_id),
      equipamentos: formData.equipamentos,
      data_inicio: formData.data_inicio,
      data_fim: formData.data_fim,
      valor_total: parseFloat(formData.valor_total),
      status: formData.status,
      id: initialData?.id,
    }
    onSubmit(data)
    setFormData({
      cliente_id: '',
      equipamentos: [],
      data_inicio: '',
      data_fim: '',
      valor_total: '',
      status: '',
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg relative max-h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Adicionar Novo Aluguel
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Fechar modal"
          >
            <X className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
        {ready ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cliente
              </label>
              <Select
                value={formData.cliente_id}
                onValueChange={handleSelectCliente}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o cliente" />
                </SelectTrigger>
                <SelectContent>
                  {clientes.map((cliente) => (
                    <SelectItem key={cliente.id} value={String(cliente.id)}>
                      {cliente.nome}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Equipamentos
              </label>
              <MultiSelectEquipamento
                options={equipamentos}
                value={formData.equipamentos}
                onChange={handleSelectEquipamentos}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data de Início
              </label>
              <Input
                id="data_inicio"
                name="data_inicio"
                type="date"
                value={formData.data_inicio}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data de Término
              </label>
              <Input
                id="data_fim"
                name="data_fim"
                type="date"
                value={formData.data_fim}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Valor Total (R$)
              </label>
              <Input
                id="valor_total"
                name="valor_total"
                type="number"
                step="0.01"
                value={formData.valor_total}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <Select
                value={formData.status}
                onValueChange={handleSelectStatus}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>
                <SelectContent>
                  {STATUS_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit">
                {initialData ? 'Atualizar Aluguel' : 'Adicionar Aluguel'}
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center py-8">Carregando dados...</div>
        )}
      </div>
    </div>
  )
}
