'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export interface RentalFormData {
  client_id: number
  equipamentos: number[]
  start_date: Date
  end_date: Date
  valor_total: number
  status: string
}

interface AddAluguelModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
}

export const AddRentalModal = ({
  isOpen,
  onClose,
  onSubmit,
}: AddAluguelModalProps) => {
  const [formData, setFormData] = useState({
    client_id: '',
    equipamentos: '',
    start_date: '',
    end_date: '',
    valor_total: '',
    status: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data: any = {
      client_id: Number(formData.client_id),
      equipamentos: formData.equipamentos
        .split(',')
        .map((id) => Number(id.trim()))
        .filter((n) => !isNaN(n)),
      start_date: new Date(formData.start_date),
      end_date: new Date(formData.end_date),
      valor_total: parseFloat(formData.valor_total),
      status: formData.status,
    }

    onSubmit(data)
    setFormData({
      client_id: '',
      equipamentos: '',
      start_date: '',
      end_date: '',
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="client_id"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ID do Cliente
            </label>
            <Input
              id="client_id"
              name="client_id"
              type="number"
              value={formData.client_id}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="equipamentos"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              IDs dos Equipamentos (separados por vírgula)
            </label>
            <Input
              id="equipamentos"
              name="equipamentos"
              type="text"
              value={formData.equipamentos}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="start_date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Data de Início
            </label>
            <Input
              id="start_date"
              name="start_date"
              type="date"
              value={formData.start_date}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="end_date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Data de Término
            </label>
            <Input
              id="end_date"
              name="end_date"
              type="date"
              value={formData.end_date}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="valor_total"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Status
            </label>
            <Input
              id="status"
              name="status"
              type="text"
              value={formData.status}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">Adicionar Aluguel</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
