"use client";
import { LocalStorageModel, type Aluguel, type Cliente, type Equipamento } from "@/lib/LocalStorageModel";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar"
import { addDays, differenceInCalendarDays, format, parse } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


export default function AlugarEquipamentoPage() {
  const [quantidade, setQuantidade] = useState(1);
  const [dias, setDias] = useState(1);
  const [dataInicio, setDataInicio] = useState<Date | undefined>(new Date());
  const [dataFim, setDataFim] = useState<Date | undefined>(
    addDays(new Date(), 1)
  );
  const [diasReservados, setDiasReservados] = useState(1);
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [ruaNumero, setRuaNumero] = useState("");
  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [telefone, setTelefone] = useState("");
  const [estado, setEstado] = useState("");
  const [complemento, setComplemento] = useState("");
  const [frete, setFrete] = useState(0);
  const [mostrarReserva, setMostrarReserva] = useState(false);
  const precoDiario = 75.0;
  const precoTotal = quantidade * dias * precoDiario;

const handleAlugar = () => {
  // Buscar cliente existente pelo nome
  const clientes = LocalStorageModel.readAll<Cliente>("clientes");
  let cliente = clientes.find(c => c.nome === nomeResponsavel);

  if (!cliente) {
    // Criar cliente novo
    cliente = LocalStorageModel.create<Cliente>("clientes", {
      nome: nomeResponsavel,
      telefone: telefone,
      endereco: `${ruaNumero}, ${cidade} - ${estado}, ${cep}${complemento ? ' (' + complemento + ')' : ''}`
    });
  }

  // Buscar equipamento pelo nome
  const equipamentos = LocalStorageModel.readAll<Equipamento>("equipamentos");
  let equipamento = equipamentos.find(e => e.nome === "Compactador de Solo");

  if (!equipamento) {
    // Criar equipamento novo
    equipamento = LocalStorageModel.create<Equipamento>("equipamentos", {
      nome: "Compactador de Solo",
      descricao: "Equipamento criado automaticamente a partir do aluguel.",
    });
  }

  // Criar aluguel
  const aluguel: Partial<Aluguel> = {
    cliente_id: cliente.id,
    equipamentos: [equipamento.id],
    data_inicio: dataInicio?.toISOString() ?? "",
    data_fim: dataFim?.toISOString() ?? "",
    valor_total: total,
    status: "Ativo",
  };

  LocalStorageModel.create<Aluguel>("alugueis", aluguel);
  alert("Aluguel cadastrado com sucesso!");
  setMostrarReserva(false);

  // Resetar campos
  setNomeResponsavel("");
  setTelefone("");
  setCep("");
  setCidade("");
  setRuaNumero("");
  setEstado("");
  setComplemento("");
  setFrete(0);
};




  
  useEffect(() => {
    if (dataInicio && dataFim) {
      const diff = differenceInCalendarDays(dataFim, dataInicio) + 1;
      setDiasReservados(diff > 0 ? diff : 0);
    }
  }, [dataInicio, dataFim]);

  const subtotal = quantidade * diasReservados * precoDiario;
  const total = subtotal + frete;

  const handleDateInputChange = (setter: any, value: string) => {
    const parsedDate = parse(value, "yyyy-MM-dd", new Date());
    if (!isNaN(parsedDate.getTime())) {
      setter(parsedDate);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 max-w-6xl mx-auto space-y-10 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <img
              src="https://io.convertiez.com.br/m/fortemac/shop/products/images/147/large/compactador-de-solo-a-gasolina-tipo-sapo-de-percussao-75kg-6hp-cp90_1638.png"
              alt="Equipamento de Obra"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>

          <Card className="bg-gray-100 border-none w-full">
            <CardContent className="space-y-6 pt-6 text-base">
              <h2 className="text-2xl font-semibold text-gray-800">Solicitação de Aluguel</h2>

              <div className="flex items-center justify-between">
                <label className="text-md">Quantidade:</label>
                <input
                  type="number"
                  min={1}
                  value={quantidade}
                  onChange={(e) => setQuantidade(Number(e.target.value))}
                  className="border rounded px-3 py-2 w-24 text-right"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-md">Dias de aluguel:</label>
                <input
                  type="number"
                  min={1}
                  value={dias}
                  onChange={(e) => setDias(Number(e.target.value))}
                  className="border rounded px-3 py-2 w-24 text-right"
                />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700 text-md">Preço total:</span>
                <span className="text-2xl font-bold text-orange-600">
                  R$ {precoTotal.toFixed(2)}
                </span>
              </div>

              <Button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold py-2"
                onClick={() => setMostrarReserva(true)}
              >
                Alugar agora
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-50 border-none mt-10 mb-20">
          <CardContent className="space-y-10 text-lg leading-relaxed pt-8">
            <h1 className="text-4xl font-bold text-orange-600">Compactador de Solo</h1>
            <section>
              <h2 className="text-2xl font-semibold mb-2">Descrição</h2>
              <p>
                O compactador de solo é essencial em obras civis, ideal para garantir a firmeza e a
                estabilidade do terreno antes da construção de fundações, pavimentações ou instalação de tubulações.
                Com motor potente a gasolina e design robusto, oferece praticidade, alto desempenho e facilidade de transporte.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2">Indicações de Uso</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Preparação de fundações em obras residenciais e comerciais.</li>
                <li>Compactação de valas para instalação de tubulações.</li>
                <li>Projetos de saneamento e pavimentação asfáltica.</li>
                <li>Ideal para construtoras, empreiteiros e profissionais autônomos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Características Técnicas</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Peso: 85 kg</li>
                <li>Motor: Gasolina 5.5 HP</li>
                <li>Força de impacto: 13 kN</li>
                <li>Alta eficiência e facilidade de operação</li>
                <li>Equipamento compacto e de fácil transporte</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cuidados Especiais</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Verifique a compatibilidade da tensão elétrica ao utilizar geradores.</li>
                <li>Somente operadores qualificados devem manusear o equipamento.</li>
                <li>Utilize sempre Equipamentos de Proteção Individual (EPI).</li>
                <li>Evite uso em ambientes úmidos ou em dias chuvosos.</li>
                <li>Não opere o equipamento na presença de gases ou líquidos inflamáveis.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cuidados no Transporte</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Fixar corretamente o equipamento durante o transporte.</li>
                <li>Evite transportar pessoas e equipamentos no mesmo compartimento.</li>
                <li>Observe os limites de peso e dimensões do veículo.</li>
                <li>Proteja os componentes elétricos em tempo chuvoso.</li>
                <li>Leve sempre os acessórios e itens complementares da locação.</li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </main>

      <footer className="w-full bg-orange-600 text-white py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-center px-4">
          <img src="/obracerta_v3_1.svg" alt="Logo da Empresa" className="h-12" />
        </div>
      </footer>

      {/* Modal de Reserva */}
      {mostrarReserva && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-5xl w-full relative">
            <button
              onClick={() => setMostrarReserva(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-orange-600">Reservar Equipamento</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Coluna 1 */}
              <div className="space-y-4">
            <div>
              <label className="block mb-1">Quantidade desejada</label>
              <input
                type="number"
                min={1}
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block mb-1">CEP</label>
              <input
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Cidade</label>
              <input
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Rua, número</label>
              <input
                type="text"
                value={ruaNumero}
                onChange={(e) => setRuaNumero(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Nome do responsável</label>
              <input
                type="text"
                value={nomeResponsavel}
                onChange={(e) => setNomeResponsavel(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Telefone</label>
              <input
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
          </div>

              {/* Coluna 2 */}
              <div className="space-y-4">
            <div>
              <label className="block mb-1">Data de início</label>
              <input
                type="date"
                value={dataInicio ? format(dataInicio, "yyyy-MM-dd") : ""}
                onChange={(e) =>
                  handleDateInputChange(setDataInicio, e.target.value)
                }
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Data de término</label>
              <input
                type="date"
                value={dataFim ? format(dataFim, "yyyy-MM-dd") : ""}
                onChange={(e) => handleDateInputChange(setDataFim, e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Estado</label>
              <input
                type="text"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Complemento</label>
              <input
                type="text"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Valor por dia (R$)</label>
              <input
                type="number"
                value={precoDiario}
                disabled
                className="border rounded px-3 py-2 w-full bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1">Frete (R$)</label>
              <input
                type="number"
                value={frete}
                onChange={(e) => setFrete(Number(e.target.value))}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
          </div>


              {/* Coluna 3 */}
          <div className="space-y-4">
            <div>
              <Calendar
                mode="range"
                selected={{ from: dataInicio, to: dataFim }}
                onSelect={(range) => {
                  setDataInicio(range?.from);
                  setDataFim(range?.to);
                }}
                className="rounded-md border"
              />
            </div>

            <div>
              <label className="block mb-1">Dias reservados</label>
              <input
                type="number"
                value={diasReservados}
                disabled
                className="border rounded px-3 py-2 w-full bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1">Subtotal (R$)</label>
              <input
                type="number"
                value={subtotal.toFixed(2)}
                disabled
                className="border rounded px-3 py-2 w-full bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1">Total estimado (R$)</label>
              <input
                type="number"
                value={total.toFixed(2)}
                disabled
                className="border rounded px-3 py-2 w-full bg-gray-100"
              />
            </div>

          <Button
            className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold py-2"
            onClick={handleAlugar}
          >
            Alugar
          </Button>

          </div>
          </div>
        </div>
      </div>
  )}
</div>
);
}
