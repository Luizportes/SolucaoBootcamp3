# Test Harness

## Objetivo

O Test Harness foi criado para automatizar a validação da API inicial do projeto, verificando o comportamento esperado das rotas e identificando possíveis falhas durante o desenvolvimento.

## Tecnologias

* Node.js
* Jest
* Supertest
* Express

## Estrutura

Os testes automatizados estão localizados no diretório:

```text
tests/
└── index.test.js
```

## Testes realizados

### Teste 1 — GET /

Valida a resposta principal da API.

**Requisição:**

```http
GET /
```

**Resultado esperado:**

* Status HTTP `200`
* Retorno da mensagem esperada pela API

**Resultado obtido:**

Teste aprovado.

### Teste 2 — GET /rota-inexistente

Valida o comportamento da API quando uma rota inexistente é solicitada.

**Requisição:**

```http
GET /rota-inexistente
```

**Resultado esperado:**

* Retorno de erro para uma rota inexistente

**Resultado obtido:**

Teste aprovado.

## Execução local

Para executar os testes localmente, utilize:

```bash
npm test
```

No ambiente Windows com PowerShell, caso a política de execução impeça o comando `npm`, pode ser utilizado:

```powershell
npm.cmd test
```

### Resultado da execução local

```text
PASS tests/index.test.js
  API SolucaoBootcamp3
    ✓ GET / deve retornar 200 e a mensagem esperada
    ✓ GET /rota-inexistente deve retornar erro

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
```

## Execução em ambiente Docker

O projeto possui um `Dockerfile` para padronização do ambiente de execução.

### Construção da imagem

```bash
docker build -t solucaobootcamp3-test .
```

### Execução dos testes no container

```bash
docker run --rm solucaobootcamp3-test npm test
```

### Resultado da execução no Docker

```text
PASS tests/index.test.js
  API SolucaoBootcamp3
    ✓ GET / deve retornar 200 e a mensagem esperada
    ✓ GET /rota-inexistente deve retornar erro

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
```

## Resultado

O Test Harness possui uma suíte inicial de testes automatizados cobrindo:

* comportamento esperado da rota principal;
* tratamento de acesso a uma rota inexistente.

A execução foi validada localmente e também em ambiente Docker, com todos os testes aprovados.
