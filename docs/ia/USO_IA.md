# Uso de Inteligência Artificial

## Ferramenta utilizada

A ferramenta de IA utilizada no desenvolvimento foi o GitHub Copilot Chat, por meio do modo Agent integrado ao Visual Studio Code.

## Objetivo do uso da IA

A IA será utilizada como ferramenta de apoio durante o desenvolvimento, auxiliando na análise do projeto, geração e revisão de código, documentação, identificação de problemas e refinamento das soluções propostas.

## Contexto do projeto

Foi criado o arquivo `CLAUDE.md` contendo o contexto do projeto, as regras de colaboração, orientações para utilização de IA e critérios de qualidade.

Esse arquivo também serve como referência de contexto para ferramentas de IA utilizadas no projeto.

## Configuração inicial

Inicialmente, o Claude Code foi instalado no ambiente Windows e configurado para utilização dentro do repositório. Entretanto, sua utilização ficou limitada por uma solicitação de verificação de identidade.

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