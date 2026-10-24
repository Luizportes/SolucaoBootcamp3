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

Durante a Entrega 2, a especificação foi refinada a partir da implementação, da identificação de limitações técnicas e da ampliação dos testes automatizados.

Os refinamentos abrangeram a definição dos contratos HTTP, a validação de entradas, a persistência dos dados com SQLite e a integração da API com uma interface web.

As alterações efetivamente realizadas são descritas nas seções seguintes, preservando os requisitos funcionais RF01 a RF09 definidos originalmente.

---

## 8. Contratos HTTP Implementados

A aplicação utiliza uma API REST desenvolvida com Node.js e Express, disponibilizando operações para gerenciamento de compromissos, tarefas e consulta do cronograma.

As requisições de cadastro e atualização utilizam JSON.

### 8.1 API de Compromissos

| Método | Endpoint | Finalidade |
|---|---|---|
| POST | /api/compromissos | Criar compromisso |
| GET | /api/compromissos | Listar compromissos |
| GET | /api/compromissos?data=AAAA-MM-DD | Filtrar compromissos por data |
| GET | /api/compromissos/:id | Consultar compromisso por ID |
| PUT | /api/compromissos/:id | Atualizar compromisso |
| DELETE | /api/compromissos/:id | Excluir compromisso |

#### Dados de um compromisso

```json
{
  "nome": "Reuniao de projeto",
  "data": "2026-10-20",
  "horario": "14:00",
  "descricao": "Revisar o andamento do projeto"
}
```

Na criação, a API retorna HTTP 201 e um objeto contendo os dados cadastrados e um identificador numérico.

Na consulta e na atualização bem-sucedidas, retorna HTTP 200.

Na exclusão bem-sucedida, retorna HTTP 200 com uma mensagem de confirmação.

### 8.2 API de Tarefas

| Método | Endpoint | Finalidade |
|---|---|---|
| POST | /api/tarefas | Criar tarefa |
| GET | /api/tarefas | Listar tarefas |
| GET | /api/tarefas?prazo=AAAA-MM-DD | Filtrar tarefas por prazo |
| GET | /api/tarefas/:id | Consultar tarefa por ID |
| PUT | /api/tarefas/:id | Atualizar tarefa |
| DELETE | /api/tarefas/:id | Excluir tarefa |

#### Dados de uma tarefa

```json
{
  "titulo": "Estudar",
  "prazo": "2026-10-20",
  "descricao": "Revisar o conteudo",
  "status": "pendente"
}
```

O comportamento dos códigos HTTP segue o mesmo padrão utilizado pela API de compromissos.

### 8.3 API de Cronograma

Endpoint:

GET /api/cronograma?data=AAAA-MM-DD

O cronograma reúne compromissos e tarefas associados à data informada.

Exemplo de resposta:

```json
{
  "data": "2026-10-20",
  "compromissos": [],
  "tarefas": []
}
```

Caso existam atividades na data, os respectivos objetos são retornados dentro das listas.

A consulta não cria novos registros: utiliza os dados dos componentes de compromissos e tarefas.

### 8.4 Códigos HTTP

| Código | Significado |
|---|---|
| 200 | Consulta, atualização ou exclusão realizada |
| 201 | Registro criado |
| 400 | Dados de entrada ou identificador inválidos |
| 404 | Registro ou rota inexistente |

---

## 9. Refinamento das Regras de Validação

Durante a implementação, identificou-se que verificar apenas a presença dos campos não era suficiente para garantir a validade dos dados.

Foi criado o módulo compartilhado `src/utils/validacoes.js`, utilizado pelos controllers.

### 9.1 Validação de Compromissos

- Nome e descrição devem conter texto não vazio.
- A data deve seguir o formato AAAA-MM-DD e representar uma data real.
- O horário deve seguir o formato HH:MM, entre 00:00 e 23:59.
- O identificador deve ser um número inteiro positivo válido.

### 9.2 Validação de Tarefas

- Título e descrição devem conter texto não vazio.
- O prazo deve seguir o formato AAAA-MM-DD e representar uma data real.
- O identificador deve ser um número inteiro positivo válido.
- O status deve assumir um dos valores permitidos:
  - pendente;
  - em andamento;
  - concluida.

A definição dos valores permitidos para o status constitui um refinamento da especificação inicial, que exigia o campo, mas não delimitava seus valores.

### 9.3 Validação do Cronograma

O cronograma exige uma data válida, incluindo verificação de datas inexistentes e anos bissextos.

Entradas inválidas recebem HTTP 400, enquanto registros não encontrados recebem HTTP 404 quando aplicável.

---

## 10. Arquitetura Implementada

A solução utiliza uma arquitetura organizada em camadas.

### 10.1 Interface Web

A interface foi implementada com HTML, CSS e JavaScript, disponibilizada pelo Express no caminho `/agenda/`.

Permite:

- selecionar datas e visualizar atividades;
- cadastrar compromissos e tarefas;
- atualizar registros existentes;
- excluir registros;
- visualizar mensagens de retorno da aplicação.

A comunicação com a API ocorre por meio de requisições HTTP realizadas com JavaScript.

### 10.2 Rotas

Localizadas em `src/routes/`.

Definem os endpoints HTTP e encaminham as requisições aos controllers correspondentes.

### 10.3 Controllers

Localizados em `src/controllers/`.

Recebem os dados das requisições, aplicam validações e retornam as respostas HTTP.

### 10.4 Services

Localizados em `src/services/`.

Executam as operações de criação, consulta, atualização e exclusão de compromissos e tarefas, utilizando o armazenamento SQLite.

### 10.5 Persistência

A aplicação utiliza SQLite nativo do Node.js 24.

O módulo `src/database/database.js` configura a conexão e cria as tabelas necessárias.

As tabelas implementadas são:

- compromissos;
- tarefas.

Na execução local, os registros são armazenados em `data/agenda.db`, salvo quando configurado outro caminho pela variável de ambiente `DB_PATH`.

Durante os testes automatizados comuns, é utilizado SQLite em memória, evitando alterações no banco real.

### 10.6 Docker

A aplicação utiliza Dockerfile e Docker Compose para padronizar a execução.

O arquivo `compose.yaml` configura a aplicação e associa um volume persistente ao diretório `/app/data`.

A persistência foi verificada após a remoção e recriação do container.

---

## 11. Refinamentos e Validação da Entrega 2

### 11.1 Persistência dos Dados

Limitação inicial: compromissos e tarefas eram armazenados em arrays JavaScript e desapareciam após reiniciar o servidor.

Refinamento realizado: substituição do armazenamento em memória por SQLite.

Validação: teste automatizado de persistência entre processos e verificação manual de recuperação dos registros.

### 11.2 Validação das Entradas

Limitação inicial: eram aceitas algumas datas, horários e situações de tarefa inválidas.

Refinamento realizado: criação de funções de validação compartilhadas e integração aos controllers.

Validação: ampliação da suíte automatizada com cenários inválidos e casos de borda.

### 11.3 Isolamento dos Testes

Limitação identificada: registros criados durante uma execução poderiam interferir nos testes seguintes da mesma suíte.

Refinamento realizado: configuração do Jest para limpar as tabelas antes de cada teste e utilização de SQLite em memória.

Validação: execução repetida da suíte automatizada e testes específicos de isolamento.

### 11.4 Reprodutibilidade no Docker

Problema identificado: inconsistências no arquivo package-lock.json impediram inicialmente a instalação das dependências pelo comando npm ci dentro da imagem Linux.

Correção realizada: atualização do lockfile no ambiente Node.js Linux e reconstrução da imagem Docker.

Validação: construção bem-sucedida da imagem e execução dos testes dentro do container.

### 11.5 Resultado dos Testes

A última execução registrada do Test Harness apresentou:

- 8 suítes aprovadas;
- 47 testes aprovados;
- 0 falhas.

A execução foi confirmada no ambiente local e no Docker.

O resultado comprova a aprovação dos cenários automatizados existentes, sem representar garantia de ausência de todos os defeitos possíveis.

---

## 12. Limitações Conhecidas

O suporte nativo ao SQLite utilizado no Node.js 24.11.1 apresenta um aviso de funcionalidade experimental, indicando possibilidade de alterações futuras na API.

Também foram identificados alertas de segurança em dependências de desenvolvimento. A vulnerabilidade crítica anteriormente presente na árvore de produção foi corrigida, e a auditoria de produção retornou zero vulnerabilidades naquele momento.

Os alertas remanescentes exigem acompanhamento e não foram corrigidos por meio de atualizações forçadas potencialmente incompatíveis.

O projeto representa uma solução simplificada de agenda virtual, sem funcionalidades avançadas como contas de usuários, compartilhamento de agendas, notificações ou sincronização com serviços externos.

---

## 13. Validação e Consolidação da Entrega 3

### 13.1 Resultado dos Testes Automatizados

Na execução registrada para a Entrega 3, foram obtidos os seguintes resultados:

- 8 suítes de testes aprovadas;
- 59 testes aprovados;
- 0 falhas.

A cobertura registrada foi:

| Métrica | Resultado |
|---|---:|
| Statements | 98,38% |
| Branches | 91,26% |
| Functions | 96,66% |
| Lines | 98,38% |

Os resultados detalhados estão registrados em `docs/evidencias/ENTREGA_3.md` e `docs/evidencias/logs-entrega3/testes-cobertura.txt`.

### 13.2 Auditoria de Segurança

A evidência registrada para a Entrega 3 informa que a execução de `npm audit --omit=dev` não identificou vulnerabilidades nas dependências de produção naquele momento.

Esse resultado representa uma verificação pontual do ambiente e das dependências analisadas, não uma garantia permanente de ausência de vulnerabilidades.

### 13.3 Validação em Ambiente Docker

A aplicação foi construída e executada em container Docker, com testes automatizados executados no ambiente de container.

O Docker Compose utiliza o volume nomeado `agenda_data`, associado ao diretório `/app/data`, para manter os dados SQLite entre reinicializações do container. A persistência foi verificada após reiniciar e recriar o container sem remover o volume.

### 13.4 Limitações e Escopo da Validação

Os resultados apresentados comprovam os cenários automatizados e as verificações registrados para a Entrega 3. Não representam garantia de ausência de todos os defeitos possíveis.

Permanecem limitações relacionadas à ausência de autenticação e isolamento de dados por usuário, à falta de sincronização com calendários externos, à cobertura incompleta de interações da interface no navegador e à ausência de testes formais de carga e desempenho.

O SQLite nativo utilizado no Node.js também pode apresentar avisos relacionados ao seu status experimental, conforme o ambiente de execução.
