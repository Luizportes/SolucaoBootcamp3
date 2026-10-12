# Análise crítica e ética do uso de Inteligência Artificial

## 1. Objetivo

Este documento analisa os benefícios, riscos e limites do uso de ferramentas de Inteligência Artificial durante o desenvolvimento e a documentação da SolucaoBootcamp3. A IA foi tratada como ferramenta de apoio, e não como substituta da responsabilidade técnica da equipe.

## 2. Confiabilidade e possíveis erros

Ferramentas de IA podem produzir respostas plausíveis, mas incorretas, incompletas ou incompatíveis com o código existente. Por isso, sugestões relacionadas a requisitos, arquitetura, comandos, testes e documentação devem ser verificadas antes de serem incorporadas.

No contexto deste projeto, a revisão deve considerar os arquivos reais, o comportamento da API, os resultados dos testes e o histórico de commits. Não se deve declarar uma funcionalidade implementada ou um teste aprovado apenas porque uma ferramenta sugeriu essa conclusão.

## 3. Segurança do código

Sugestões de código precisam ser avaliadas quanto a:

- validação de dados recebidos pela API;
- uso de consultas SQL parametrizadas;
- tratamento de erros e respostas HTTP;
- exposição de credenciais, tokens ou informações sensíveis;
- comandos que possam excluir ou sobrescrever arquivos;
- dependências vulneráveis ou desnecessárias;
- permissões e configurações inseguras.

O projeto utiliza consultas parametrizadas na camada de persistência e possui funções compartilhadas de validação. Esses mecanismos devem continuar sendo revisados e testados; a presença deles não representa garantia absoluta de segurança.

Comandos sugeridos por IA não devem ser executados sem que seus efeitos sejam compreendidos. Alterações de dependências devem ser verificadas por meio dos arquivos de configuração, dos testes e de ferramentas de auditoria apropriadas.

## 4. Privacidade e confidencialidade

Não devem ser enviados a ferramentas externas dados pessoais desnecessários, senhas, tokens, chaves de API, credenciais ou conteúdo confidencial da equipe.

Antes de compartilhar trechos do repositório com uma ferramenta, é necessário considerar quais informações estão incluídas e as condições de privacidade do serviço utilizado. O uso de IA não elimina a responsabilidade de proteger dados e acessos.

## 5. Direitos autorais e licenças

Conteúdo gerado por IA não deve ser considerado automaticamente original, livre de restrições ou compatível com qualquer licença. Código, textos e dependências sugeridos precisam ser avaliados quanto à origem, à licença aplicável e às exigências de atribuição.

Quando houver dúvidas sobre a origem de um trecho ou sobre suas condições de uso, a equipe deve investigar antes de incorporá-lo ao projeto. Este documento não afirma ter sido realizada uma auditoria jurídica ou completa de licenças.

## 6. Supervisão humana

A responsabilidade pelas decisões finais permanece com a equipe. A revisão deve verificar se as sugestões:

1. atendem aos requisitos registrados no SDD;
2. correspondem à arquitetura e ao código existentes;
3. respeitam os padrões e as validações do projeto;
4. não introduzem riscos desnecessários;
5. podem ser verificadas por testes ou inspeção;
6. estão documentadas de forma coerente com a implementação.

Os resultados dos testes devem ser registrados conforme a execução real, sem alterar números ou omitir falhas para aparentar sucesso.

## 7. Limitações de acesso às ferramentas

Conforme o registro de uso de IA, houve tentativas de utilizar Claude Code e Codex CLI, mas problemas de verificação de identidade ou autenticação impediram a conclusão do acesso. O GitHub Copilot Chat foi utilizado como alternativa no VS Code.

Esses obstáculos limitaram a comparação prática entre ferramentas. Não seria correto atribuir resultados a ferramentas cujo uso efetivo não foi confirmado.

## 8. Recomendações de governança

Para manter um uso responsável de IA neste projeto, recomenda-se:

- registrar as ferramentas utilizadas e o objetivo de cada uso;
- preservar prompts e resultados relevantes quando apropriado;
- revisar manualmente código, comandos e documentação sugeridos;
- executar os testes pertinentes após alterações;
- não inserir segredos ou dados confidenciais nos prompts;
- conferir licenças e a origem de materiais externos;
- relacionar decisões importantes a commits, issues ou pull requests reais;
- distinguir recomendações geradas de alterações efetivamente realizadas.

## 9. Conclusão

A IA pode acelerar tarefas de análise, desenvolvimento e documentação, mas também pode gerar erros, omitir limitações ou sugerir soluções inadequadas ao contexto. Seu uso responsável depende de transparência, proteção de dados, revisão humana e verificação técnica.

Esta análise registra critérios e riscos relevantes para a equipe. Ela não deve ser interpretada como prova de que todos os riscos foram eliminados ou de que todas as verificações de segurança e licenciamento já foram executadas.

## 10. Documentos relacionados

- [Registro de uso de IA](USO_IA.md)
- [Comparação de ferramentas](COMPARACAO_FERRAMENTAS.md)
- [SDD](../sdd/SDD.md)
- [Registro de decisões arquiteturais](../arquitetura/ADR.md)
- [Relatório de testes](../testes/RELATORIO_TESTES.md)
