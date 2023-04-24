# Cypress Web Tests

Este repositório contém testes automatizados de interface de usuário usando o framework Cypress.

## Pré-requisitos

Antes de executar os testes, verifique se você tem as seguintes ferramentas instaladas em seu sistema:

- Node.js (versão 12 ou superior)
- NPM ou Yarn (recomendo NPM)


## Instalação

Clone este repositório em seu computador usando o comando:

```bash
git clone https://github.com/DolAndi/cypress-web-tests.git
```

Instale as dependências do projeto usando NPM:

```bash
npm install
```

Instale o Cypress:

```bash
npm i -D cypress
```

## Rodando os testes

Para rodar os testes em modo headless, rode o seguinte comando:

```bash
  npm run cy:ui-regression
```

Para rodar em modo janela:

```bash
  npm run cy:open
```
