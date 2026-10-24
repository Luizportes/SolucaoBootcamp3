# Uso de Inteligência Artificial

> ## ⚠️ AVISO AO PROFESSOR — FERRAMENTA DE IA
>
> **ATENÇÃO: este item apresenta uma limitação no atendimento literal ao requisito da atividade.**
>
> O enunciado da Entrega 1 indica a utilização de uma das seguintes ferramentas de IA: **Claude Code, Codex CLI, Cursor ou Antigravity**.
>
> Durante a preparação do ambiente, foram realizadas tentativas de utilização de ferramentas previstas no enunciado. O **Claude Code** foi instalado, porém sua utilização ficou impedida por uma solicitação de verificação de identidade.
>
> O **Codex CLI** também foi instalado e executado, porém a opção de autenticação apresentada para utilização com a conta disponível exigiu um plano compatível com o recurso.
>
> Como não houve intenção de realizar contratação ou gerar custos adicionais, optou-se por utilizar o **GitHub Copilot Chat**, integrado ao Visual Studio Code, como alternativa.
>
> **Situação do requisito:** a ferramenta indicada no enunciado não pôde ser utilizada literalmente no ambiente disponível. A situação está sendo registrada de forma transparente para avaliação.
>
> **Ferramenta efetivamente utilizada:** GitHub Copilot Chat, por meio do modo Agent integrado ao Visual Studio Code.

## Ferramenta utilizada

A ferramenta de IA utilizada no desenvolvimento foi o GitHub Copilot Chat, por meio do modo Agent integrado ao Visual Studio Code.

## Objetivo do uso da IA

A IA foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto, auxiliando na análise do repositório, revisão de código, documentação, identificação de problemas e refinamento das soluções propostas.

As sugestões foram avaliadas conforme os requisitos do projeto. A utilização da IA não substituiu a execução dos testes nem a validação das alterações realizadas.
## Contexto do projeto

Foi criado o arquivo `CLAUDE.md` contendo o contexto do projeto, as regras de colaboração, orientações para utilização de IA e critérios de qualidade.

Esse arquivo também serve como referência de contexto para ferramentas de IA utilizadas no projeto.

## Configuração inicial

Inicialmente, o Claude Code foi instalado no ambiente Windows e configurado para utilização dentro do repositório. Entretanto, sua utilização ficou limitada por uma solicitação de verificação de identidade.

O Codex CLI também foi instalado e executado durante a tentativa de utilização de uma das ferramentas indicadas no enunciado, porém a autenticação apresentada para a conta disponível exigiu um plano compatível com o recurso.

Como alternativa sem custo adicional, foi utilizado o GitHub Copilot Chat integrado ao Visual Studio Code.

## Interação inicial com a IA

Foi solicitado ao GitHub Copilot Chat, utilizando o modo Agent, que analisasse o repositório atual, lesse o `README.md` e o `CLAUDE.md` e apresentasse um diagnóstico da estrutura existente e dos itens ainda necessários para a Entrega 1 do Bootcamp 3.

A instrução utilizada foi:

> Analise o repositório atual. Leia o README.md e o CLAUDE.md e faça um diagnóstico da estrutura existente. Informe quais arquivos existem, qual é o objetivo atual do projeto e o que ainda falta para atender à Entrega 1 do Bootcamp 3. Não crie, altere ou exclua nenhum arquivo.

A IA identificou que o repositório possuía inicialmente apenas os arquivos de documentação e contexto, apontando como itens pendentes, entre outros, código-fonte, configuração de dependências, testes automatizados, Docker, documentação de execução e demais artefatos técnicos.

## Refinamento das sugestões

As sugestões produzidas pela IA deverão ser avaliadas pelos integrantes do projeto antes de serem incorporadas ao código. Alterações que não estejam de acordo com os requisitos definidos na especificação técnica deverão ser ajustadas ou rejeitadas.

## Exemplo de avaliação e refinamento

Durante o desenvolvimento, foi solicitado ao GitHub Copilot Chat que analisasse a rota `GET "/"` existente e sugerisse uma melhoria simples, sem alterar os arquivos.

A IA sugeriu tornar o código mais explícito utilizando `status(200)` e extrair a mensagem retornada para uma constante.

Após avaliação da sugestão, decidiu-se não aplicar a alteração neste momento. A rota já apresenta comportamento adequado para a etapa atual do projeto, o código é simples e a criação de uma constante para uma mensagem utilizada apenas uma vez não apresenta benefício relevante neste contexto.

Esse caso demonstra que as sugestões da IA não são incorporadas automaticamente. Elas são avaliadas de acordo com os requisitos e com a necessidade atual do projeto, podendo ser aceitas, modificadas ou rejeitadas.

### Prompt utilizado

> Analise o arquivo `src/index.js` e sugira uma melhoria simples para a rota GET "/" que preserve o comportamento atual da aplicação. Não altere nenhum arquivo ainda. Explique primeiro qual alteração você recomenda e por quê.

### Resultado da avaliação

**Sugestão recebida:** adicionar `status(200)` e utilizar uma constante para a mensagem da API.

**Decisão:** rejeitada neste momento.

**Justificativa:** a alteração não é necessária para atender aos requisitos atuais e aumentaria a complexidade do código sem benefício proporcional.

---

## Apoio à documentação da Entrega 2

Durante a preparação da documentação da Entrega 2, a IA foi utilizada como apoio para organizar e revisar os documentos do projeto.

As atividades de documentação envolveram:

- revisão do README para refletir as funcionalidades implementadas;
- organização das decisões arquiteturais registradas no ADR;
- conferência da documentação técnica em relação à implementação descrita no SDD;
- preparação de orientações para revisão dos documentos e conferência do estado do Git.

As alterações propostas devem ser conferidas pelo integrante responsável antes de serem incorporadas ao repositório. Os resultados dos testes devem ser apresentados conforme as execuções efetivamente realizadas, sem inventar evidências ou resultados.

---

## Apoio à documentação da Entrega 3

Na preparação da documentação da Entrega 3, a IA foi utilizada como apoio à revisão e à consolidação dos documentos existentes.

As atividades envolveram:

- revisão do README para alinhar as instruções de execução e os resultados técnicos registrados;
- comparação do SDD com as evidências da implementação final;
- revisão do ADR para atualizar o registro dos testes automatizados;
- conferência da consistência entre os resultados de testes, a cobertura de código e as evidências da Entrega 3.

As alterações foram realizadas e conferidas pelo integrante responsável. Os resultados técnicos foram baseados nos registros existentes no repositório, sem tratar sugestões da IA como evidências de execução.

A revisão documental não substitui a aprovação da equipe, a execução independente dos testes nem a revisão do Pull Request.

**Limitação:** esta seção registra o uso de IA no apoio à documentação. Ela não afirma que a IA executou os testes, realizou a auditoria de segurança ou homologou funcionalmente a aplicação.
