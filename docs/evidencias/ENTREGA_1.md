# Evidências — Entrega 1

## 1. Identificação

**Projeto:** SolucaoBootcamp3

**Entrega:** Entrega 1 — Ambiente, Especificação Técnica e Test Harness

**Responsável por esta parte:** Pessoa 2 — GitHub, Ambiente e IA

---

## 2. Governança do GitHub

### 2.1 Estratégia de branches

Foi adotada uma estratégia de branches para organizar o desenvolvimento do
projeto:

- `main` — branch principal e protegida;
- `develop` — branch de integração;
- `feature/*` — branches utilizadas para desenvolvimento de tarefas e
  funcionalidades específicas.

Durante o desenvolvimento foram utilizadas diferentes branches `feature/*`,
conforme as atividades realizadas.

Entre as branches utilizadas estão:

- `feature/ai-context` — configuração inicial do contexto de IA;
- `feature/project-documentation` — configuração inicial do ambiente e
  documentação;
- `feature/ai-warning` — registro da limitação da ferramenta de IA;
- `feature/ai-refinement` — registro da avaliação de uma sugestão da IA;
- `feature/sdd` — criação da especificação técnica;
- `feature/adr` — criação do registro de decisões arquiteturais;
- `feature/readme-update` — atualização do README;
- `feature/evidence` — criação inicial do relatório de evidências;
- `feature/evidence-update` — atualização do relatório de evidências.

As alterações foram desenvolvidas em branches específicas e integradas por
meio de Pull Requests.

### 2.2 Proteção da branch `main`

A branch `main` foi configurada com regras de proteção no GitHub, incluindo:

- necessidade de Pull Request para alterações;
- exigência de aprovação;
- dismiss de aprovações antigas após novos commits;
- resolução de conversas antes da integração;
- bloqueio de bypass das regras configuradas.

Dessa forma, a branch `main` não deve receber alterações diretamente.

### 2.3 Pull Requests

Foram utilizados Pull Requests para integração das alterações na branch
`develop`.

#### PR #5

Integração da configuração inicial do contexto e da documentação relacionada
ao uso da IA.

#### PR #6

Integração da configuração inicial do ambiente e da documentação do projeto.

Os PRs #5 e #6 foram integrados sem aprovação de um segundo integrante.
Portanto, não é afirmado nesta evidência que houve revisão ou aprovação por
outro integrante nesses dois PRs.

Posteriormente, foram utilizados Pull Requests para integração de outros
artefatos da Entrega 1, incluindo:

- especificação técnica (SDD);
- registro de decisões arquiteturais (ADR);
- atualização do README;
- documentação relacionada ao uso e refinamento da IA.

Os Pull Requests relacionados ao SDD e ao ADR foram aprovados por integrante
do projeto antes da integração na branch `develop`.

As aprovações ocorreram sem comentários registrados nos Pull Requests.

---

## 3. GitHub Projects e Issues

Foi criado o projeto:

`SolucaoBootcamp 3 - Sprint 1`

O projeto possui as seguintes colunas:

- `Todo`;
- `In Progress`;
- `Done`.

Também foram criadas Issues para organizar as atividades relacionadas à
responsabilidade da Pessoa 2:

1. Configurar estratégia de branches e governança do repositório;
2. Configurar ferramenta de IA e contexto do repositório;
3. Criar ambiente de desenvolvimento reproduzível com Docker;
4. Criar README e documentar execução do projeto.

O GitHub Project foi utilizado como espaço de organização e acompanhamento
das atividades da Entrega 1.

---

## 4. Ferramenta de Inteligência Artificial

### 4.1 Ferramenta prevista no enunciado

O enunciado da Entrega 1 indica a utilização de uma das seguintes ferramentas:

- Claude Code;
- Codex CLI;
- Cursor;
- Antigravity.

Durante a preparação do ambiente, foram realizadas tentativas de utilização
das ferramentas previstas.

O Claude Code foi instalado, porém sua utilização ficou impedida por uma
solicitação de verificação de identidade.

O Codex CLI também foi instalado e executado, porém a opção de autenticação
apresentada para a conta disponível exigiu um plano compatível com o recurso.

Como não houve intenção de realizar contratação ou gerar custos adicionais,
optou-se pela utilização do GitHub Copilot Chat como alternativa.

### 4.2 Ferramenta efetivamente utilizada

A ferramenta utilizada no desenvolvimento foi o **GitHub Copilot Chat**,
integrado ao Visual Studio Code, utilizando o modo Agent.

A limitação relacionada ao requisito específico do enunciado está registrada
de forma transparente no arquivo:

`docs/ia/USO_IA.md`

O README também apresenta essa observação.

### 4.3 Prompt inicial

Foi solicitado ao GitHub Copilot Chat que analisasse o estado inicial do
repositório e identificasse os itens necessários para a Entrega 1.

O prompt utilizado foi:

> Analise o repositório atual. Leia o README.md e o CLAUDE.md e faça um
> diagnóstico da estrutura existente. Informe quais arquivos existem, qual é o
> objetivo atual do projeto e o que ainda falta para atender à Entrega 1 do
> Bootcamp 3. Não crie, altere ou exclua nenhum arquivo.

### 4.4 Resultado

A IA analisou o repositório e identificou:

- arquivos de documentação existentes;
- objetivo atual do projeto;
- ausência inicial de código-fonte;
- ausência inicial de configuração de dependências;
- ausência inicial de testes automatizados;
- ausência inicial de configuração Docker;
- necessidade de documentação de execução;
- demais artefatos necessários para a Entrega 1.

A resposta foi utilizada como diagnóstico inicial para orientar as atividades
seguintes.

---

## 5. Contexto fornecido à IA

Foi criado o arquivo:

`CLAUDE.md`

O arquivo contém:

- objetivo do projeto;
- forma de trabalho;
- estratégia de branches;
- regras de uso da IA;
- critérios de qualidade;
- orientação para evitar alterações desnecessárias;
- orientação para validar alterações quando possível.

Também foi criado o arquivo:

`docs/ia/USO_IA.md`

Esse documento registra:

- ferramenta utilizada;
- objetivo do uso da IA;
- contexto fornecido;
- interação inicial;
- prompt utilizado;
- resultado da interação;
- processo de refinamento das sugestões;
- limitação relacionada à ferramenta especificada no enunciado.

---

## 6. Avaliação e refinamento das sugestões da IA

Durante o desenvolvimento, foi solicitado ao GitHub Copilot Chat que analisasse
a rota `GET "/"` existente e sugerisse uma melhoria simples, sem alterar os
arquivos.

O prompt utilizado foi:

> Analise o arquivo `src/index.js` e sugira uma melhoria simples para a rota
> GET "/" que preserve o comportamento atual da aplicação. Não altere nenhum
> arquivo ainda. Explique primeiro qual alteração você recomenda e por quê.

### Sugestão recebida

A IA sugeriu:

- adicionar explicitamente `status(200)`;
- extrair a mensagem retornada para uma constante.

### Avaliação

Após analisar a sugestão, decidiu-se não aplicar a alteração naquele momento.

A rota já apresentava comportamento adequado para a etapa atual do projeto, e
a criação de uma constante para uma mensagem utilizada apenas uma vez não
apresentava benefício relevante.

Esse caso demonstra que as sugestões da IA são avaliadas antes de serem
incorporadas ao projeto, podendo ser aceitas, modificadas ou rejeitadas.

O registro dessa avaliação também está documentado em:

`docs/ia/USO_IA.md`

---

## 7. Ambiente de desenvolvimento

O ambiente inicial foi configurado utilizando:

- Node.js;
- Express;
- Docker;
- Git;
- GitHub.

### 7.1 Versões utilizadas

**Node.js**

```text
v24.11.1
```

**npm**

```text
11.6.2
```

**Docker**

```text
Docker version 29.7.2, build a7dcaa6
```

### 7.2 Dependências

Foi inicializado um projeto Node.js e instalada a dependência:

```text
Express
```

Também foi instalado o:

```text
Nodemon
```

### 7.3 Aplicação inicial

Foi criada a aplicação em:

`src/index.js`

A aplicação disponibiliza uma rota inicial `GET /` que retorna:

```json
{
  "message": "API SolucaoBootcamp3 funcionando!"
}
```

---

## 8. Execução local

A aplicação foi executada utilizando:

```powershell
npm run dev
```

Resultado observado:

```text
[nodemon] 3.1.14
[nodemon] starting `node src/index.js`
Servidor executando na porta 3000
```

A aplicação foi acessada localmente por:

```text
http://localhost:3000
```

Resposta obtida:

```json
{
  "message": "API SolucaoBootcamp3 funcionando!"
}
```

Também foi configurado o comando:

```powershell
npm start
```

para execução normal da aplicação.

---

## 9. Ambiente Docker

Foi criado o arquivo:

`Dockerfile`

Também foi criado:

`.dockerignore`

### 9.1 Construção da imagem

A imagem Docker foi construída utilizando:

```powershell
docker build -t solucaobootcamp3 .
```

A construção da imagem foi concluída com sucesso.

### 9.2 Execução do container

O container foi executado utilizando:

```powershell
docker run --rm -p 3000:3000 solucaobootcamp3
```

A aplicação foi executada com sucesso dentro do container.

---

## 10. Especificação Técnica — SDD

Foi criado o documento:

`docs/sdd/SDD.md`

O Software Design Document contém:

- visão geral e objetivo do projeto;
- escopo;
- requisitos funcionais;
- requisitos não funcionais;
- regras de negócio;
- contratos de entrada e saída;
- decomposição da solução;
- componentes previstos;
- APIs isoladas para compromissos e tarefas;
- estratégia de refinamento por feedback.

O documento foi integrado à branch `develop` por meio de Pull Request,
aprovado por integrante do projeto e posteriormente merged.

Commit de criação:

```text
18354f1 docs: adicionar especificacao SDD inicial
```

---

## 11. Registro de Decisões Arquiteturais — ADR

Foi criado o documento:

`docs/arquitetura/ADR.md`

O documento registra as principais decisões arquiteturais do projeto:

- utilização de Node.js;
- utilização de Express;
- utilização de Docker;
- estratégia de branches;
- desenvolvimento por componentes.

Cada decisão apresenta contexto, decisão adotada e justificativa.

O documento foi integrado à branch `develop` por meio de Pull Request,
aprovado por integrante do projeto e posteriormente merged.

Commit de criação:

```text
458da01 docs: adicionar registro de decisoes arquiteturais
```

---

## 12. README e documentação do projeto

O arquivo `README.md` foi atualizado para refletir a estrutura atual do
projeto e apresentar as principais informações necessárias para sua execução.

O README contém:

- objetivo do projeto;
- tecnologias utilizadas;
- instalação;
- execução local;
- execução com Docker;
- estrutura atual do projeto;
- estratégia de branches;
- uso de Inteligência Artificial;
- referência ao SDD;
- referência ao ADR;
- status atual do projeto.

Também foi registrada no README a limitação relacionada ao requisito da
ferramenta de IA.

Commit da atualização:

```text
1ac1f74 docs: atualizar README com documentacao tecnica
```

---

## 13. Commits relevantes

Entre os principais commits relacionados à preparação e documentação do
projeto estão:

```text
2e6ea52 docs: adicionar contexto para uso de IA

338b3d1 docs: registrar uso de IA no projeto

66c73a2 docs: atualizar ferramenta de IA utilizada

0a7aa86 chore: configurar ambiente inicial Node.js

366fd53 chore: adicionar configuracao Docker

01a2eaf docs: documentar execucao do projeto

c08db86 docs: registrar limitacao da ferramenta de IA

c88af29 docs: registrar avaliacao de sugestao da IA

18354f1 docs: adicionar especificacao SDD inicial

458da01 docs: adicionar registro de decisoes arquiteturais

1ac1f74 docs: atualizar README com documentacao tecnica
```

Integrações iniciais realizadas na `develop`:

```text
127c42c Merge pull request #5 from Luizportes/feature/ai-context

0f48519 Merge pull request #6 from Luizportes/feature/project-documentation
```

---

## 14. Situação das evidências

### Atendido

- [x] Estrutura de branches configurada;
- [x] Proteção da branch `main`;
- [x] GitHub Project criado;
- [x] Issues criadas;
- [x] Pull Requests utilizados;
- [x] Ferramenta de IA definida e utilizada;
- [x] Limitação da ferramenta especificada no enunciado documentada;
- [x] Arquivo de contexto criado;
- [x] Uso da IA documentado;
- [x] Avaliação de sugestão da IA documentada;
- [x] Ambiente Node.js configurado;
- [x] Aplicação inicial executada localmente;
- [x] Docker configurado;
- [x] Imagem Docker construída;
- [x] Container executado;
- [x] SDD criado;
- [x] ADR criado;
- [x] README documentado e atualizado;
- [x] SDD integrado por Pull Request com aprovação;
- [x] ADR integrado por Pull Request com aprovação.

### Pendências da Entrega 1

- [x] Test Harness automatizado;
- [x] Suite inicial de testes;
- [x] Evidências de execução do Test Harness.

As pendências relacionadas ao Test Harness correspondem à parte da entrega
atribuída à Pessoa 3.

---

## 15. Observação

As evidências registradas neste documento representam apenas atividades
efetivamente realizadas durante a preparação e desenvolvimento da Entrega 1.

As informações sobre aprovação de Pull Requests são apresentadas somente
quando houve aprovação efetivamente registrada no GitHub.

Não são atribuídas a integrantes atividades ou revisões que não tenham sido
realizadas.