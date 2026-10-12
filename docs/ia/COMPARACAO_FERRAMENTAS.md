# Comparação de ferramentas de Inteligência Artificial

## 1. Objetivo

Este documento compara as ferramentas de IA consideradas durante o desenvolvimento e a documentação da SolucaoBootcamp3. A análise diferencia ferramentas efetivamente utilizadas, tentativas de acesso que foram bloqueadas e ferramentas que não tiveram seu uso confirmado.

## 2. Situação de uso das ferramentas

| Ferramenta | Situação registrada | Observações |
|---|---|---|
| Claude Code | Instalado; uso bloqueado | A verificação de identidade impediu a conclusão do acesso. Não foi possível avaliar seu desempenho prático no projeto. |
| OpenAI Codex CLI | Instalado e executado; autenticação pendente | A autenticação exigiu condições de acesso compatíveis. Não foi possível concluir a avaliação prática no projeto. |
| GitHub Copilot Chat | Utilizado no VS Code, no modo Agent | Foi utilizado como alternativa para apoiar tarefas de documentação e análise. As sugestões precisaram ser verificadas antes de serem aceitas. |
| Cursor | Uso não confirmado | Não há evidência suficiente neste registro para afirmar que foi testado no projeto. |
| Google Antigravity | Uso não confirmado | Não há evidência suficiente neste registro para afirmar que foi testado no projeto. |

## 3. Comparação

### 3.1 Integração ao fluxo de trabalho

O GitHub Copilot Chat foi a ferramenta cuja utilização prática está registrada neste projeto. Sua integração ao VS Code permitiu trabalhar no contexto dos arquivos do repositório e solicitar apoio para tarefas de desenvolvimento e documentação.

Claude Code e Codex CLI tiveram tentativas de configuração ou acesso, mas os bloqueios de autenticação impediram uma avaliação prática completa. Para Cursor e Google Antigravity, não há registro suficiente para comparar a integração real no projeto.

### 3.2 Pontos positivos observados

O uso do GitHub Copilot Chat ajudou a estruturar e revisar documentação e a explorar sugestões para tarefas técnicas. Esse apoio não substituiu a leitura dos arquivos do projeto nem a conferência dos comandos, dos testes e das decisões tomadas pela equipe.

A utilidade observada deve ser entendida como apoio à produtividade e à organização das tarefas, e não como garantia de que as respostas geradas estejam corretas.

### 3.3 Limitações observadas

- **Claude Code:** a verificação de identidade impediu a conclusão do acesso.
- **Codex CLI:** a autenticação não foi concluída nas condições disponíveis.
- **GitHub Copilot Chat:** as respostas exigiram revisão humana e confronto com o código e a documentação existentes.
- **Cursor e Google Antigravity:** não há resultados de uso prático confirmados que permitam avaliar suas limitações neste projeto.

### 3.4 Custo e acessibilidade

Não foi realizada uma comparação controlada de preços, planos, limites de uso ou requisitos de conta entre as ferramentas. Por isso, este documento não atribui valores nem afirma qual opção é mais barata. A experiência registrada permite afirmar apenas que os requisitos de autenticação afetaram a possibilidade de utilizar algumas ferramentas.

## 4. Impacto no projeto

A principal contribuição prática registrada foi o apoio do GitHub Copilot Chat à elaboração e à revisão de documentação. O processo também evidenciou que a disponibilidade de uma ferramenta depende de fatores como instalação, autenticação e acesso à conta.

Não se atribuem às ferramentas alterações específicas de código, correções ou resultados de testes sem evidência correspondente nos commits, nos arquivos ou nos registros do projeto.

## 5. Conclusão

A experiência mostrou que ferramentas de IA podem apoiar tarefas de documentação e análise, mas sua utilidade depende do acesso efetivo, da qualidade das sugestões e da revisão humana. A comparação prática ficou limitada porque nem todas as ferramentas tiveram seu uso concluído ou confirmado.

Para uma comparação mais ampla, seria necessário executar as ferramentas em tarefas equivalentes, registrar os resultados, verificar as sugestões contra os requisitos do projeto e documentar os custos e as condições de acesso consultados.

## 6. Relação com os demais documentos

- [Registro de uso de IA](USO_IA.md)
- [Análise crítica e ética do uso de IA](ANALISE_CRITICA.md)
- [Registro de decisões arquiteturais](../arquitetura/ADR.md)
- [Relatório de testes](../testes/RELATORIO_TESTES.md)
