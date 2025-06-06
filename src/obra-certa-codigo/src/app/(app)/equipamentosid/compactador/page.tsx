// Compactador
"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function EquipamentoInfoPage() {
  const [quantidade, setQuantidade] = useState(1);
  const [dias, setDias] = useState(1);
  const precoDiario = 75.0;
  const precoTotal = quantidade * dias * precoDiario;

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
    </div>
  );
}
