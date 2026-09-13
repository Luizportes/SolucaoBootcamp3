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

- Node.js
- Express
- Docker
- Git e GitHub
- GitHub Copilot Chat

## Instalação

Com o Node.js instalado, execute:

```bash
npm install

Execução local

Para iniciar a aplicação em modo de desenvolvimento:

npm run dev

Para iniciar a aplicação normalmente:

npm start

A aplicação será executada na porta 3000.

Execução com Docker

Para criar a imagem Docker:

docker build -t solucaobootcamp3 .

Para executar o container:

docker run --rm -p 3000:3000 solucaobootcamp3

A aplicação poderá ser acessada em:

http://localhost:3000


### 2. Substitua por:

## Estrutura atual

```text
SolucaoBootcamp3/
├── docs/
│   ├── arquitetura/
│   │   └── ADR.md
│   ├── ia/
│   │   └── USO_IA.md
│   └── sdd/
│       └── SDD.md
├── src/
│   └── index.js
├── .dockerignore
├── .gitignore
├── CLAUDE.md
├── Dockerfile
├── package.json
└── package-lock.json

## Testes

O projeto possui um Test Harness automatizado utilizando Jest e Supertest.

Para executar os testes:

```bash
npm test