# Registro de Decisões Arquiteturais (ADR)

Este documento registra de forma sintética as principais decisões técnicas
adotadas durante o desenvolvimento do projeto.

---

## ADR01 — Utilização de Node.js

**Status:** Aceita

### Contexto

O projeto necessita de uma tecnologia para implementação da aplicação e das
APIs responsáveis pelo gerenciamento dos compromissos e tarefas.

### Decisão

Foi escolhida a utilização do Node.js como ambiente de execução da aplicação.

### Justificativa

A tecnologia já está configurada no ambiente atual do projeto e permite o
desenvolvimento da aplicação utilizando JavaScript.

---

## ADR02 — Utilização do Express

**Status:** Aceita

### Contexto

O projeto necessita de uma estrutura para criação das APIs responsáveis pelas
operações de compromissos e tarefas.

### Decisão

Foi escolhido o Express como framework para desenvolvimento das APIs.

### Justificativa

O Express já está configurado no projeto e fornece uma estrutura simples para
implementação das rotas da aplicação.

---

## ADR03 — Utilização de Docker

**Status:** Aceita

### Contexto

O projeto precisa possuir um ambiente de execução reproduzível para facilitar
a execução da aplicação.

### Decisão

Foi adotado o Docker para empacotamento e execução da aplicação.

### Justificativa

O uso de Docker permite padronizar o ambiente de execução e reduzir diferenças
entre os ambientes utilizados durante o desenvolvimento.

---

## ADR04 — Estratégia de branches

**Status:** Aceita

### Contexto

O projeto necessita de uma forma organizada de desenvolver e integrar as
alterações realizadas no repositório.

### Decisão

Foi adotada a utilização das branches `main`, `develop` e `feature/*`.

### Justificativa

A estratégia permite separar a branch principal, a integração das alterações
e o desenvolvimento de funcionalidades específicas, utilizando Pull Requests
para integração.

---

## ADR05 — Desenvolvimento por componentes

**Status:** Aceita

### Contexto

O sistema possui diferentes responsabilidades relacionadas ao gerenciamento
de compromissos, tarefas e organização do cronograma.

### Decisão

A solução será decomposta em componentes de compromissos, tarefas e
cronograma, com APIs isoladas para as operações de compromissos e tarefas.

### Justificativa

A decomposição permite separar responsabilidades e facilita o desenvolvimento
e os testes das diferentes partes da solução.

---

## ADR06 — Utilização de SQLite para persistência

**Status:** Aceita

### Contexto

A implementação inicial armazenava compromissos e tarefas em arrays JavaScript, fazendo com que os registros fossem perdidos após a reinicialização do servidor.

### Decisão

Foi adotado o SQLite para armazenar compromissos e tarefas de forma persistente.

### Justificativa

O SQLite permite armazenar os dados em um banco de dados local, sem exigir um servidor de banco de dados separado. A solução também permite utilizar um banco em memória durante os testes automatizados, favorecendo o isolamento entre os cenários.

---

## ADR07 — Organização da aplicação em camadas

**Status:** Aceita

### Contexto

A aplicação possui responsabilidades distintas relacionadas ao recebimento de requisições HTTP, ao tratamento das operações de negócio e ao armazenamento dos dados.

### Decisão

Foi adotada a organização da aplicação em rotas, controllers, services e módulo de banco de dados.

### Justificativa

A separação de responsabilidades facilita a manutenção do código, a identificação de erros e a realização de testes nas diferentes partes da aplicação.

---

## ADR08 — Utilização de testes automatizados com Jest

**Status:** Aceita

### Contexto

A aplicação precisa verificar o comportamento das APIs, as validações de entrada, o isolamento dos testes e a persistência dos dados.

### Decisão

Foi adotado o Jest como ferramenta de execução dos testes automatizados, com Supertest para auxiliar nos testes HTTP.

### Justificativa

A automação permite executar os cenários de teste de maneira repetível e identificar regressões durante a evolução do projeto. A suíte registrada para a Entrega 2 possui 8 suítes e 47 testes aprovados.