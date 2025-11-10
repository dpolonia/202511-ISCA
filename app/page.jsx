'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Daniel Ferreira Polónia
        </h1>
        <p className="text-2xl text-gray-600 mb-12">
          Professor Auxiliar Convidado | DEGEIT - Universidade de Aveiro
        </p>
        <div className="max-w-4xl">
          <p className="text-3xl text-blue-900 font-light leading-relaxed">
            25 anos a integrar gestão, tecnologia e sociedade:<br />
            <span className="font-semibold">
              experiência profissional e excelência pedagógica
            </span>
            <br />
            na transformação digital da saúde
          </p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="h-full flex flex-col p-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Um Percurso de Integração, não de Substituição
        </h2>

        <div className="flex-1 flex flex-col justify-center space-y-10">
          <div className="border-l-4 border-blue-500 pl-8">
            <h3 className="text-3xl font-semibold text-blue-900 mb-3">
              1996-2007: Formação Técnica
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Eng. Eletrónica (UA) • Accenture • Pós-Graduação Gestão (ISEG) •
              IEETA/UA (PACS, DICOM)
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-8">
            <h3 className="text-3xl font-semibold text-green-900 mb-3">
              2008-2018: Integração Gestão-TI
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Docente DEGEIT • Direção Mestrado Gestão • Investigação IT Saúde
              (GOVCOPP) • ANI Consultor Sénior
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-8">
            <h3 className="text-3xl font-semibold text-purple-900 mb-3">
              2019-2025: Transformação Digital Saúde
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Docente DEGEIT (Gestão Qualidade, TSIG) • Doutoramento (VBHC/EHDS) •
              Investigador GOVCOPP (Digital Health Systems)
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-2xl text-gray-600 italic">
            Evolução representa integração progressiva de competências
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="h-full flex flex-col p-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Investigação com Impacto Internacional
        </h2>

        <div className="grid grid-cols-2 gap-12 mb-10">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">
              Métricas Scopus
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xl text-gray-700">Documentos:</span>
                <span className="text-4xl font-bold text-blue-900">28</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl text-gray-700">Citações:</span>
                <span className="text-4xl font-bold text-blue-900">153</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl text-gray-700">H-index:</span>
                <span className="text-4xl font-bold text-blue-900">6</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-green-900 mb-6">
              Distribuição Temática
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-lg text-gray-700">Saúde Digital/EHDS</span>
                  <span className="text-lg font-semibold text-green-900">35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-600 h-3 rounded-full"
                    style={{ width: '35%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-lg text-gray-700">Inovação/Gestão</span>
                  <span className="text-lg font-semibold text-green-900">30%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-600 h-3 rounded-full"
                    style={{ width: '30%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-lg text-gray-700">SI Aplicados</span>
                  <span className="text-lg font-semibold text-green-900">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-600 h-3 rounded-full"
                    style={{ width: '25%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Top 3 Trabalhos Mais Citados
          </h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-3xl font-bold text-blue-600 mr-4">1</span>
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-900">
                  "Corporate Sustainability: A View From the Top"
                </p>
                <p className="text-sm text-gray-600">
                  J Business Ethics (Q1), 2017 •{' '}
                  <span className="font-semibold text-blue-600">82 citações</span>
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-3xl font-bold text-blue-600 mr-4">2</span>
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-900">
                  "Drivers of innovation capacity in AI firms"
                </p>
                <p className="text-sm text-gray-600">
                  J Open Innovation, 2021 •{' '}
                  <span className="font-semibold text-blue-600">17 citações</span>
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-3xl font-bold text-blue-600 mr-4">3</span>
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-900">
                  "R&D tax incentives: are they effective?"
                </p>
                <p className="text-sm text-gray-600">
                  J Technology Management, 2019 •{' '}
                  <span className="font-semibold text-blue-600">10 citações</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="h-full flex flex-col p-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          18 Anos de Excelência Pedagógica Comprovada
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">18</div>
            <div className="text-xl">anos docência contínua</div>
            <div className="text-sm mt-2 opacity-90">2007-2025</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">5K+</div>
            <div className="text-xl">horas letivas</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">1.2K+</div>
            <div className="text-xl">estudantes impactados</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">30+</div>
            <div className="text-xl">UCs lecionadas</div>
            <div className="text-sm mt-2 opacity-90">Lic, Mest, Dout</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-yellow-50 rounded-xl p-8">
            <h3 className="text-3xl font-semibold text-yellow-900 mb-6">
              Avaliações P29
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xl text-gray-700">Média:</span>
                <span className="text-5xl font-bold text-yellow-600">
                  6.8
                  <span className="text-3xl">/9</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl text-gray-700">Máxima:</span>
                <span className="text-4xl font-bold text-yellow-600">
                  8.22
                  <span className="text-2xl">/9</span>
                </span>
              </div>
              <p className="text-lg text-gray-600 mt-4">
                Múltiplas avaliações <span className="font-semibold">&gt;7.0</span>
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-3xl font-semibold text-blue-900 mb-6">
              Diversidade
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Departamentos
                </h4>
                <p className="text-lg text-gray-700">DEGEIT • ESTGA • ESAN • ESSUA</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Públicos
                </h4>
                <p className="text-lg text-gray-700">Gestão • Engenharias • Saúde</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Orientações
                </h4>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">50</span> mestrados concluídas
                  <br />
                  <span className="font-semibold">5</span> co-orientações doutoramento
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="h-full flex flex-col p-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Liderança Pedagógica à Escala
        </h2>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white mb-8">
          <h3 className="text-4xl font-bold mb-4">
            Caso Paradigmático: Competências Transferíveis I
          </h3>
          <p className="text-2xl opacity-90">2023/24 • DEGEIT - Universidade de Aveiro</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-8">
            <h4 className="text-3xl font-semibold text-blue-900 mb-6">
              Dimensão
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-6xl font-bold text-blue-600 mr-4">~300</span>
                <span className="text-2xl text-gray-700">
                  alunos
                  <br />
                  coordenados
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-6xl font-bold text-blue-600 mr-4">6</span>
                <span className="text-2xl text-gray-700">
                  UCs integradas
                  <br />
                  simultâneas
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="text-2xl font-semibold text-green-900 mb-4">
                UCs Integradas
              </h4>
              <div className="grid grid-cols-2 gap-3 text-lg text-gray-700">
                <div>• Empreendedorismo</div>
                <div>• Gestão de Projetos</div>
                <div>• Comunicação</div>
                <div>• Economia I</div>
                <div>• Finanças</div>
                <div>• Design Thinking</div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h4 className="text-2xl font-semibold text-purple-900 mb-4">
                Coordenação Complexa
              </h4>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• Equipa docente multi-disciplinar</li>
                <li>• Gestão integrada avaliações</li>
                <li>• Alinhamento objetivos</li>
                <li>• Visão transversal competências</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-100 rounded-xl p-6 text-center">
          <p className="text-2xl text-gray-700">
            <span className="font-semibold text-gray-900">Demonstra:</span> Liderança
            pedagógica • Visão estratégica • Transformação digital ensino à escala
          </p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="h-full flex flex-col p-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-10">
          Da Investigação ao Impacto Social
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-blue-900">INNHospital</h3>
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                INTERREG PT-ES
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">2019-2022</p>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Papel:</span> Gestor projeto parceiro UA
              </p>
              <p>
                <span className="font-semibold">Orçamento:</span> €790.941 total | €56.667 UA
              </p>
              <p className="text-sm mt-3">
                Novo modelo hospital baseado inovação/transferência conhecimento
              </p>
              <p className="text-xs text-gray-600 mt-2">Parceiros: CHUC, IPN, APAH</p>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-green-900">MESTRa</h3>
              <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                QREN
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              2013-2015 • Electronic Marketplace TeleRadiology
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Papel:</span> Coordenador equipa UA + IUZ
              </p>
              <p>
                <span className="font-semibold">Orçamento:</span> €311.866 total | €21.683 UA
              </p>
              <p className="text-sm mt-3">
                Plataforma marketplace digital serviços radiologia
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-purple-900 mb-4">
              Projetos Europeus
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <span className="font-semibold">HELIUM</span> (CE, 2016-18)
                <br />Coordenador ANI
              </li>
              <li>
                <span className="font-semibold">EEN</span> (CE, 2015-18)
                <br />Coordenador ANI
              </li>
              <li>
                <span className="font-semibold">InfoBioMed</span> (CE, 2004-07)
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-orange-900 mb-4">CORMOL</h4>
            <p className="text-sm text-gray-600 mb-3">2020-2021 • €15.000</p>
            <p className="text-sm text-gray-700">
              Implementação ISO 56002:2019 (gestão inovação) + Integração ISO 9001:2015
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-teal-900 mb-4">
              Transferência Sociedade
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <span className="font-semibold">IUZ/PNPSO</span> (2010-11)
                <br />Coordenador • €14.983
              </li>
              <li>
                <span className="font-semibold">ERS</span> (2011)
                <br />Consultoria • €7.945
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-100 rounded-xl p-4 text-center">
          <p className="text-xl text-gray-700">
            <span className="font-semibold text-gray-900">Liderança científica</span> (gestor/coordenador) +
            <span className="font-semibold text-gray-900"> Impacto social direto</span>
          </p>
        </div>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="h-full flex flex-col p-16">
        <div className="bg-blue-600 text-white rounded-t-2xl p-6 -mx-16 -mt-16 mb-10">
          <h2 className="text-5xl font-bold">PILAR 1: Investigação</h2>
          <p className="text-2xl mt-2 opacity-90">
            EHDS e Value-Based Healthcare na Era da IA
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Linha 1: Interoperabilidade e Governação Dados EHDS
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Análise arquitetura institucional implementação EHDS •
              Interoperabilidade sistemas saúde europeus • Modelos governação dados
              transfronteiriços
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Linha 2: Sistemas Digitais de Saúde VBHC
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Estruturas de dados clínicos orientados a valor • Indicadores clínicos e
              operacionais • Dashboards decisão
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Produtos Esperados
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 2 artigos Q1/Q2 anuais</li>
                <li>• Participação consórcios europeus</li>
                <li>• Relatórios políticas públicas</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Recursos &amp; Parcerias
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• GOVCOPP + Egas Moniz School of Health</li>
                <li>• Rede EHDS Portugal</li>
                <li>• Living labs saúde digital</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="h-full flex flex-col p-16">
        <div className="bg-green-600 text-white rounded-t-2xl p-6 -mx-16 -mt-16 mb-10">
          <h2 className="text-5xl font-bold">PILAR 2: Ensino &amp; Aprendizagem</h2>
          <p className="text-2xl mt-2 opacity-90">IA Generativa e Dados em Gestão</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">
                1. Novas Unidades Curriculares
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Sistemas de Informação em Saúde Digital</li>
                <li>• Analytics &amp; IA Aplicada à Gestão</li>
                <li>• Governança Dados e Ética Digital</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">
                2. Reformulação UCs Existentes
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Integração sistemática IA generativa</li>
                <li>• Casos práticos dados reais</li>
                <li>• Ferramentas: Python, Power BI, Codex, Claude Code</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                3. Metodologias Ativas
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <span className="font-semibold">Vibe Coding</span> (dev colaborativo IA)</li>
                <li>• <span className="font-semibold">Project-Based Learning</span></li>
                <li>• <span className="font-semibold">Living Labs</span> (co-criação)</li>
                <li>• <span className="font-semibold">Hackathons</span> empresas tech</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">
                4. Competências Século XXI
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pensamento crítico outputs IA</li>
                <li>• Meta-cognição</li>
                <li>• Ética e responsabilidade IA</li>
                <li>• Literacia dados e analytics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-100 rounded-xl p-4 text-center">
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-gray-900">Avaliação Inovadora:</span>
            Portfolios digitais • Peer assessment • Avaliação uso crítico IA
          </p>
        </div>
      </div>
    )
  },
  {
    id: 9,
    content: (
      <div className="h-full flex flex-col p-16">
        <div className="bg-purple-600 text-white rounded-t-2xl p-6 -mx-16 -mt-16 mb-10">
          <h2 className="text-5xl font-bold">PILAR 3: Impacto Social</h2>
          <p className="text-2xl mt-2 opacity-90">Healthcare Digital Transformation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Instituições Saúde
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• ACSS/SPMS</li>
              <li>• ULSRA</li>
              <li>• Clínicas privadas</li>
              <li>• Startups saúde digital</li>
              <li>• Living labs</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-4">
              Empresas Tech
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Big data e IA saúde</li>
              <li>• Plataformas EHDS</li>
              <li>• Startups health tech</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-900 mb-4">
              Entidades Públicas
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• DGS</li>
              <li>• SPMS</li>
              <li>• ERS</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-5">
            <h4 className="text-lg font-semibold mb-2">Anos 1-2</h4>
            <p className="text-sm">
              Apoio 2 instituições preparação EHDS • Formação literacia dados • Dashboard VBHC
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-5">
            <h4 className="text-lg font-semibold mb-2">Anos 3-4</h4>
            <p className="text-sm">
              Plataforma-piloto integração dados VBHC • Consultoria sistemas • Guia boas práticas
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-5">
            <h4 className="text-lg font-semibold mb-2">Ano 5</h4>
            <p className="text-sm">
              ISCA referência nacional Digital Health Systems • Rede parcerias consolidada
            </p>
          </div>
        </div>

        <div className="mt-6 bg-gray-100 rounded-xl p-4">
          <p className="text-lg text-gray-700 text-center">
            <span className="font-semibold text-gray-900">Transversal:</span> 2-3 orientações doutoramento • Linha investigação •
            Recrutamento investigadores júniores
          </p>
        </div>
      </div>
    )
  },
  {
    id: 10,
    content: (
      <div className="h-full flex flex-col p-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Contributo Imediato e Visão de Longo Prazo
        </h2>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">IMEDIATO (Ano 1)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl">
              <div>✓ Excelência pedagógica comprovada (18 anos)</div>
              <div>✓ Conhecimento profundo UA/ISCA</div>
              <div>✓ Liderança equipas docentes</div>
              <div>✓ Regência imediata UCs</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">MÉDIO PRAZO (Anos 2-3)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl">
              <div>✓ Inovação pedagógica (UCs novas, IA generativa)</div>
              <div>✓ Parcerias estratégicas estabelecidas</div>
              <div>✓ Publicações Q1/Q2</div>
              <div>✓ Orientações doutoramento iniciadas</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">LONGO PRAZO (Anos 4-5)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl">
              <div>✓ ISCA referência nacional Digital Health Systems</div>
              <div>✓ Linha investigação consolidada</div>
              <div>✓ Financiamento internacional captado</div>
              <div>✓ Rede colaborações ativa</div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-900 text-white rounded-2xl p-8 text-center">
          <p className="text-3xl font-light leading-relaxed">
            <span className="font-semibold">18 anos de trajetória</span> +
            <span className="font-semibold"> visão estratégica</span> +
            <span className="font-semibold"> compromisso institucional</span> =
            <br />
            <span className="text-4xl font-bold text-blue-400 mt-4 block">
              Capacidade de contribuir imediatamente e liderar a evolução dos SI no ISCA
            </span>
          </p>
        </div>
      </div>
    )
  }
];

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (event.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="w-screen h-screen bg-white flex flex-col">
      <div className="flex-1 overflow-hidden">{slides[currentSlide].content}</div>

      <div className="bg-gray-800 text-white px-8 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft size={24} />
          <span>Anterior</span>
        </button>

        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold">
            Slide {currentSlide + 1} / {slides.length}
          </span>
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-blue-400 w-8' : 'bg-gray-600 hover:bg-gray-500 w-3'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <span>Próximo</span>
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="bg-gray-100 px-8 py-2 text-center text-sm text-gray-600">
        Use as setas do teclado (← →) ou a barra de espaço para navegar | Total: ~10 minutos
      </div>
    </div>
  );
}
