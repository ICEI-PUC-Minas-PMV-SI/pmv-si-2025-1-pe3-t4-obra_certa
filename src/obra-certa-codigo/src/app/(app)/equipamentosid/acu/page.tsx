// ACU - Unidade de Controle de Áudio
"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function EquipamentoInfoPage() {
  const [quantidade, setQuantidade] = useState(1);
  const [dias, setDias] = useState(1);
  const precoDiario = 45.0;
  const precoTotal = quantidade * dias * precoDiario;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 max-w-6xl mx-auto space-y-10 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <img
              src="https://m.media-amazon.com/images/I/61LxrJ-NFuL._AC_UF1000,1000_QL80_.jpg"
              alt="ACU - Unidade de Controle de Áudio"
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
            <h1 className="text-4xl font-bold text-orange-600">ACU - Unidade de Controle de Áudio</h1>
            <section>
              <h2 className="text-2xl font-semibold mb-2">Descrição</h2>
              <p>
                A Unidade de Controle de Áudio (ACU) é um dispositivo essencial para integrar diferentes
                sistemas de comunicação, como rádios analógicos, digitais e VoIP. Amplamente utilizada em operações
                de emergência e centros de comando, garante interoperabilidade eficiente entre diversos canais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Indicações de Uso</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Integração de sistemas de comunicação em operações de campo.</li>
                <li>Centros de comando e controle em eventos e emergências.</li>
                <li>Operações conjuntas entre forças de segurança, bombeiros e defesa civil.</li>
                <li>Projetos de infraestrutura crítica que exigem comunicação interoperável.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Características Técnicas</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Suporte a rádios analógicos, digitais e IP</li>
                <li>Múltiplas portas de conexão de áudio</li>
                <li>Configuração remota via interface web</li>
                <li>Fonte de alimentação redundante</li>
                <li>Alta confiabilidade e resposta rápida</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cuidados Especiais</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Evitar contato com umidade e poeira excessiva.</li>
                <li>Não bloquear as aberturas de ventilação.</li>
                <li>Usar sempre fontes de alimentação adequadas.</li>
                <li>Realizar manutenções preventivas periodicamente.</li>
                <li>Desligar o equipamento antes de qualquer manuseio interno.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cuidados no Transporte</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Transportar em cases reforçados e acolchoados.</li>
                <li>Evitar quedas e impactos durante o trajeto.</li>
                <li>Garantir estabilidade dentro do veículo de transporte.</li>
                <li>Identificar corretamente o equipamento com etiquetas visíveis.</li>
                <li>Evitar exposição direta ao sol durante longos períodos.</li>
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
