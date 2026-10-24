
# Relatório de Testes — Entrega 2

## 1. Objetivo

Este documento apresenta a estratégia de testes, os cenários
automatizados e os resultados observados durante a validação
do projeto SolucaoBootcamp3.

A validação busca verificar o funcionamento das APIs de
compromissos, tarefas e cronograma, a consistência das regras
de entrada, a persistência dos registros e a disponibilização
da interface web.

Também registra a execução da suíte automatizada em ambiente
local e no Docker.

## 2. Tecnologias e Ambiente

A aplicação foi desenvolvida com as seguintes tecnologias:

- Node.js 24;
- Express;
- SQLite nativo do Node.js;
- Jest;
- Supertest;
- Docker e Docker Compose;
- HTML, CSS e JavaScript para a interface web.

O desenvolvimento e os testes locais foram realizados no
Windows, utilizando PowerShell.

A validação em Docker utilizou imagem baseada em node:24-alpine.

### 2.1 Organização dos testes

Os testes automatizados estão localizados no diretório `tests/`.

A configuração do Jest está no arquivo `jest.config.cjs`.

O arquivo `tests/setup.js` executa a limpeza das tabelas
de teste antes de cada teste, reduzindo interferências
entre diferentes cenários.

Durante a execução com `NODE_ENV=test`, o SQLite utiliza
um banco em memória.

## 3. Suítes Automatizadas

A suíte automatizada contém oito arquivos de testes.

| Arquivo | Finalidade |
|---|---|
| `tests/index.test.js` | Verificar o comportamento básico da aplicação |
| `tests/compromissos.test.js` | Validar operações de compromissos |
| `tests/tarefas.test.js` | Validar operações de tarefas |
| `tests/cronograma.test.js` | Validar consultas do cronograma |
| `tests/validacoes.test.js` | Verificar regras de validação |
| `tests/isolamento.test.js` | Verificar isolamento entre testes |
| `tests/persistencia.test.js` | Verificar persistência entre processos |
| `tests/interface.test.js` | Verificar disponibilização da interface |

O total confirmado é de 47 testes automatizados distribuídos
pelas oito suítes.

## 4. Cenários Verificados

### 4.1 Compromissos

A suíte de compromissos verifica operações relacionadas a:

- Cadastro de compromissos;
- Consulta de registros;
- Atualização;
- Exclusão;
- Tratamento de entradas inválidas e registros inexistentes.

Os cenários dão suporte à verificação dos requisitos
funcionais RF01 a RF04.

### 4.2 Tarefas

A suíte de tarefas verifica operações relacionadas a:

- Cadastro de tarefas;
- Consulta de registros;
- Atualização;
- Exclusão;
- Tratamento de entradas inválidas e registros inexistentes.

Os cenários dão suporte à verificação dos requisitos
funcionais RF05 a RF08.

### 4.3 Cronograma

A suíte de cronograma verifica a consulta de atividades
associadas a uma data, incluindo o agrupamento das
informações de compromissos e tarefas.

Esses cenários dão suporte ao requisito funcional RF09.

### 4.4 Validações

Os testes de validação abrangem regras para:

- Campos de texto obrigatórios;
- Formato e existência de datas;
- Horários válidos;
- Status permitidos;
- Identificadores válidos.

Foram incluídos casos de borda, como datas inexistentes,
anos bissextos e horários fora do intervalo aceito.

### 4.5 Isolamento

Os testes de isolamento verificam a independência dos
registros utilizados durante a execução automatizada.

O ambiente de teste utiliza SQLite em memória e limpeza
das tabelas antes de cada cenário.

### 4.6 Persistência

O teste de persistência verifica se dados gravados em
arquivo SQLite podem ser recuperados por outro processo
Node.js após o encerramento do processo inicial.

Essa verificação complementa os testes que utilizam
banco em memória.

### 4.7 Interface Web

A suíte `tests/interface.test.js` contém quatro testes:

1. Disponibilização da página HTML em `/agenda/`;
2. Disponibilização do arquivo CSS;
3. Disponibilização do arquivo JavaScript;
4. Resposta HTTP 404 para arquivo inexistente.

Esses testes verificam a entrega dos arquivos estáticos
pelo Express.

Eles não simulam automaticamente todas as interações
realizadas em um navegador.

## 5. Execução Local

### 5.1 Comando utilizado

```bash
npm test
```

No PowerShell, o comando foi executado como:

```powershell
npm.cmd test
```

### 5.2 Resultado observado

A execução local apresentou:

```text
Test Suites: 8 passed, 8 total
Tests:       47 passed, 47 total
Snapshots:   0 total
Time:        4.301 s, estimated 8 s
Ran all test suites.
```

### 5.3 Interpretação

Todas as oito suítes executadas foram aprovadas.

Não ocorreram falhas nos 47 testes automatizados.

O percentual de aprovação dos testes executados foi de 100%.

## 6. Execução no Docker

### 6.1 Construção da imagem

Foi utilizado o comando:

```bash
docker compose build
```

A construção terminou com sucesso, produzindo a imagem:

`solucaobootcamp3:latest`

### 6.2 Comando dos testes no Docker

```bash
docker compose run --rm --no-deps -e NODE_ENV=test app npm test -- --runInBand
```

A opção `--runInBand` executa os testes sequencialmente
dentro do processo do Jest.

A variável `NODE_ENV=test` ativa o armazenamento de teste
em memória, sem utilizar o banco persistente da aplicação.

### 6.3 Resultado observado

```text
PASS  tests/validacoes.test.js
PASS  tests/compromissos.test.js
PASS  tests/tarefas.test.js
PASS  tests/persistencia.test.js
PASS  tests/cronograma.test.js
PASS  tests/isolamento.test.js
PASS  tests/interface.test.js
PASS  tests/index.test.js

Test Suites: 8 passed, 8 total
Tests:       47 passed, 47 total
Snapshots:   0 total
Time:        1.515 s
Ran all test suites.
```

### 6.4 Interpretação

Os resultados confirmaram que a suíte automatizada
também funciona no ambiente Linux disponibilizado
pelo Docker.

A execução não apresentou falhas.

## 7. Testes Manuais da Interface

Além da suíte automatizada, foram realizados testes
manuais por meio da interface web.

As seguintes operações foram verificadas:

- Abertura da aplicação no navegador;
- Seleção de uma data para consultar o cronograma;
- Cadastro de compromisso;
- Consulta do compromisso cadastrado;
- Edição do compromisso;
- Exclusão do compromisso;
- Cadastro de tarefa;
- Consulta da tarefa cadastrada;
- Alteração do status da tarefa;
- Exclusão da tarefa.

O usuário responsável pelo desenvolvimento confirmou
o funcionamento dessas operações.

A interface também foi acessada com o serviço em
execução pelo Docker, utilizando o endereço:

`http://localhost:3000/agenda/`

A abertura da interface foi confirmada.

## 8. Persistência no Docker

A persistência dos registros também foi verificada
manualmente durante o desenvolvimento.

Foi realizado o seguinte procedimento:

1. Inicialização da aplicação com Docker Compose;
2. Cadastro de uma tarefa;
3. Consulta do registro cadastrado;
4. Remoção do container com `docker compose down`;
5. Nova inicialização com `docker compose up -d`;
6. Consulta do registro após a recriação do container.

O registro permaneceu disponível após a recriação,
confirmando o funcionamento do volume persistente
utilizado pela aplicação.

## 9. Rastreabilidade dos Requisitos

| Requisito | Funcionalidade | Evidência principal |
|---|---|---|
| RF01 | Criar compromisso | `tests/compromissos.test.js` |
| RF02 | Visualizar compromissos | `tests/compromissos.test.js` |
| RF03 | Atualizar compromisso | `tests/compromissos.test.js` |
| RF04 | Excluir compromisso | `tests/compromissos.test.js` |
| RF05 | Criar tarefa | `tests/tarefas.test.js` |
| RF06 | Visualizar tarefas | `tests/tarefas.test.js` |
| RF07 | Atualizar tarefa | `tests/tarefas.test.js` |
| RF08 | Excluir tarefa | `tests/tarefas.test.js` |
| RF09 | Consultar cronograma | `tests/cronograma.test.js` |

As verificações complementares encontram-se nas
suítes de validação, isolamento, persistência e interface.

## 10. Evidências de Execução

As evidências técnicas da validação incluem:

- Resultado da execução local: 8 suítes e 47 testes aprovados;
- Resultado da execução Docker: 8 suítes e 47 testes aprovados;
- Construção bem-sucedida da imagem Docker;
- Execução do serviço por Docker Compose;
- Confirmação manual da interface web;
- Histórico de commits contendo as implementações e testes.

Para o documento final da entrega, recomenda-se anexar
capturas dos resultados do Jest, especialmente o resumo
com o total de testes aprovados.

## 11. Limitações dos Testes

Embora todos os 47 testes automatizados tenham sido
aprovados, a cobertura não representa uma garantia
absoluta de ausência de defeitos.

As principais limitações são:

- Não foi realizada automação completa das interações
  do navegador com ferramentas como Playwright;
- A suíte de interface verifica o fornecimento dos
  arquivos estáticos pelo Express;
- Não foram executados testes formais de carga,
  desempenho ou múltiplos usuários simultâneos;
- Não foram realizados testes de autenticação porque
  essa funcionalidade não faz parte do escopo implementado;
- Não foi apresentado um percentual de cobertura de
  linhas ou branches, pois essa medição não foi executada.

O SQLite nativo do Node.js também emitiu avisos de
funcionalidade experimental durante algumas execuções.

Esses avisos não impediram a aprovação dos testes.

## 12. Conclusão

A validação da Entrega 2 apresentou resultado satisfatório
para os cenários implementados.

Foram executados e aprovados 47 testes automatizados,
distribuídos em oito suítes, tanto localmente quanto
no Docker.

Os testes contemplam funcionalidades essenciais,
validações, persistência, isolamento e disponibilização
da interface.

Os testes manuais complementaram a validação,
confirmando operações da agenda pelo navegador.

O conjunto de evidências demonstra que a solução
atende aos cenários verificados e apresenta um ambiente
de execução reproduzível.

---

## 13. Validação da Entrega 3

### 13.1 Resultado dos testes automatizados

Conforme as evidências registradas para a Entrega 3, a execução dos testes automatizados apresentou os seguintes resultados:

- **Suítes aprovadas:** 8 de 8;
- **Testes aprovados:** 59 de 59;
- **Falhas:** 0.

### 13.2 Cobertura de código

A execução registrada de cobertura apresentou os seguintes resultados:

| Métrica | Cobertura |
|---|---:|
| Statements | 98,38% |
| Branches | 91,26% |
| Functions | 96,66% |
| Lines | 98,38% |

O relatório detalhado pode ser consultado em `coverage/lcov-report/index.html`, após executar `npm run test:coverage`.

### 13.3 Execução em Docker

As evidências da Entrega 3 registram a execução dos testes automatizados em ambiente Docker, com 8 suítes e 59 testes aprovados, sem falhas.

Também foi registrada a validação da interface web em `http://localhost:3000/agenda/` e a persistência dos dados SQLite utilizando o volume nomeado `agenda_data`.

### 13.4 Segurança e limitações

A evidência da Entrega 3 registra que `npm audit --omit=dev` não identificou vulnerabilidades nas dependências de produção naquele momento. Esse resultado representa uma verificação pontual, não uma garantia permanente de ausência de vulnerabilidades.

A cobertura automatizada não garante ausência total de defeitos. Permanecem limitações relacionadas à ausência de autenticação e isolamento de dados por usuário, à falta de sincronização com calendários externos, à cobertura incompleta das interações da interface no navegador e à ausência de testes formais de carga e desempenho.

### 13.5 Evidências

Os resultados detalhados da Entrega 3 estão registrados em:

- `docs/evidencias/ENTREGA_3.md`;
- `docs/evidencias/logs-entrega3/testes-cobertura.txt`.

Os resultados históricos da Entrega 2 permanecem nas seções anteriores deste documento.