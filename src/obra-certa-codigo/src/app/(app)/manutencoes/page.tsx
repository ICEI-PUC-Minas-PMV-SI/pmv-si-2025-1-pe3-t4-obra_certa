"use client";


import { useState } from 'react';
import { Search, Filter, ChevronDown, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AddManutencaoModal from '@/components/maintence/maintence_popup';
import ManutencaoTable from '@/components/maintence/maintence_table';


export interface Maintence {
  id: number;
  client_id: number;
  equipamentos: number[];
  start_date: Date;
  end_date: Date;
  status: string;
}

export default function Manutencao() {
  const initialMaintenceList: Maintence[] = [
    {
      id: 1,
      client_id: 101,
      equipamentos: [1, 2],
      start_date: new Date('2025-05-01'),
      end_date: new Date('2025-05-03'),
      status: 'Em andamento',
    },
    {
      id: 2,
      client_id: 102,
      equipamentos: [3],
      start_date: new Date('2025-05-05'),
      end_date: new Date('2025-05-06'),
      status: 'Concluída',
    },
  ];

  const [manutencoes, setManutencoes] = useState<Maintence[]>(initialMaintenceList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDelete = (manutencao: Maintence) => {
    setManutencoes(prev => prev.filter(m => m.id !== manutencao.id));
  };

  const handleAddManutencaoSubmit = (formData: Omit<Maintence, 'id'>) => {
    const newManutencao: Maintence = {
      id: manutencoes.length > 0 ? Math.max(...manutencoes.map(m => m.id)) + 1 : 1,
      ...formData,
    };
    setManutencoes(prev => [...prev, newManutencao]);
    console.log('Nova manutenção adicionada:', newManutencao);
    handleCloseModal();
  };

  const filteredManutencoes = manutencoes.filter((m) =>
    m.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full container bg-background">
      <div className="text-3xl font-normal pt-12 pl-12 pr-12">
        <h1>Manutenções</h1>
      </div>

      <div className="pt-12 px-12 pb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 pr-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por status..."
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
            className="flex items-center gap-2 whitespace-nowrap bg-primary text-white border border-primary"
            onClick={handleOpenModal}
          >
            <Plus className="h-4 w-4" />
            Adicionar Manutenção
          </Button>
        </div>
      </div>

      <div className="pt-6 pl-12 pr-12">
        <div className="border border-gray-200 rounded-[25px] p-6">
          <ManutencaoTable data={filteredManutencoes} onDelete={handleDelete} />
        </div>
      </div>

      <AddManutencaoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddManutencaoSubmit}
      />
    </div>
  );
}
