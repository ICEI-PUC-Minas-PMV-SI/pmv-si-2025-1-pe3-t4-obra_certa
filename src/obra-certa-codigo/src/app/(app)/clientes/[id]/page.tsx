'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Aluguel, Cliente, Equipamento, LocalStorageModel } from '@/lib/LocalStorageModel'
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ClientePageClient() {
  const { id } = useParams();
  const router = useRouter();
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [alugueis, setAlugueis] = useState<Aluguel[]>([]);
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([])

  useEffect(() => {
    const data = LocalStorageModel.readById<Cliente>('clientes', parseInt(id as string));
    if (!data) {
      router.push('/clientes');
      return;
    }
    setCliente(data);
  }, [id, router]);

  useEffect(() => {
    const data = LocalStorageModel.readAll<Equipamento>('equipamentos');
    setEquipamentos(data);
  }, []);

  useEffect(() => {
    const data = LocalStorageModel.readAll<Aluguel>('alugueis');
    const filtered = data.filter(a => a.cliente_id === parseInt(id as string));
    setAlugueis(filtered);
  }, [id]);

  if (!cliente) {
    return <p className="text-center mt-8 text-muted-foreground">Carregando cliente...</p>;
  }

  return (
    <div className="container max-w-6xl py-12 space-y-8">
      {/* Cabeçalho */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          {cliente.id} – {cliente.nome}
        </h1>
        <p className="text-muted-foreground">Informações do cliente</p>
      </div>

      {/* Informações do cliente */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-sm">
          <CardHeader className="pb-1">
            <CardTitle className="text-sm text-muted-foreground">CPF</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-medium">{cliente.cpf}</CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-1">
            <CardTitle className="text-sm text-muted-foreground">Email</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-medium">{cliente.email}</CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-1">
            <CardTitle className="text-sm text-muted-foreground">Telefone</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-medium">{cliente.telefone}</CardContent>
        </Card>

        <Card className="shadow-sm col-span-full">
          <CardHeader className="pb-1">
            <CardTitle className="text-sm text-muted-foreground">Endereço</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-medium">{cliente.endereco}</CardContent>
        </Card>
      </div>

      {/* Aluguéis */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Aluguéis</h2>
          <span className="text-muted-foreground">Total: {alugueis.length}</span>
        </div>

        {alugueis.length > 0 ? (
          <Accordion type="multiple" className="space-y-4">
            {alugueis.map((item, index) => (
              <AccordionItem value={`aluguel-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center gap-4">
                    <Badge variant={item.status === 'Ativo' ? 'default' : 'secondary'}>
                      {item.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(item.data_inicio)} até {formatDate(item.data_fim)}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="bg-muted">
                    <CardContent className="pt-4 space-y-2">
                      <p className="text-sm font-medium">Equipamentos:</p>
                      <ul className="list-disc list-inside text-base">
                        {item.equipamentos.map((eqId, i) => {
                          const equipamento = equipamentos.find(e => e.id === eqId);
                          return (
                            <li key={i}>
                              <Link
                                href={`/equipamentos/${eqId}`}
                                className="text-primary hover:underline"
                              >
                                {equipamento ? equipamento.nome : `Equipamento #${eqId}`}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      <p className="pt-2 font-semibold text-right">Valor total: R${item.valor_total}</p>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className="text-muted-foreground">Nenhum aluguel registrado para este cliente.</p>
        )}
      </div>
    </div>
  );
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
}
