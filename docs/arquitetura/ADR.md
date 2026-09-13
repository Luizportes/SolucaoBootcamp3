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