// SBR - Sistema de Backup Redundante
"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function EquipamentoInfoPage() {
  const [quantidade, setQuantidade] = useState(1);
  const [dias, setDias] = useState(1);
  const precoDiario = 55.0;
  const precoTotal = quantidade * dias * precoDiario;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 max-w-6xl mx-auto space-y-10 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <img
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvH3xmDgT8guYUyyVEEH5lrmVzSlk7Ngz8UkHGnpW-9NIHesvTHa6-lBA7-s7sBJcRvVNhpyUD3MczeMV1gbO8c3tgiqhgXTZK565c_kElv8WrQoLOLDcTtA"
              alt="SBR - Sistema de Backup Redundante"
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
            <h1 className="text-4xl font-bold text-orange-600">SBR - Sistema de Backup Redundante</h1>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Descrição</h2>
              <p>
                O Sistema de Backup Redundante (SBR) é um equipamento projetado para fornecer energia contínua
                em caso de falhas na rede elétrica principal. Composto por baterias de alta capacidade e sistema
                de gerenciamento inteligente, garante a proteção de sistemas críticos em obras e instalações temporárias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Indicações de Uso</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Backup de energia para centrais de comando e controle.</li>
                <li>Segurança elétrica para sistemas de comunicação em canteiros de obras.</li>
                <li>Manutenção de servidores e redes operacionais durante quedas de energia.</li>
                <li>Estabilidade de sistemas automatizados em ambientes temporários.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Características Técnicas</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Tensão de operação: 220V</li>
                <li>Autonomia: até 8 horas (variável com carga)</li>
                <li>Sinalização por LED e alarme sonoro</li>
                <li>Capacidade de até 3000VA</li>
                <li>Compatível com geradores e redes de energia solar</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cuidados Especiais</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Evite sobrecarregar a capacidade nominal do equipamento.</li>
                <li>Instalar em local ventilado e protegido da umidade.</li>
                <li>Não obstrua as saídas de ventilação.</li>
                <li>Faça manutenções regulares na bateria.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cuidados no Transporte</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Transportar sempre na posição vertical.</li>
                <li>Fixar o equipamento para evitar deslocamentos.</li>
                <li>Evitar impacto direto e vibrações excessivas.</li>
                <li>Desconectar todos os cabos antes de mover.</li>
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
