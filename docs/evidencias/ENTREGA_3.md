# Evidências Técnicas — Entrega 3

## 1. Objetivo

Registrar as evidências de testes automatizados, cobertura de código, auditoria de segurança, execução com Docker, persistência de dados e homologação funcional da versão final da aplicação SolucaoBootcamp3.

Este documento reúne as verificações técnicas realizadas na branch `feature/finalizacao-tecnica`, como preparação para a integração e publicação da versão 1.0.0.

## 2. Testes automatizados

A aplicação foi validada com Jest e Supertest, utilizando testes de API, regras de validação, persistência, isolamento, cronograma e interface.

**Resultados:**

- Suítes executadas: 8
- Suítes aprovadas: 8
- Testes executados: 59
- Testes aprovados: 59
- Testes com falha: 0

**Comando utilizado:**

```bash
npm run test:coverage
```

**Evidência:** `docs/evidencias/logs-entrega3/testes-cobertura.txt`

A mesma suíte de 59 testes também foi executada com sucesso em um container Docker Linux.

## 3. Cobertura de código

A cobertura foi medida pelo Jest sobre os arquivos JavaScript do diretório `src/`.

| Indicador | Cobertura |
|---|---:|
| Instruções | 98,38% |
| Ramificações | 91,26% |
| Funções | 96,66% |
| Linhas | 98,38% |

**Cobertura de linhas por módulo:**

| Módulo | Cobertura |
|---|---:|
| Controllers | 100% |
| Routes | 100% |
| Services | 100% |
| Utils | 100% |
| Database | 90% |
| Inicialização (`src/index.js`) | 88,88% |

As linhas não cobertas da inicialização estão relacionadas ao início direto do servidor, enquanto os testes automatizados importam o aplicativo para utilização com Supertest.

No módulo de banco de dados, parte do caminho de inicialização persistente não é exercitada pelo processo instrumentado de cobertura, pois os testes comuns utilizam SQLite em memória.

A persistência do banco foi verificada separadamente durante a homologação com Docker.

**Evidência:** `docs/evidencias/logs-entrega3/testes-cobertura.txt`

**Relatório HTML local:** `coverage/lcov-report/index.html`

O relatório HTML é gerado automaticamente e não é versionado no repositório.

## 4. Auditoria de segurança

Foi executada uma auditoria das dependências de produção com o npm.

**Comando utilizado:**

```bash
npm audit --omit=dev
```

**Resultado:** nenhuma vulnerabilidade identificada na execução registrada.

Uma vulnerabilidade anteriormente identificada em dependência transitiva foi corrigida por atualização das dependências.

**Evidência:** `docs/evidencias/logs-entrega3/auditoria-seguranca.txt`

## 5. Execução com Docker

A imagem foi construída com sucesso utilizando Node.js 24 Alpine.

**Comandos de validação:**

```bash
docker compose build --no-cache
docker compose run --rm --no-deps -e NODE_ENV=test --entrypoint npm app test -- --runInBand
docker compose up -d --build
```

**Resultados verificados:**

- Construção da imagem concluída.
- Instalação de dependências com `npm ci` concluída.
- 59 testes aprovados dentro do container.
- Servidor iniciado na porta 3000.
- Rota principal da API respondendo corretamente.
- Aplicação acessível pelo navegador.

O arquivo `package-lock.json` foi ajustado para permitir a instalação reproduzível das dependências no ambiente Linux.

## 6. Persistência do banco de dados

A aplicação utiliza SQLite, com arquivo de banco configurado no container em `/app/data/agenda.db`.

O Docker Compose utiliza o volume nomeado `agenda_data`, montado no diretório `/app/data`.

**Cenários homologados:**

1. Criação de compromisso pela API.
2. Consulta do compromisso criado.
3. Reinicialização do container com `docker compose restart app`.
4. Recuperação do mesmo compromisso após a reinicialização.
5. Remoção e recriação do container com `docker compose down` e `docker compose up -d`, sem excluir volumes.
6. Recuperação do mesmo compromisso após a recriação.
7. Exclusão do compromisso temporário.
8. Confirmação de HTTP 404 após a exclusão.

**Resultado:** persistência aprovada após reinicialização e recriação do container.

## 7. Homologação funcional

As funcionalidades principais foram verificadas com requisições HTTP reais à aplicação em execução no Docker.

### 7.1 Compromissos

- Criação de compromisso.
- Consulta de compromisso.
- Exclusão de compromisso.
- Confirmação de HTTP 404 após exclusão.

**Resultado:** aprovado.

### 7.2 Tarefas

- Criação de tarefa.
- Consulta de tarefa por identificador.
- Atualização de status de `pendente` para `em andamento`.
- Filtragem por prazo.
- Exclusão de tarefa.
- Confirmação de HTTP 404 após exclusão.

**Resultado:** aprovado.

### 7.3 Cronograma

Foi consultado o cronograma da data `2026-12-15`, contendo um compromisso e uma tarefa previamente cadastrados.

A resposta apresentou ambos os registros, incluindo o status atualizado da tarefa.

Também foi consultada a data `2026-12-16`, para a qual a API retornou listas vazias de compromissos e tarefas.

**Resultado:** aprovado.

### 7.4 Interface web

A interface disponível em `http://localhost:3000/agenda/` foi verificada manualmente.

Foram conferidas a apresentação dos registros de compromissos e tarefas, a consulta do cronograma e a visualização de uma data sem registros.

Não foram relatados erros durante a verificação visual.

**Resultado:** aprovado.

## 8. Higienização e controle de versão

Foram realizadas verificações de arquivos rastreados, possíveis credenciais expostas, marcadores de desenvolvimento e formatação.

Também foram efetuadas melhorias técnicas:

- Correção de dependências vulneráveis.
- Ampliação dos testes das funções de validação.
- Ampliação dos testes de erro das APIs de compromissos e tarefas.
- Configuração do comando `test:coverage`.
- Exclusão dos relatórios gerados da área de versionamento, por meio do `.gitignore`.
- Correção do lockfile para construção no Docker Linux.

Os arquivos temporários de homologação foram removidos do banco de dados ao final das verificações.

## 9. Conclusão técnica

As verificações realizadas apresentaram resultados satisfatórios para a preparação da versão final da SolucaoBootcamp3.

A suíte de 59 testes foi aprovada tanto no ambiente local quanto no Docker. A cobertura geral de linhas do backend atingiu 98,38%, e os módulos de controllers, routes, services e utils alcançaram 100% de cobertura de linhas.

A auditoria npm não identificou vulnerabilidades de produção na execução registrada. A persistência do SQLite foi confirmada após reinicialização e recriação do container, e as principais funcionalidades da API e da interface foram homologadas.

Os resultados deste documento constituem evidências técnicas para revisão e integração. A aprovação final da release, a consolidação do SDD As-Built e os demais entregáveis finais serão realizados na etapa seguinte do projeto.