\# Evidências — Entrega 1



\## 1. Identificação



Projeto: SolucaoBootcamp3  

Entrega: Entrega 1 — Ambiente, Especificação Técnica e Test Harness  

Responsável por esta parte: Pessoa 2 — GitHub, Ambiente e IA



\---



\## 2. Governança do GitHub



\### Branches



Foram configuradas as branches:



\- `main` — branch principal e protegida.

\- `develop` — branch de integração.

\- `feature/\*` — branches utilizadas para desenvolvimento das tarefas.



Branches utilizadas durante a configuração:



\- `feature/ai-context`

\- `feature/project-documentation`

\- `feature/evidence`



\### Proteção da branch main



A branch `main` foi configurada com proteção no GitHub, incluindo:



\- necessidade de Pull Request para alterações;

\- exigência de aprovação;

\- dismiss de aprovações antigas após novos commits;

\- resolução de conversas antes da integração;

\- bloqueio de bypass das regras configuradas.



\### Pull Requests



Foram utilizados Pull Requests para integração das alterações na branch `develop`.



PR #5:

\- Integração da configuração de contexto e documentação de uso da IA.



PR #6:

\- Integração da configuração do ambiente e documentação do projeto.



Observação: os PRs acima foram integrados sem aprovação de um segundo integrante. Portanto, não é afirmado nesta evidência que houve revisão/aprovação por outro integrante nesses PRs.



\---



\## 3. GitHub Projects e Issues



Foi criado o projeto:



`SolucaoBootcamp 3 - Sprint 1`



O projeto possui as colunas:



\- Todo

\- In Progress

\- Done



Foram criadas Issues para organizar as atividades relacionadas à responsabilidade da Pessoa 2:



1\. Configurar estratégia de branches e governança do repositório

2\. Configurar ferramenta de IA e contexto do repositório

3\. Criar ambiente de desenvolvimento reproduzível com Docker

4\. Criar README e documentar execução do projeto



\---



\## 4. Ferramenta de Inteligência Artificial



A ferramenta utilizada foi o GitHub Copilot Chat, integrado ao Visual Studio Code.



O Copilot foi utilizado no modo Agent para analisar o repositório e verificar o que ainda era necessário para a Entrega 1.



\### Prompt utilizado



> Analise o repositório atual. Leia o README.md e o CLAUDE.md e faça um diagnóstico da estrutura existente. Informe quais arquivos existem, qual é o objetivo atual do projeto e o que ainda falta para atender à Entrega 1 do Bootcamp 3. Não crie, altere ou exclua nenhum arquivo.



\### Resultado



A IA analisou o repositório e identificou:



\- arquivos de documentação existentes;

\- objetivo atual do projeto;

\- ausência inicial de código-fonte;

\- ausência inicial de configuração de dependências;

\- ausência inicial de testes automatizados;

\- ausência inicial de configuração Docker;

\- necessidade de documentação de execução;

\- demais artefatos necessários para a Entrega 1.



A resposta foi utilizada como diagnóstico inicial para orientar as próximas atividades.



\---



\## 5. Contexto fornecido à IA



Foi criado o arquivo:



`CLAUDE.md`



O arquivo contém:



\- objetivo do projeto;

\- forma de trabalho;

\- estratégia de branches;

\- regras de uso da IA;

\- critérios de qualidade;

\- orientação para evitar alterações desnecessárias;

\- orientação para validar alterações quando possível.



Também foi criado:



`docs/ia/USO\_IA.md`



Esse arquivo registra:



\- ferramenta utilizada;

\- objetivo do uso da IA;

\- contexto fornecido;

\- interação inicial;

\- prompt utilizado;

\- resultado da interação;

\- processo de refinamento das sugestões.



\---



\## 6. Ambiente de desenvolvimento



O ambiente inicial foi configurado utilizando Node.js, Express e Docker.



\### Versões utilizadas



Node.js:



```text

v24.11.1

npm:



11.6.2



Docker:



Docker version 29.7.2, build a7dcaa6



Dependências



Foi inicializado um projeto Node.js e instalada a dependência:



Express



Também foi instalado o:



Nodemon

Aplicação inicial



Foi criada a aplicação em:



src/index.js



A aplicação disponibiliza uma rota inicial que retorna:



{

&#x20;   "message": "API SolucaoBootcamp3 funcionando!"

}

7\. Execução local



A aplicação foi executada utilizando:



npm run dev



Resultado observado:



\[nodemon] 3.1.14

\[nodemon] starting `node src/index.js`

Servidor executando na porta 3000



A aplicação foi acessada localmente por:



http://localhost:3000



Resposta obtida:



{

&#x20;   "message": "API SolucaoBootcamp3 funcionando!"

}



Também foi configurado o comando:



npm start



para execução normal da aplicação.



8\. Ambiente Docker



Foi criado o arquivo:



Dockerfile



Também foi criado:



.dockerignore



A imagem Docker foi construída utilizando:



docker build -t solucaobootcamp3 .



A construção da imagem foi concluída com sucesso.



O container foi executado utilizando:



docker run --rm -p 3000:3000 solucaobootcamp3



A aplicação foi executada com sucesso dentro do container.



9\. Documentação



Foi criado e atualizado o arquivo:



README.md



O README contém:



objetivo do projeto;

tecnologias utilizadas;

instalação;

execução local;

execução com Docker;

estrutura atual do projeto;

estratégia de branches;

uso de Inteligência Artificial;

status atual do projeto.

10\. Commits relevantes



Principais commits relacionados à preparação do ambiente:



2e6ea52 docs: adicionar contexto para uso de IA

338b3d1 docs: registrar uso de IA no projeto

66c73a2 docs: atualizar ferramenta de IA utilizada

0a7aa86 chore: configurar ambiente inicial Node.js

366fd53 chore: adicionar configuracao Docker

01a2eaf docs: documentar execucao do projeto



Integrações realizadas na develop:



127c42c Merge pull request #5 from Luizportes/feature/ai-context

0f48519 Merge pull request #6 from Luizportes/feature/project-documentation

11\. Situação das evidências

Atendido

&#x20;Estrutura de branches configurada

&#x20;Proteção da main

&#x20;GitHub Project criado

&#x20;Issues criadas

&#x20;Pull Requests utilizados

&#x20;Ferramenta de IA definida e utilizada

&#x20;Arquivo de contexto criado

&#x20;Uso da IA documentado

&#x20;Ambiente Node.js configurado

&#x20;Aplicação inicial executada localmente

&#x20;Docker configurado

&#x20;Imagem Docker construída

&#x20;Container executado

&#x20;README documentado

12. Observação



As evidências registradas neste documento representam apenas atividades efetivamente realizadas durante a preparação inicial do projeto.

