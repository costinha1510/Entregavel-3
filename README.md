# Entregavel-3

# API Calculadora — Node.js e Express

Projeto desenvolvido para implementar uma API utilizando **Node.js** e **Express**, permitindo realizar operações matemáticas por meio de requisições HTTP e testar os resultados utilizando o **Postman**.

## 📌 Funcionalidades

A API possui quatro operações matemáticas:

* ➕ **Soma**
* ➖ **Subtração**
* ✖️ **Multiplicação**
* ➗ **Divisão**

Cada operação possui uma rota própria.

## 🛠️ Tecnologias utilizadas

* **Node.js**
* **Express**
* **Postman**
* **JavaScript**

## 📂 Estrutura do projeto

```text
entregavel-3/
│
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

> A pasta `node_modules` não deve ser enviada para o GitHub. Utilize um arquivo `.gitignore` contendo `node_modules/`.

## 🚀 Como executar o projeto

### 1. Instalar as dependências

No terminal, dentro da pasta do projeto:

```bash
npm install
```

### 2. Iniciar o servidor

```bash
node index.js
```

O servidor será executado na porta **3001**.

```text
http://localhost:3001
```

## 📮 Testando com o Postman

As operações são realizadas através de requisições **POST**.

### ➕ Soma

**URL:**

```text
http://localhost:3001/soma
```

**Body → raw → JSON:**

```json
{
    "numero1": 10,
    "numero2": 5
}
```

**Resultado esperado:**

```text
15
```
Imagens/soma.png
---

### ➖ Subtração

**URL:**

```text
http://localhost:3001/subtracao
```

**Body → raw → JSON:**

```json
{
    "numero1": 10,
    "numero2": 5
}
```

**Resultado esperado:**

```text
5
```

---

### ✖️ Multiplicação

**URL:**

```text
http://localhost:3001/multiplicacao
```

**Body → raw → JSON:**

```json
{
    "numero1": 10,
    "numero2": 5
}
```

**Resultado esperado:**

```text
50
```

---

### ➗ Divisão

**URL:**

```text
http://localhost:3001/divisao
```

**Body → raw → JSON:**

```json
{
    "numero1": 10,
    "numero2": 5
}
```

**Resultado esperado:**

```text
2
```

## 📋 Rotas da API

| Operação      | Método | Endpoint         |
| ------------- | ------ | ---------------- |
| Soma          | POST   | `/soma`          |
| Subtração     | POST   | `/subtracao`     |
| Multiplicação | POST   | `/multiplicacao` |
| Divisão       | POST   | `/divisao`       |

## 🎯 Objetivo

O objetivo deste projeto é desenvolver uma API básica utilizando **Node.js e Express**, praticando a criação de rotas, recebimento de dados em formato JSON e realização de operações matemáticas através de requisições HTTP.

## 👨‍💻 Autor

**Guilherme Costa**

Projeto acadêmico desenvolvido para fins de estudo.
