'use client'
import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

import {
  LocalStorageModel,
  Cliente,
} from '@/lib/LocalStorageModel'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface FormData {
  nome: string
  email: string
  cpf: string
  telefone: string
  endereco: string
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
  data?: any
}

export const AddClientModal = (
  { isOpen, onClose, onSubmit, data }: ModalProps
) => {
  const [ready, setReady] = useState(false)
  const [form, setForm] = useState<FormData>({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    endereco: ''
  });

  useEffect(() => {
    if (isOpen) {
      setReady(true)
      setForm(data);
    } else {
      setReady(false)
    }
  }, [isOpen, data])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
    onClose();
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg relative max-h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {data ? 'Atualizar' : 'Cadastrar'} Cliente
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
                Nome
              </label>
              <Input
                id="nome"
                name="nome"
                type="text"
                value={form?.nome}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <Input
                id="email"
                name="email"
                type="text"
                value={form?.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CPF
              </label>
              <Input
                id="cpf"
                name="cpf"
                type="text"
                value={form?.cpf}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <Input
                id="telefone"
                name="telefone"
                type="text"
                value={form?.telefone}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Endereço
              </label>
              <Input
                id="endereco"
                name="endereco"
                type="text"
                value={form?.endereco}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit">
                {data ? 'Atualizar' : 'Cadastrar'}
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
