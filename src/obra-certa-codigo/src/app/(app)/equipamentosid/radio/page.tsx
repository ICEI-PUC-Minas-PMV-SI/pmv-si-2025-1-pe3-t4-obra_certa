// Rádio Motorola XPR7550e
"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function EquipamentoInfoPage() {
  const [quantidade, setQuantidade] = useState(1);
  const [dias, setDias] = useState(1);
  const precoDiario = 25.0;
  const precoTotal = quantidade * dias * precoDiario;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 max-w-6xl mx-auto space-y-10 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <img
              src="https://m.media-amazon.com/images/I/41O-OEn1dUL.jpg"
              alt="Rádio Motorola XPR7550e"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>

          <Card className="bg-gray-100 border-none w-full">
            <CardContent className="space-y-6 pt-6 text-base">
              <h2 className="text-2xl font-semibold text-gray-800">Simulação de Aluguel</h2>

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
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-50 border-none mt-10 mb-20">
          <CardContent className="space-y-10 text-lg leading-relaxed pt-8">
            <h1 className="text-4xl font-bold text-orange-600">Rádio Motorola XPR7550e</h1>
            <section>
              <h2 className="text-2xl font-semibold mb-2">Descrição</h2>
              <p>
                O rádio digital Motorola XPR7550e é ideal para comunicação em ambientes industriais,
                eventos e situações críticas. Equipado com tecnologia digital, GPS integrado, Bluetooth
                e áudio aprimorado, proporciona máxima eficiência e confiabilidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Indicações de Uso</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Coordenação de equipes em canteiros de obras.</li>
                <li>Eventos, feiras e grandes aglomerações.</li>
                <li>Uso em segurança patrimonial e portarias.</li>
                <li>Ambientes industriais e logísticos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Características Técnicas</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Modelo: XPR7550e (digital)</li>
                <li>Conectividade: Bluetooth, GPS, Wi-Fi</li>
                <li>Áudio inteligente com cancelamento de ruído</li>
                <li>Autonomia da bateria: até 29 horas</li>
                <li>Classificação IP68: resistente à água e poeira</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cuidados Especiais</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Evite quedas e impactos fortes.</li>
                <li>Carregue apenas com carregadores compatíveis.</li>
                <li>Não utilize o rádio com mãos molhadas.</li>
                <li>Manter o equipamento longe de fontes de calor excessivo.</li>
                <li>Guarde em local seco quando não estiver em uso.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cuidados no Transporte</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Armazene em estojos apropriados.</li>
                <li>Evite contato com líquidos ou poeira em excesso.</li>
                <li>Garanta que os rádios estejam desligados durante o transporte.</li>
                <li>Evite empilhamento de outros materiais sobre o equipamento.</li>
                <li>Leve sempre o carregador e clipe de cinto junto ao rádio.</li>
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
    </div>
  );
}
