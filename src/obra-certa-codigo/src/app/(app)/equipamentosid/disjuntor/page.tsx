// Disjuntor ABB 63A
"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function EquipamentoInfoPage() {
  const [quantidade, setQuantidade] = useState(1);
  const [dias, setDias] = useState(1);
  const precoDiario = 10.0;
  const precoTotal = quantidade * dias * precoDiario;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 max-w-6xl mx-auto space-y-10 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <img
              src="https://loja.br.abb.com/media/catalog/product/6/3/63f907029c8ee9.50636481.png?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
              alt="Disjuntor ABB 63A"
              className="rounded-2xl shadow-lg w-full max-w-md"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://static.wixstatic.com/media/6d43f4_1e60c038ed5a4a8db924f4bfb28d2173~mv2.jpg"; // imagem alternativa
              }}
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
            <h1 className="text-4xl font-bold text-orange-600">Disjuntor ABB 63A</h1>
            <section>
              <h2 className="text-2xl font-semibold mb-2">Descrição</h2>
              <p>
                O Disjuntor ABB 63A é um dispositivo de proteção elétrica utilizado para interromper a corrente
                em casos de sobrecarga ou curto-circuito. Indicado para aplicações em painéis de distribuição
                de energia em obras, com alta confiabilidade e desempenho.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Indicações de Uso</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Quadros de distribuição elétrica temporários em canteiros de obras.</li>
                <li>Proteção de circuitos em instalações provisórias.</li>
                <li>Eventos, feiras e instalações móveis de energia.</li>
                <li>Sistemas de backup com geradores e inversores.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Características Técnicas</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Corrente nominal: 63 Amperes</li>
                <li>Curva de disparo: tipo C</li>
                <li>Tensão máxima: 400V</li>
                <li>Alta capacidade de interrupção</li>
                <li>Design compacto e fácil instalação</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cuidados Especiais</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Não exceder a corrente máxima suportada.</li>
                <li>Manter protegido de umidade e poeira.</li>
                <li>Instalação deve ser feita por eletricista qualificado.</li>
                <li>Verificar sempre a integridade dos contatos antes do uso.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cuidados no Transporte</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Transportar em embalagem acolchoada para evitar danos.</li>
                <li>Evitar quedas ou impactos no produto.</li>
                <li>Manter afastado de materiais magnéticos ou eletromagnéticos.</li>
                <li>Armazenar em local seco e arejado.</li>
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
