# SolucaoBootcamp3

Aplicação web para organização de compromissos, tarefas e atividades de um cronograma diário. Projeto desenvolvido no Bootcamp 3, com foco em organização do código, testes automatizados, persistência de dados e documentação técnica.

## Objetivo

Permitir que o usuário gerencie compromissos e tarefas por meio de uma interface web, com operações de cadastro, consulta, atualização e exclusão, além da consulta de atividades por data.

## Tecnologias utilizadas

- **Node.js 24:** ambiente de execução.
- **Express:** servidor HTTP e API REST.
- **SQLite:** persistência dos compromissos e das tarefas.
- **HTML, CSS e JavaScript:** interface web.
- **Jest:** execução dos testes automatizados.
- **Supertest:** testes HTTP da aplicação.
- **Docker e Docker Compose:** padronização do ambiente de execução.
- **Git e GitHub:** versionamento e colaboração.

## Funcionalidades

- Gerenciamento de compromissos.
- Gerenciamento de tarefas.
- Consulta de atividades por data.
- Validação de campos, datas, horários, status e identificadores.
- Persistência de registros em SQLite.
- Interface web acessível pelo navegador.
- Execução local ou em ambiente Docker.

## Requisitos

Para executar o projeto localmente, instale:

- Node.js compatível com a versão utilizada no projeto.
- npm, incluído na instalação do Node.js.

Para utilizar o ambiente conteinerizado, instale também o Docker com suporte ao Docker Compose.

## Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/Luizportes/SolucaoBootcamp3.git
cd SolucaoBootcamp3
```

Instale as dependências:

```bash
npm install
```

## Execução local

Para iniciar a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

Para iniciar a aplicação normalmente:

```bash
npm start
```

Por padrão, o servidor utiliza a porta `3000`.

A interface web está disponível em:

http://localhost:3000/agenda/

## Testes automatizados

O projeto utiliza Jest e Supertest para verificar o comportamento da aplicação.

Execute a suíte de testes com:

```bash
npm test
```

No Windows PowerShell, se necessário, utilize:

```powershell
npm.cmd test
```

A execução registrada para a Entrega 2 apresentou:

- 8 suítes aprovadas;
- 47 testes aprovados;
- 0 testes com falha;
- 100% de aprovação dos testes executados.

Esses resultados se referem à suíte executada e não representam uma garantia de ausência de defeitos.

O relatório detalhado está disponível em [`docs/testes/RELATORIO_TESTES.md`](docs/testes/RELATORIO_TESTES.md).

## Execução com Docker Compose

Construa a imagem:

```bash
docker compose build
```

Inicie a aplicação:

```bash
docker compose up -d
```

Acesse a interface:

http://localhost:3000/agenda/

Para acompanhar os registros da aplicação:

```bash
docker compose logs -f
```

Para encerrar os serviços:

```bash
docker compose down
```

A configuração do Docker Compose utiliza um volume nomeado para preservar os dados do SQLite conforme a configuração do projeto. Não remova o volume se precisar manter os dados armazenados.

Para executar os testes no container:

```bash
docker compose run --rm --no-deps -e NODE_ENV=test app npm test -- --runInBand
```

## Estrutura do projeto

```text
SolucaoBootcamp3/
├── docs/
│   ├── arquitetura/
│   │   ├── ADR.md
│   │   └── FLUXO.md
│   ├── evidencias/
│   │   ├── ENTREGA_1.md
│   │   └── ENTREGA_2.md
│   ├── ia/
│   │   ├── USO_IA.md
│   │   ├── COMPARACAO_FERRAMENTAS.md
│   │   └── ANALISE_CRITICA.md
│   ├── sdd/
│   │   └── SDD.md
│   └── testes/
│       ├── CORRECOES_E_REFINAMENTOS.md
│       ├── RELATORIO_TESTES.md
│       └── TEST_HARNESS.md
├── public/
│   ├── app.js
│   ├── index.html
│   └── style.css
├── src/
│   ├── controllers/
│   ├── database/
│   ├── routes/
│   ├── services/
│   └── utils/
├── tests/
├── data/
├── Dockerfile
├── compose.yaml
├── package.json
└── README.md
```
## Documentação técnica

- [Software Design Document (SDD)](docs/sdd/SDD.md)
- [Registro de Decisões Arquiteturais (ADR)](docs/arquitetura/ADR.md)
- [Diagrama do fluxo da aplicação](docs/arquitetura/FLUXO.md)
- [Registro de uso de Inteligência Artificial](docs/ia/USO_IA.md)
- [Comparação de ferramentas de IA](docs/ia/COMPARACAO_FERRAMENTAS.md)
- [Análise crítica e ética do uso de IA](docs/ia/ANALISE_CRITICA.md)
- [Evidências da Entrega 1](docs/evidencias/ENTREGA_1.md)
- [Evidências da Entrega 2](docs/evidencias/ENTREGA_2.md)
- [Relatório de testes da Entrega 2](docs/testes/RELATORIO_TESTES.md)
- [Correções e refinamentos da Entrega 2](docs/testes/CORRECOES_E_REFINAMENTOS.md)
- [Test Harness](docs/testes/TEST_HARNESS.md)

## Organização do Git

O projeto utiliza a seguinte estratégia de branches:

- `main`: branch principal.
- `develop`: branch de integração.
- `feature/*`: branches destinadas ao desenvolvimento de funcionalidades e alterações específicas.

As alterações devem ser desenvolvidas em branches próprias e integradas por meio de Pull Requests, respeitando as regras de proteção e revisão configuradas no repositório.

## Uso de Inteligência Artificial

O GitHub Copilot Chat, integrado ao Visual Studio Code e utilizado no modo Agent, foi empregado como ferramenta de apoio ao desenvolvimento.

O Claude Code e o Codex CLI foram instalados ou testados, mas houve limitações de autenticação no ambiente disponível. O registro detalhado dessas tentativas e do uso efetivo da IA está em [`docs/ia/USO_IA.md`](docs/ia/USO_IA.md).

As sugestões geradas por IA devem ser avaliadas pelos integrantes do projeto antes de serem incorporadas ao código.

## Limitações conhecidas

- A aplicação não possui autenticação nem segregação de dados entre usuários.
- Não foi implementada sincronização com calendários externos.
- Os testes automatizados da interface verificam a disponibilização dos arquivos estáticos, não todas as interações do navegador.
- Não foram apresentados testes formais de carga ou desempenho.
- O SQLite nativo do Node.js apresenta aviso de funcionalidade experimental na versão utilizada.
- Permanecem alertas na árvore de dependências de desenvolvimento, conforme documentado no relatório de correções.

## Status do projeto

A Entrega 2 evoluiu a aplicação inicial para uma solução web com gerenciamento de compromissos e tarefas, cronograma por data, persistência SQLite, interface gráfica e execução com Docker Compose.

Os resultados de testes, as decisões técnicas, as correções e as limitações conhecidas estão registrados na documentação do repositório.
