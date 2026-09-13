# SolucaoBootcamp3

Projeto desenvolvido para a Entrega 1 do Bootcamp 3.

> ## ⚠️ Observação sobre o requisito de IA
>
> **Atenção:** o agente de IA especificado no enunciado (Claude Code, Codex CLI, Cursor ou Antigravity) não pôde ser utilizado devido a limitações de autenticação/acesso no ambiente disponível, sem contratação de serviço pago.
>
> Para não interromper o desenvolvimento, foi utilizado o **GitHub Copilot Chat (modo Agent)** como alternativa.
>
> A situação e as evidências estão documentadas em [`docs/ia/USO_IA.md`](docs/ia/USO_IA.md).

## Objetivo

Desenvolver a base técnica e organizacional de uma solução para organização de agenda e tarefas, permitindo o gerenciamento de compromissos e da agenda virtual do usuário.

## Tecnologias

* Node.js
* Express
* Docker
* Git e GitHub
* GitHub Copilot Chat

## Instalação

Com o Node.js instalado, execute:

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

A aplicação será executada na porta `3000`.

## Execução com Docker

Para criar a imagem Docker:

```bash
docker build -t solucaobootcamp3 .
```

Para executar o container:

```bash
docker run --rm -p 3000:3000 solucaobootcamp3
```

A aplicação poderá ser acessada em:

```text
http://localhost:3000
```

## Estrutura atual

```text
SolucaoBootcamp3/
├── docs/
│   ├── arquitetura/
│   │   └── ADR.md
│   ├── evidencias/
│   │   └── ENTREGA_1.md
│   ├── ia/
│   │   └── USO_IA.md
│   ├── sdd/
│   │   └── SDD.md
│   └── testes/
│       └── TEST_HARNESS.md
├── src/
│   └── index.js
├── tests/
│   └── index.test.js
├── .dockerignore
├── .gitignore
├── CLAUDE.md
├── Dockerfile
├── package.json
└── package-lock.json
```

## Documentação técnica

* [Software Design Document (SDD)](docs/sdd/SDD.md)
* [Registro de Decisões Arquiteturais (ADR)](docs/arquitetura/ADR.md)
* [Uso de Inteligência Artificial](docs/ia/USO_IA.md)
* [Evidências da Entrega 1](docs/evidencias/ENTREGA_1.md)
* [Test Harness](docs/testes/TEST_HARNESS.md)

## Estratégia de branches

O projeto utiliza as seguintes branches:

* `main`: branch principal e protegida.
* `develop`: branch utilizada para integração das alterações.
* `feature/*`: branches utilizadas para desenvolvimento de novas tarefas ou funcionalidades.

As alterações devem ser desenvolvidas em branches `feature/*` e integradas por meio de Pull Requests.

A branch `main` não deve receber commits diretos.

## Uso de Inteligência Artificial

O projeto utiliza o GitHub Copilot Chat, integrado ao Visual Studio Code, como ferramenta de apoio ao desenvolvimento.

As orientações e o contexto do projeto estão registrados no arquivo `CLAUDE.md`.

O registro das interações e do uso da ferramenta está disponível em:

`docs/ia/USO_IA.md`

## Testes

O projeto possui um Test Harness automatizado utilizando Jest e Supertest.

Para executar os testes:

```bash
npm test
```

No ambiente Windows com PowerShell, caso a política de execução impeça o comando `npm`, pode ser utilizado:

```powershell
npm.cmd test
```

A suíte inicial contempla testes para:

* resposta esperada da rota `GET /`;
* tratamento de acesso a uma rota inexistente.

Os testes também podem ser executados no ambiente Docker conforme documentado em [`docs/testes/TEST_HARNESS.md`](docs/testes/TEST_HARNESS.md).

## Status

O projeto encontra-se na etapa inicial de desenvolvimento da Entrega 1.

A API inicial possui uma rota de teste, Test Harness automatizado e pode ser executada localmente ou por meio de um container Docker.
