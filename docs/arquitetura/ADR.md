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

### Alternativas e trade-offs

**Alternativas para comparação:** utilizar outro ambiente de execução ou manter Node.js.

**Trade-offs e consequências:** manter Node.js aproveita a configuração e o uso de JavaScript no projeto, mas exige compatibilidade entre a versão do runtime, as dependências e os recursos utilizados.
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

### Alternativas e trade-offs

**Alternativas para comparação:** implementar as rotas com outro framework ou utilizar o Express já configurado.

**Trade-offs e consequências:** o Express oferece uma estrutura direta para as rotas HTTP, mas introduz dependência de um framework e exige manter suas dependências atualizadas.
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

### Alternativas e trade-offs

**Alternativas para comparação:** executar a aplicação diretamente no ambiente local ou utilizar Docker.

**Trade-offs e consequências:** Docker favorece a reprodução do ambiente, mas requer instalação, configuração e familiaridade com os comandos de contêineres. A execução local pode ser mais simples, porém depende mais da configuração de cada máquina.
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

### Alternativas e trade-offs

**Alternativas para comparação:** desenvolver diretamente em uma única branch ou separar branches de produção, integração e funcionalidades.

**Trade-offs e consequências:** `main`, `develop` e `feature/*` organizam o trabalho e permitem revisar alterações por Pull Request, mas exigem disciplina na sincronização das branches e no processo de integração.
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

### Alternativas e trade-offs

**Alternativas para comparação:** concentrar as operações em um único componente ou separar compromissos, tarefas e cronograma.

**Trade-offs e consequências:** separar responsabilidades facilita a manutenção e os testes, mas exige coordenar os componentes e manter contratos consistentes entre as partes da aplicação.
## ADR06 — Utilização de SQLite para persistência

**Status:** Aceita

### Contexto

A implementação inicial armazenava compromissos e tarefas em arrays JavaScript, fazendo com que os registros fossem perdidos após a reinicialização do servidor.

### Decisão

Foi adotado o SQLite para armazenar compromissos e tarefas de forma persistente.

### Justificativa

O SQLite permite armazenar os dados em um banco de dados local, sem exigir um servidor de banco de dados separado. A solução também permite utilizar um banco em memória durante os testes automatizados, favorecendo o isolamento entre os cenários.

---

### Alternativas e trade-offs

**Alternativas para comparação:** manter os dados em memória, utilizar SQLite ou adotar um banco de dados externo.

**Trade-offs e consequências:** SQLite oferece persistência local sem exigir um servidor de banco separado, mas não substitui automaticamente todas as capacidades de um banco gerenciado para cenários de maior escala. O banco em memória facilita testes isolados, mas não mantém os dados após o encerramento do processo de teste.
## ADR07 — Organização da aplicação em camadas

**Status:** Aceita

### Contexto

A aplicação possui responsabilidades distintas relacionadas ao recebimento de requisições HTTP, ao tratamento das operações de negócio e ao armazenamento dos dados.

### Decisão

Foi adotada a organização da aplicação em rotas, controllers, services e módulo de banco de dados.

### Justificativa

A separação de responsabilidades facilita a manutenção do código, a identificação de erros e a realização de testes nas diferentes partes da aplicação.

---

### Alternativas e trade-offs

**Alternativas para comparação:** concentrar a lógica em poucos arquivos ou separar rotas, controllers, services e banco de dados.

**Trade-offs e consequências:** a organização em camadas torna as responsabilidades mais claras e facilita testes e manutenção, mas acrescenta arquivos e exige definir corretamente a comunicação entre as camadas.
## ADR08 — Utilização de testes automatizados com Jest
A automação permite executar os cenários de teste de maneira repetível e identificar regressões durante a evolução do projeto. Na Entrega 3, a execução registrada apresentou 8 suítes e 59 testes aprovados, sem falhas. A cobertura registrada foi de 98,38% para statements, 91,26% para branches, 96,66% para functions e 98,38% para lines. Os resultados detalhados estão documentados em `docs/evidencias/ENTREGA_3.md` e `docs/evidencias/logs-entrega3/testes-cobertura.txt`.

**Status:** Aceita

### Contexto

A aplicação precisa verificar o comportamento das APIs, as validações de entrada, o isolamento dos testes e a persistência dos dados.

### Decisão

Foi adotado o Jest como ferramenta de execução dos testes automatizados, com Supertest para auxiliar nos testes HTTP.

### Justificativa

A automação permite executar os cenários de teste de maneira repetível e identificar regressões durante a evolução do projeto. A suíte registrada para a Entrega 2 possui 8 suítes e 47 testes aprovados.

### Alternativas e trade-offs

**Alternativas para comparação:** realizar verificações apenas manualmente ou utilizar testes automatizados com Jest e Supertest.

**Trade-offs e consequências:** os testes automatizados permitem repetir verificações e identificar regressões, mas exigem manutenção dos cenários e não garantem ausência de defeitos. A suíte atual cobre os casos implementados, não necessariamente todas as situações possíveis.
