export interface Administrador {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

export interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  endereco: string;
}

export interface Equipamento {
  id: number;
  codigo: string;
  nome: string;
  categoria: string;
  descricao: string;
  quantidade: number;
  status: string;
}

export interface Aluguel {
  id: number;
  cliente_id: number;
  equipamentos: number[];
  data_inicio: string;
  data_fim: string;
  valor_total: number;
  status: string;
}

export interface Manutencao {
  id: number;
  equipamento_id: number;
  descricao_problema: string;
  data_prevista: string;
  tipo: string;
  tecnico_responsavel: string;
  status: string;
}

export interface Reserva {
  id: number;
  cliente_id: number;
  equipamentos: number[];
  data_inicio: string;
  data_fim: string;
  status: string;
}

export interface Relatorio {
  id: number;
  tipo: string;
  filtros: Record<string, string>;
  formato: string;
  gerado_em: string;
  arquivo: string;
}

const STORAGE_KEY = 'equipmentRentalData';

interface DataModel {
  administradores: Administrador[];
  clientes: Cliente[];
  equipamentos: Equipamento[];
  alugueis: Aluguel[];
  manutencoes: Manutencao[];
  reservas: Reserva[];
  relatorios: Relatorio[];
}

const initialData: DataModel = {
  administradores: [
    {
      id: 1,
      nome: "Lucas Martins",
      email: "lucas.martins@obracerta.com.br",
      senha: "hash_senha_123",
    },
    {
      id: 2,
      nome: "Antonio Pereira",
      email: "antonio.pereira@obracerta.com.br",
      senha: "hash_senha_124",
    },
  ],
  clientes: [
    {
      id: 101,
      nome: "Ana Silva",
      cpf: "123.456.789-00",
      email: "ana.silva@email.com",
      telefone: "+55 11 91234-5678",
      endereco: "Rua das Flores, 123 - São Paulo/SP",
    },
    {
      id: 102,
      nome: "Antonio Paulo",
      cpf: "123.654.987-11",
      email: "antonio.paulo@email.com",
      telefone: "+55 11 91233-5678",
      endereco: "Rua dos Principes, 546 - São Paulo/SP",
    },
  ],
  equipamentos: [
    {
      id: 501,
      codigo: "EQP-001",
      nome: "Furadeira Bosch",
      categoria: "Ferramentas Elétricas",
      descricao: "Furadeira de impacto 650W",
      quantidade: 5,
      status: "Disponível",
    },
    {
      id: 502,
      codigo: "EQP-002",
      nome: "Betoneira 400L",
      categoria: "Construção Pesada",
      descricao: "Ideal para grandes obras",
      quantidade: 2,
      status: "Em manutenção",
    },
  ],
  alugueis: [
    {
      id: 301,
      cliente_id: 101,
      equipamentos: [501],
      data_inicio: "2025-05-01",
      data_fim: "2025-05-07",
      valor_total: 210.0,
      status: "Ativo",
    },
  ],
  manutencoes: [
    {
      id: 201,
      equipamento_id: 502,
      descricao_problema: "Motor fazendo ruído anormal",
      data_prevista: "2025-05-10",
      tipo: "Corretiva",
      tecnico_responsavel: "Carlos Souza",
      status: "Em andamento",
    },
  ],
  reservas: [
    {
      id: 401,
      cliente_id: 101,
      equipamentos: [501],
      data_inicio: "2025-05-15",
      data_fim: "2025-05-20",
      status: "Reservado",
    },
  ],
  relatorios: [
    {
      id: 701,
      tipo: "Aluguéis por dia",
      filtros: {
        data_inicio: "2025-05-01",
        data_fim: "2025-05-07",
      },
      formato: "PDF",
      gerado_em: "2025-05-05T10:00:00Z",
      arquivo: "relatorio-alugueis-dia-maio.pdf",
    },
  ],
};

export class LocalStorageModel {
  private static getData(): DataModel {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
      return initialData;
    }
    return JSON.parse(raw);
  }

  private static saveData(data: DataModel): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  private static exists<T>(
    entity: keyof DataModel,
    field: keyof T,
    value: any
  ): boolean {
    const data = this.getData()[entity] as T[];
    return data.some((item) => item[field] === value);
  }

  private static generateId(entity: keyof DataModel): number {
    const items = this.getData()[entity];
    return items.length ? Math.max(...items.map((item: any) => item.id)) + 1 : 1;
  }

  static create<T>(entity: keyof DataModel, record: Partial<T>, uniqueField?: keyof T): T {
    if (uniqueField && this.exists<T>(entity, uniqueField, record[uniqueField])) {
      return record as T;
    }
    const data = this.getData();
    const newRecord = { ...record, id: this.generateId(entity) } as T;
    (data[entity] as T[]).push(newRecord);
    this.saveData(data);
    return newRecord;
  }

  static readAll<T>(entity: keyof DataModel): T[] {
    return this.getData()[entity] as T[];
  }

  static readById<T>(entity: keyof DataModel, id: number): T | undefined {
    return (this.getData()[entity] as T[]).find((item) => item.id === id);
  }

  static update<T>(entity: keyof DataModel, id: number, updates: Partial<T>): void {
    const data = this.getData();
    const list = data[entity] as T[];
    const index = list.findIndex((item: any) => item.id === id);
    if (index === -1) {
      throw new Error(`Registro com id=${id} não encontrado.`);
    }
    list[index] = { ...list[index], ...updates };
    this.saveData(data);
  }

  static delete(entity: keyof DataModel, id: number): void {
    const data = this.getData();
    data[entity] = data[entity].filter((item: any) => item.id !== id);
    this.saveData(data);
  }

  static reset(): void {
    this.saveData(initialData);
  }
}
