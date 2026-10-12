
# Relatório de Correções e Refinamentos — Entrega 2

## 1. Objetivo

Este documento registra os problemas técnicos identificados durante a
Entrega 2 do projeto SolucaoBootcamp3, as estratégias adotadas para
corrigi-los e os refinamentos realizados na especificação.

Os registros distinguem problemas efetivamente observados de limitações
identificadas durante o desenvolvimento.

## 2. Correção de vulnerabilidades nas dependências

### Problema identificado

Durante a instalação das dependências, o npm audit identificou 24
vulnerabilidades, incluindo uma vulnerabilidade crítica na árvore de
dependências de produção, relacionada ao pacote proxy-addr.

### Estratégia de correção

Foi executado o comando:

```bash
npm audit fix
```

O comando atualizou dependências compatíveis sem utilizar a opção
--force, que poderia introduzir alterações incompatíveis.

### Resultado observado

Após a correção:

- A auditoria das dependências de produção retornou 0 vulnerabilidades.
- Os testes automatizados existentes continuaram passando.
- Permaneceram 22 alertas na auditoria geral, relacionados à árvore
  de dependências de desenvolvimento.

### Evidências

- Commit: 9be4e7d
- Comando: npm audit --omit=dev
- Resultado observado: found 0 vulnerabilities

### Limitação remanescente

Os alertas restantes devem continuar sendo acompanhados. Não foi
utilizada uma atualização forçada potencialmente incompatível.

---

## 3. Substituição do armazenamento temporário por SQLite

### Limitação inicial

A primeira implementação armazenava compromissos e tarefas em arrays
JavaScript.

Por esse motivo, os registros não eram preservados entre reinicializações
da aplicação.

### Refinamento implementado

Foi adotado o SQLite nativo do Node.js para armazenar os registros
em duas tabelas:

- compromissos;
- tarefas.

Os services foram modificados para executar operações SQL de inserção,
consulta, atualização e exclusão.

As consultas utilizam parâmetros, evitando concatenar diretamente os
valores recebidos do usuário nas instruções SQL.

### Validação

Foram realizadas consultas manuais e criado um teste automatizado
que utiliza dois processos Node.js independentes:

1. O primeiro processo cria registros em um banco SQLite temporário.
2. O processo é encerrado.
3. Um segundo processo abre o mesmo banco.
4. Os registros são consultados e verificados.

### Resultado

O teste automatizado de persistência foi aprovado.

### Evidências

- Commit da persistência: dc3bb23
- Commit do teste automatizado: 8b78f22
- Arquivo: tests/persistencia.test.js

---

## 4. Refinamento das validações de entrada

### Limitação identificada

Os controllers inicialmente verificavam apenas se os campos obrigatórios
possuíam texto não vazio.

Essa abordagem permitia aceitar determinadas entradas semanticamente
inválidas, como:

- Datas inexistentes, por exemplo 2026-02-30;
- Horários impossíveis, como 25:90;
- Valores de status não reconhecidos;
- Identificadores com formatos inválidos.

### Correção implementada

Foi criado o módulo compartilhado:

src/utils/validacoes.js

O módulo implementa regras para verificar:

- Textos obrigatórios;
- Datas reais no formato AAAA-MM-DD;
- Horários entre 00:00 e 23:59;
- Status permitidos;
- Identificadores inteiros positivos válidos.

### Refinamento da especificação

O SDD original exigia que cada tarefa tivesse um status, mas não
definia quais valores seriam permitidos.

Na Entrega 2, foram definidos:

- pendente;
- em andamento;
- concluida.

Essa definição foi incorporada ao SDD atualizado.

### Validação

Foram adicionados testes automatizados de entradas inválidas e
casos de borda.

Os testes verificam respostas HTTP 400 para entradas inválidas e
HTTP 404 para registros inexistentes, quando aplicável.

### Evidências

- Commit: 11ffffd
- Arquivos: src/utils/validacoes.js e tests/validacoes.test.js

---

## 5. Isolamento dos testes automatizados

### Risco identificado

O banco SQLite em memória impedia a alteração do banco real durante
os testes, mas ainda era possível compartilhar registros entre
testes da mesma suíte.

Isso poderia provocar dependência da ordem de execução.

### Correção implementada

Foi configurado o Jest para executar uma rotina beforeEach que:

- Remove os registros das tabelas de teste;
- Reinicia os identificadores;
- Mantém o banco real protegido.

Além disso, o ambiente NODE_ENV=test passou a ter prioridade sobre
a variável DB_PATH, garantindo a utilização do SQLite em memória.

### Validação

Foi criada uma suíte de isolamento que verifica se diferentes
testes começam com as tabelas vazias.

A suíte completa também foi executada duas vezes com resultados
aprovados.

### Evidências

- Commit: acbbf17
- Arquivos: jest.config.cjs, tests/setup.js e tests/isolamento.test.js

---

## 6. Correção da instalação de dependências no Docker

### Problema observado

Durante a construção da imagem Linux, o comando npm ci falhou porque
o package-lock.json apresentava inconsistências nas dependências
resolvidas para esse ambiente.

O erro indicou pacotes ausentes ou versões incompatíveis no lockfile.

### Correção implementada

O package-lock.json foi atualizado utilizando Node.js 24 Alpine
em um container Linux.

Em seguida, a imagem foi reconstruída sem utilizar cache:

```bash
docker compose build --no-cache
```

### Resultado

A etapa RUN npm ci foi concluída com sucesso e a imagem foi construída.

A suíte automatizada também foi executada com sucesso dentro do Docker.

### Evidências

- Commit: 6106a6e
- Arquivos: package-lock.json, compose.yaml e .dockerignore
- Comando de testes:

```bash
docker compose run --rm --no-deps -e NODE_ENV=test app npm test -- --runInBand
```

---

## 7. Persistência do SQLite no Docker

### Limitação identificada

Sem um volume externo, os dados armazenados no sistema de arquivos
de um container poderiam ser perdidos ao remover esse container.

### Correção implementada

Foi criado o arquivo compose.yaml com um volume nomeado associado
ao diretório /app/data.

### Validação

O seguinte procedimento foi executado:

1. Iniciar o serviço com docker compose up -d;
2. Cadastrar uma tarefa;
3. Consultar e confirmar o cadastro;
4. Remover o container com docker compose down;
5. Recriar o container;
6. Consultar novamente a tarefa cadastrada.

### Resultado

A tarefa permaneceu armazenada após a remoção e recriação do container.

### Evidências

- Commit: 6106a6e
- Arquivo: compose.yaml

---

## 8. Integração da interface web

### Necessidade identificada

A solução inicial disponibilizava as funcionalidades por meio
da API, mas não possuía uma interface gráfica para utilização
direta pelo navegador.

### Implementação

Foi criada uma interface web com:

- HTML;
- CSS;
- JavaScript.

A interface utiliza a API existente para cadastrar, consultar,
atualizar e excluir compromissos e tarefas.

Também permite consultar atividades por data.

### Validação

Foram realizados testes manuais de cadastro, consulta, edição e
exclusão pelo navegador.

Foram adicionados quatro testes automatizados para verificar
a disponibilização dos arquivos HTML, CSS e JavaScript, além
do tratamento de arquivo inexistente.

Esses testes automatizados verificam a disponibilização dos recursos
da interface, não todas as interações reais do navegador.

### Evidências

- Commit: a7a95d4
- Arquivos: public/ e tests/interface.test.js

---

## 9. Resultado consolidado dos testes

Na última execução registrada em ambiente Docker, o projeto apresentou:

- 8 suítes aprovadas;
- 47 testes aprovados;
- 0 testes com falha;
- 100% de aprovação da suíte automatizada executada.

Esse resultado demonstra o atendimento aos cenários testados,
mas não garante a ausência de todos os defeitos possíveis.

---

## 10. Limitações e riscos remanescentes

Foram identificadas as seguintes limitações:

- O SQLite nativo utilizado no Node.js 24.11.1 apresenta aviso
  de funcionalidade experimental.
- Permanecem alertas de segurança na árvore de dependências
  de desenvolvimento, que exigem acompanhamento.
- A aplicação não implementa autenticação ou segregação de dados
  entre usuários.
- Os testes automatizados da interface verificam arquivos servidos
  pelo Express, enquanto a interação completa foi validada manualmente.
- A solução foi desenvolvida para o escopo simplificado de uma agenda
  virtual, sem sincronização com calendários externos.

## 11. Conclusão

A Entrega 2 permitiu evoluir a solução inicial para uma aplicação
web com operações de compromissos e tarefas, cronograma por data,
persistência SQLite e execução padronizada em Docker.

Os refinamentos realizados fortaleceram a validação das entradas,
a confiabilidade dos testes e a reprodutibilidade do ambiente.

As decisões técnicas e alterações na especificação foram registradas
no SDD atualizado, permitindo rastrear a evolução do projeto.
