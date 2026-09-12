# SolucaoBootcamp3

Projeto desenvolvido para a Entrega 1 do Bootcamp 3.

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

## Estrutura atual

```text
SolucaoBootcamp3/
├── docs/
│   └── ia/
│       └── USO_IA.md
├── src/
│   └── index.js
├── .dockerignore
├── .gitignore
├── CLAUDE.md
├── Dockerfile
├── package.json
└── package-lock.json