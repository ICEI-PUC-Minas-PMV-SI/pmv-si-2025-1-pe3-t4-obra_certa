"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";

interface Equipment {
  id: number;
  codigo: string;
  nome: string;
  categoria: string;
  descricao?: string;
  quantidade: number;
  status: string;
  imageUrl?: string;
  indicacoesUso?: string[];
  caracteristicasTecnicas?: string[];
  cuidadosEspeciais?: string[];
  cuidadosTransporte?: string[];
}

const mockEquipments: Equipment[] = [
  {
    id: 1,
    codigo: "RAD-001",
    nome: "Rádio Motorola XPR7550e",
    categoria: "Comunicação",
    descricao: "Rádio bidirecional digital com Bluetooth e recursos avançados para comunicação clara e segura em ambientes profissionais. Ideal para canteiros de obras, eventos e segurança.",
    quantidade: 15,
    status: "Operacional",
    imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvH3xmDgT8guYUyyVEEH5lrmVzSlk7Ngz8UkHGnpW-9NIHesb_GzW5d-oQWz_nZlYq_o4tD4vX_L", // Example image URL
    indicacoesUso: ["Comunicação em obras", "Eventos", "Segurança"],
    caracteristicasTecnicas: ["Frequência: UHF/VHF", "Potência: 5W", "Bateria: Li-Ion 2200mAh"],
    cuidadosEspeciais: ["Evitar quedas", "Proteger da água"],
    cuidadosTransporte: ["Embalar com proteção", "Transportar em local seco"],
  },
  {
    id: 2,
    codigo: "ACU-002",
    nome: "ACU - Unidade de Controle de Áudio",
    categoria: "Áudio",
    descricao: "Unidade de controle de áudio avançada para integração perfeita de múltiplos rádios e sistemas de comunicação. Garante clareza de áudio e gerenciamento eficiente.",
    quantidade: 5,
    status: "Manutenção",
    imageUrl: "https://example.com/acu.jpg",
    indicacoesUso: ["Integração de sistemas de rádio", "Centrais de comunicação"],
    caracteristicasTecnicas: ["Entradas de áudio: Múltiplas", "Conectividade: Bluetooth, USB"],
    cuidadosEspeciais: ["Manter em ambiente limpo", "Calibrar regularmente"],
    cuidadosTransporte: ["Cuidado com componentes eletrônicos", "Não expor a umidade"],
  },
  {
    id: 3,
    codigo: "PDM-003",
    nome: "PDM - Power Distribution Module",
    categoria: "Elétrica",
    descricao: "Módulo de distribuição de energia robusto para sistemas críticos, garantindo fornecimento estável e seguro. Essencial para instalações temporárias e permanentes.",
    quantidade: 10,
    status: "Operacional",
    imageUrl: "https://example.com/pdm.jpg",
    indicacoesUso: ["Distribuição de energia em canteiros", "Alimentação de equipamentos sensíveis"],
    caracteristicasTecnicas: ["Tensão: 220V/380V", "Corrente: até 100A", "Proteção: Disjuntores integrados"],
    cuidadosEspeciais: ["Verificar conexões regularmente", "Não sobrecarregar"],
    cuidadosTransporte: ["Manusear com cuidado", "Proteger contra impactos"],
  },
  {
    id: 4,
    codigo: "DSJ-004",
    nome: "Disjuntor ABB 63A",
    categoria: "Elétrica",
    descricao: "Disjuntor de proteção de alta performance da ABB, projetado para garantir a segurança em painéis elétricos e sistemas de energia. Atua contra sobrecargas e curtos-circuitos.",
    quantidade: 25,
    status: "Operacional",
    imageUrl: "https://example.com/disjuntor.jpg",
    indicacoesUso: ["Proteção de circuitos elétricos", "Instalações industriais e residenciais"],
    caracteristicasTecnicas: ["Corrente nominal: 63A", "Tipo: Termomagnético", "Montagem: Trilho DIN"],
    cuidadosEspeciais: ["Instalação por profissional qualificado", "Não violar lacres"],
    cuidadosTransporte: ["Armazenar em local seco", "Evitar quedas"],
  },
  {
    id: 5,
    codigo: "SBR-005",
    nome: "SBR - Sistema de Backup Redundante",
    categoria: "Infraestrutura",
    descricao: "O Sistema de Backup Redundante (SBR) é um equipamento projetado para fornecer energia contínua em caso de falhas na rede elétrica principal. Composto por baterias de alta capacidade e sistema de gerenciamento inteligente, garante a proteção de sistemas críticos em obras e instalações temporárias.",
    quantidade: 2,
    status: "Em teste",
    imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvH3xmDgT8guYUyyVEEH5lrmVzSlk7Ngz8UkHGnpW-9NIHesTTHa6-lBA7-s7sBJcRvVNhpyUD3MczeMV1gbO8c3tgiqhgXTZK565c_kElv8WrQoLOLDcTtA", // Example image URL from your original code
    indicacoesUso: ["Backup de energia para centrais de comando e controle.", "Segurança elétrica para sistemas de comunicação em canteiros de obras.", "Manutenção de servidores e redes operacionais durante quedas de energia.", "Estabilidade de sistemas automatizados em ambientes temporários."],
    caracteristicasTecnicas: ["Tensão de operação: 220V", "Autonomia: até 8 horas (variável com carga)", "Sinalização por LED e alarme sonoro", "Capacidade de até 3000VA", "Compatível com geradores e redes de energia solar"],
    cuidadosEspeciais: ["Evite sobrecarregar a capacidade nominal do equipamento.", "Instalar em local ventilado e protegido da umidade.", "Não obstrua as saídas de ventilação.", "Faça manutenções regulares na bateria."],
    cuidadosTransporte: ["Transportar sempre na posição vertical.", "Fixar o equipamento para evitar deslocamentos.", "Evitar impacto direto e vibrações excessivas.", "Desconectar todos os cabos antes de mover."],
  },
  {
    id: 6,
    codigo: "FER-001",
    nome: "Ferramenta Genérica",
    categoria: "Ferramentas",
    quantidade: 50,
    status: "Disponível",
  },
];

export default function EquipamentoInfoPage() {
  const { id } = useParams();
  const [quantidade, setQuantidade] = useState(1);
  const [dias, setDias] = useState(1);
  const precoDiario = 55.0;

  const equipmentId = parseInt(Array.isArray(id) ? id[0] : id || "0", 10);
  const equipment = mockEquipments.find((eq) => eq.id === equipmentId);

  useEffect(() => {
  }, [equipmentId]);

  if (!equipment) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center text-gray-800">
        <h1 className="text-3xl font-bold">Equipamento não encontrado.</h1>
        <p className="mt-4">Verifique o ID do equipamento e tente novamente.</p>
      </div>
    );
  }

  const precoTotal = quantidade * dias * precoDiario;
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 max-w-6xl mx-auto space-y-10 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <img
              src={equipment.imageUrl || "/placeholder-image.jpg"}
              alt={equipment.nome}
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
            <h1 className="text-4xl font-bold text-orange-600">{equipment.nome}</h1>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Descrição</h2>
              {equipment.descricao ? (
                <p>{equipment.descricao}</p>
              ) : (
                <p className="text-red-600 font-semibold">
                  Nenhuma descrição disponível. Por favor, entre em contato para mais informações.
                </p>
              )}
            </section>

            {equipment.indicacoesUso && equipment.indicacoesUso.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-2">Indicações de Uso</h2>
                <ul className="list-disc list-inside space-y-2">
                  {equipment.indicacoesUso.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {equipment.caracteristicasTecnicas && equipment.caracteristicasTecnicas.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-2">Características Técnicas</h2>
                <ul className="list-disc list-inside space-y-2">
                  {equipment.caracteristicasTecnicas.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {equipment.cuidadosEspeciais && equipment.cuidadosEspeciais.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-2">Cuidados Especiais</h2>
                <ul className="list-disc list-inside space-y-2">
                  {equipment.cuidadosEspeciais.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {equipment.cuidadosTransporte && equipment.cuidadosTransporte.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-2">Cuidados no Transporte</h2>
                <ul className="list-disc list-inside space-y-2">
                  {equipment.cuidadosTransporte.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
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