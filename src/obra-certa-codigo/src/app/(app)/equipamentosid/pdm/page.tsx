// PDM - Power Distribution Module
"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function EquipamentoInfoPage() {
  const [quantidade, setQuantidade] = useState(1);
  const [dias, setDias] = useState(1);
  const precoDiario = 35.0;
  const precoTotal = quantidade * dias * precoDiario;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 max-w-6xl mx-auto space-y-10 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <img
              src="https://www.revzilla.com/product_images/0067/4303/rowe_electronics_pdm60_power_distribution_module.jpg"
              alt="PDM - Power Distribution Module"
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
            <h1 className="text-4xl font-bold text-orange-600">PDM - Power Distribution Module</h1>
            <section>
              <h2 className="text-2xl font-semibold mb-2">Descrição</h2>
              <p>
                O Módulo de Distribuição de Energia (PDM) é um componente fundamental para o gerenciamento
                eficiente da energia elétrica em sistemas de comunicação e operação de campo. Ele permite
                a distribuição segura e organizada de energia para múltiplos dispositivos simultaneamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Indicações de Uso</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Distribuição de energia em centros de comando móveis.</li>
                <li>Instalações de comunicação temporárias em campo.</li>
                <li>Eventos, operações de emergência e sistemas redundantes.</li>
                <li>Ambientes que exigem controle de energia para múltiplos dispositivos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Características Técnicas</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Várias saídas de energia isoladas</li>
                <li>Compatível com sistemas 12V e 24V</li>
                <li>Proteções contra sobrecarga e curto-circuito</li>
                <li>Fusíveis de fácil substituição</li>
                <li>Design robusto para uso em campo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cuidados Especiais</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Não exceder a capacidade máxima de corrente.</li>
                <li>Manter as conexões firmes e protegidas contra umidade.</li>
                <li>Utilizar apenas cabos compatíveis e certificados.</li>
                <li>Evitar curtos-circuitos entre terminais.</li>
                <li>Realizar inspeções regulares das conexões e fusíveis.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cuidados no Transporte</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Transportar em maleta rígida e protegida contra impactos.</li>
                <li>Desconectar todos os cabos antes de armazenar.</li>
                <li>Evitar exposição à poeira e umidade durante o transporte.</li>
                <li>Não empilhar peso sobre o módulo.</li>
                <li>Identificar o equipamento para manuseio cuidadoso.</li>
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
