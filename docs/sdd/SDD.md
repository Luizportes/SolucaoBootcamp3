# Software Design Document (SDD)

## 1. Visão Geral

### 1.1 Objetivo do Projeto

O projeto consiste no desenvolvimento de um sistema simples para organização de agenda e tarefas, semelhante a uma agenda virtual como o Google Calendar.

A solução permitirá ao usuário organizar seus compromissos e manter um cronograma virtual, facilitando a visualização e o gerenciamento de suas atividades.

### 1.2 Escopo

O sistema terá como foco o gerenciamento de compromissos e tarefas dentro de uma agenda virtual.

Os compromissos possuirão:
- Nome;
- Data;
- Horário;
- Pequena descrição.

As tarefas possuirão:
- Título;
- Prazo;
- Descrição;
- Status.

Os compromissos e as tarefas deverão ser associados às respectivas datas e apresentados na agenda, permitindo que o usuário visualize suas atividades no cronograma.

---

## 2. Requisitos Funcionais

### RF01 — Criar compromisso

O sistema deverá permitir o cadastro de um compromisso informando nome, data, horário e pequena descrição.

### RF02 — Visualizar compromissos

O sistema deverá permitir a visualização dos compromissos cadastrados na respectiva data da agenda.

### RF03 — Alterar compromisso

O sistema deverá permitir a alteração dos dados de um compromisso existente.

### RF04 — Excluir compromisso

O sistema deverá permitir a exclusão de um compromisso existente.

### RF05 — Criar tarefa

O sistema deverá permitir o cadastro de uma tarefa informando título, prazo, descrição e status.

### RF06 — Visualizar tarefas

O sistema deverá permitir a visualização das tarefas cadastradas na respectiva data da agenda.

### RF07 — Alterar tarefa

O sistema deverá permitir a alteração dos dados de uma tarefa existente.

### RF08 — Excluir tarefa

O sistema deverá permitir a exclusão de uma tarefa existente.

### RF09 — Organizar cronograma

O sistema deverá organizar os compromissos e as tarefas de acordo com suas respectivas datas, apresentando as atividades no cronograma virtual da agenda.

---

## 3. Requisitos Não Funcionais

### RNF01 — Usabilidade

O sistema deverá possuir uma interface simples e intuitiva, facilitando a organização e visualização das atividades.

### RNF02 — Organização visual

Os compromissos e as tarefas deverão ser organizados visualmente de acordo com suas respectivas datas.

### RNF03 — Desempenho

O sistema deverá apresentar resposta adequada durante a utilização normal, evitando atrasos desnecessários nas operações.

### RNF04 — Manutenibilidade

O código deverá ser organizado de forma a facilitar sua manutenção e evolução durante o desenvolvimento.

### RNF05 — Reprodutibilidade

O ambiente necessário para execução do projeto deverá ser documentado e reproduzível por meio das configurações existentes no repositório.

### RNF06 — Compatibilidade

O sistema deverá ser executável no ambiente de desenvolvimento definido para o projeto.

---

## 4. Regras de Negócio

### RN01 — Dados do compromisso

Todo compromisso deverá possuir nome, data, horário e pequena descrição.

### RN02 — Dados da tarefa

Toda tarefa deverá possuir título, prazo, descrição e status.

### RN03 — Associação com a agenda

Compromissos e tarefas deverão estar associados às suas respectivas datas para serem apresentados no cronograma virtual.

### RN04 — Alteração de registros

Os dados de um compromisso ou tarefa existente poderão ser alterados.

### RN05 — Exclusão de registros

Um compromisso ou tarefa existente poderá ser excluído da agenda.

### RN06 — Visualização por data

Os compromissos e tarefas deverão ser apresentados na agenda de acordo com suas respectivas datas.

---

## 5. Contratos de Entrada e Saída

### 5.1 Compromisso

#### Criar compromisso

**Entrada:**
- Nome;
- Data;
- Horário;
- Pequena descrição.

**Saída esperada:**
- Compromisso criado com os dados informados.

#### Visualizar compromisso

**Entrada:**
- Data do compromisso.

**Saída esperada:**
- Dados dos compromissos associados à data informada.

#### Alterar compromisso

**Entrada:**
- Identificação do compromisso;
- Dados do compromisso a serem alterados.

**Saída esperada:**
- Compromisso atualizado.

#### Excluir compromisso

**Entrada:**
- Identificação do compromisso.

**Saída esperada:**
- Confirmação da exclusão do compromisso.

---

### 5.2 Tarefa

#### Criar tarefa

**Entrada:**
- Título;
- Prazo;
- Descrição;
- Status.

**Saída esperada:**
- Tarefa criada com os dados informados.

#### Visualizar tarefa

**Entrada:**
- Data correspondente ao prazo da tarefa.

**Saída esperada:**
- Dados das tarefas associadas à data informada.

#### Alterar tarefa

**Entrada:**
- Identificação da tarefa;
- Dados da tarefa a serem alterados.

**Saída esperada:**
- Tarefa atualizada.

#### Excluir tarefa

**Entrada:**
- Identificação da tarefa.

**Saída esperada:**
- Confirmação da exclusão da tarefa.

---

### 5.3 Cronograma

#### Organizar cronograma

**Entrada:**
- Compromissos e tarefas cadastrados;
- Respectivas datas.

**Saída esperada:**
- Atividades organizadas de acordo com suas respectivas datas no cronograma virtual.

---

## 6. Decomposição da Solução

A solução será dividida em componentes com responsabilidades específicas, permitindo que cada parte seja desenvolvida e testada de forma independente.

### 6.1 Componente de Compromissos

Responsável pelo gerenciamento dos compromissos da agenda.

Principais operações:
- Criar compromisso;
- Visualizar compromissos;
- Alterar compromisso;
- Excluir compromisso.

Dados envolvidos:
- Nome;
- Data;
- Horário;
- Pequena descrição.

### 6.2 Componente de Tarefas

Responsável pelo gerenciamento das tarefas da agenda.

Principais operações:
- Criar tarefa;
- Visualizar tarefas;
- Alterar tarefa;
- Excluir tarefa.

Dados envolvidos:
- Título;
- Prazo;
- Descrição;
- Status.

### 6.3 Componente de Cronograma

Responsável pela organização e apresentação dos compromissos e tarefas de acordo com suas respectivas datas.

Principais operações:
- Organizar as atividades por data;
- Apresentar os compromissos na respectiva data;
- Apresentar as tarefas na respectiva data.

### 6.4 API de Compromissos

A API de compromissos deverá disponibilizar operações isoladas para o gerenciamento dos compromissos.

Operações previstas:
- Criar compromisso;
- Consultar compromissos;
- Alterar compromisso;
- Excluir compromisso.

### 6.5 API de Tarefas

A API de tarefas deverá disponibilizar operações isoladas para o gerenciamento das tarefas.

Operações previstas:
- Criar tarefa;
- Consultar tarefas;
- Alterar tarefa;
- Excluir tarefa.

### 6.6 Integração com o Cronograma

O componente de cronograma deverá utilizar os dados de compromissos e tarefas para organizá-los de acordo com suas respectivas datas.

A integração deverá permitir que as atividades sejam apresentadas no cronograma virtual da agenda.

---

## 7. Refinamento por Feedback

O SDD será refinado de forma iterativa durante o desenvolvimento do projeto.

Os requisitos, regras e componentes poderão ser ajustados a partir de:
- Resultados dos testes realizados durante o desenvolvimento;
- Revisões realizadas pelo grupo;
- Identificação de inconsistências ou necessidades de alteração durante a implementação.

Até o momento, esta versão representa a especificação inicial do sistema, baseada na definição do problema e nas funcionalidades estabelecidas para o projeto.

Alterações futuras deverão ser registradas na documentação quando houver impacto nos requisitos, regras de negócio, contratos ou decomposição da solução.