
# SolucaoBootcamp3

Aplicação web para organização de compromissos, tarefas e atividades de um cronograma diário. Projeto desenvolvido no Bootcamp 3, com foco em arquitetura organizada, testes automatizados, persistência de dados e documentação técnica.

## 1. Objetivo

Permitir que o usuário gerencie compromissos e tarefas por meio de uma interface web e de uma API REST, incluindo operações de cadastro, consulta, atualização e exclusão, além da consulta de atividades por data.

## 2. Tecnologias utilizadas

- **Node.js 24:** ambiente de execução.
- **Express:** servidor HTTP e API REST.
- **SQLite:** persistência dos dados.
- **HTML, CSS e JavaScript:** interface web.
- **Jest:** testes automatizados.
- **Supertest:** testes HTTP.
- **Docker e Docker Compose:** ambiente conteinerizado.
- **Git e GitHub:** versionamento e colaboração.

## 3. Funcionalidades

- Cadastro, consulta, atualização e exclusão de compromissos.
- Cadastro, consulta, atualização e exclusão de tarefas.
- Consulta do cronograma por data.
- Validação de campos, datas, horários, status e identificadores.
- Persistência dos dados em SQLite.
- Interface web acessível pelo navegador.
- Execução local ou com Docker Compose.

## 4. Requisitos para execução

Para executar localmente:

- Node.js 24.
- npm, incluído na instalação do Node.js.

Para utilizar o ambiente conteinerizado, instale também o Docker com suporte ao Docker Compose.

## 5. Instalação e execução local

Clone o repositório e entre na pasta:

```bash
git clone https://github.com/Luizportes/SolucaoBootcamp3.git
cd SolucaoBootcamp3
```

Instale as dependências usando o arquivo de lock:

```bash
npm ci
```

Inicie a aplicação:

```bash
npm start
```

Para iniciar em modo de desenvolvimento:

```bash
npm run dev
```

Por padrão, o servidor utiliza a porta `3000`.

- **Interface web:** http://localhost:3000/agenda/
- **API:** disponibilizada pelo servidor Express.

## 6. Execução com Docker Compose

Construa a imagem e inicie a aplicação:

```bash
docker compose up -d --build
```

Acesse a interface em:

http://localhost:3000/agenda/

Consulte os logs da aplicação:

```bash
docker compose logs app
```

Reinicie o serviço:

```bash
docker compose restart app
```

Encerre os serviços:

```bash
docker compose down
```

O Docker Compose utiliza o volume nomeado `agenda_data` para armazenar os dados persistentes do SQLite no caminho `/app/data/agenda.db`.

**Atenção:** evite `docker compose down -v` se precisar preservar os dados, pois esse comando remove os volumes do projeto.

## 7. Testes automatizados

Execute os testes:

```bash
npm test
```

Para executar os testes com relatório de cobertura:

```bash
npm run test:coverage
```

O relatório HTML de cobertura pode ser consultado localmente em:

`coverage/lcov-report/index.html`

### Resultados registrados na Entrega 3

De acordo com as evidências versionadas em `docs/evidencias/ENTREGA_3.md` e `docs/evidencias/logs-entrega3/testes-cobertura.txt`:

| Indicador | Resultado |
|---|---:|
| Suítes aprovadas | 8 de 8 |
| Testes aprovados | 59 de 59 |
| Testes com falha | 0 |
| Cobertura de instruções | 98,38% |
| Cobertura de ramificações | 91,26% |
| Cobertura de funções | 96,66% |
| Cobertura de linhas | 98,38% |

Esses números correspondem à execução registrada para a Entrega 3 e não constituem garantia de ausência de defeitos.

Para executar os testes no container usando o comando validado na evidência técnica:

```bash
docker compose run --rm --no-deps -e NODE_ENV=test --entrypoint npm app test -- --runInBand
```

## 8. Estrutura do projeto

```text
SolucaoBootcamp3/
├── docs/
│   ├── arquitetura/
│   │   ├── ADR.md
│   │   └── FLUXO.md
│   ├── evidencias/
│   │   ├── ENTREGA_1.md
│   │   ├── ENTREGA_2.md
│   │   ├── ENTREGA_3.md
│   │   └── logs-entrega3/
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
├── Dockerfile
├── compose.yaml
├── package.json
└── README.md
```

## 9. Documentação técnica

- [Software Design Document (SDD)](docs/sdd/SDD.md)
- [Decisões arquiteturais (ADR)](docs/arquitetura/ADR.md)
- [Fluxo da aplicação](docs/arquitetura/FLUXO.md)
- [Evidências da Entrega 1](docs/evidencias/ENTREGA_1.md)
- [Evidências da Entrega 2](docs/evidencias/ENTREGA_2.md)
- [Evidências técnicas da Entrega 3](docs/evidencias/ENTREGA_3.md)
- [Relatório de testes](docs/testes/RELATORIO_TESTES.md)
- [Correções e refinamentos](docs/testes/CORRECOES_E_REFINAMENTOS.md)
- [Test Harness](docs/testes/TEST_HARNESS.md)
- [Registro de uso de IA](docs/ia/USO_IA.md)
- [Comparação de ferramentas de IA](docs/ia/COMPARACAO_FERRAMENTAS.md)
- [Análise crítica e ética do uso de IA](docs/ia/ANALISE_CRITICA.md)

## 10. Organização do Git

O projeto utiliza as seguintes branches principais:

- `main`: branch principal.
- `develop`: branch de integração.
- `feature/*`: branches de desenvolvimento e alterações específicas.
- `docs/*`: branches destinadas a alterações de documentação.

As alterações devem ser desenvolvidas em branches próprias e integradas por meio de Pull Requests, respeitando as regras de revisão do repositório.

## 11. Uso de Inteligência Artificial

O uso de ferramentas de inteligência artificial como apoio ao projeto está registrado em [docs/ia/USO_IA.md](docs/ia/USO_IA.md), com informações complementares em [COMPARACAO_FERRAMENTAS.md](docs/ia/COMPARACAO_FERRAMENTAS.md) e [ANALISE_CRITICA.md](docs/ia/ANALISE_CRITICA.md).

As sugestões geradas por IA devem ser avaliadas e verificadas pelos integrantes antes de serem incorporadas ao projeto.

## 12. Limitações conhecidas

Conforme a documentação existente:

- A aplicação não possui autenticação nem separação de dados entre usuários.
- Não há sincronização com calendários externos.
- Os testes automatizados da interface não cobrem todas as interações reais do navegador.
- Não foram apresentados testes formais de carga ou desempenho.
- O SQLite nativo do Node.js pode emitir um aviso de funcionalidade experimental na versão utilizada.

Outras limitações e decisões estão registradas no SDD, nas ADRs e nos relatórios de testes.

## 13. Status da Entrega 3

A documentação técnica registra 59 testes aprovados, cobertura de linhas de 98,38%, auditoria de dependências de produção sem vulnerabilidades identificadas na execução registrada e verificações de persistência do SQLite e das principais funcionalidades da aplicação em Docker.

Consulte [docs/evidencias/ENTREGA_3.md](docs/evidencias/ENTREGA_3.md) para os detalhes e as evidências correspondentes.
