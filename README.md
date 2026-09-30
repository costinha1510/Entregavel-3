# 🧮 API Calculadora — Node.js e Express

Projeto desenvolvido para criar uma API utilizando **Node.js** e **Express**, permitindo realizar operações matemáticas através de requisições HTTP e testar os resultados utilizando o **Postman**.

## 📌 Funcionalidades

A API possui quatro operações matemáticas:

* ➕ Soma
* ➖ Subtração
* ✖️ Multiplicação
* ➗ Divisão

Cada operação possui uma rota própria.

## 🛠️ Tecnologias utilizadas

* Node.js
* Express
* JavaScript
* Postman

## 📂 Estrutura do projeto

```text
Entregavel-3/
│
├── imagem/
│   ├── soma.png
│   ├── subtracao.png
│   ├── multiplicacao.png
│   └── divisao.png
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Como executar

### 1. Instalar as dependências

```bash
npm install
```

### 2. Iniciar o servidor

```bash
node index.js
```

O servidor será executado na porta **3001**:

```text
http://localhost:3001
```

## 📮 Testando no Postman

Todas as operações são realizadas utilizando o método **POST**.

### ➕ Soma

**Endpoint:**

```text
POST http://localhost:3001/soma
```

**Body → raw → JSON:**

```json
{
    "numero1": 10,
    "numero2": 5
}
```

**Resultado esperado:** `15`

#### 📸 Teste no Postman

![Teste da Soma](./imagem/soma.png)

---

### ➖ Subtração

**Endpoint:**

```text
POST http://localhost:3001/subtracao
```

**Body → raw → JSON:**

```json
{
    "numero1": 10,
    "numero2": 5
}
```

**Resultado esperado:** `5`

#### 📸 Teste no Postman

![Teste da Subtração](./imagem/subtracao.png)

---

### ✖️ Multiplicação

**Endpoint:**

```text
POST http://localhost:3001/multiplicacao
```

**Body → raw → JSON:**

```json
{
    "numero1": 10,
    "numero2": 5
}
```

**Resultado esperado:** `50`

#### 📸 Teste no Postman

![Teste da Multiplicação](./imagem/multiplicacao.png)

---

### ➗ Divisão

**Endpoint:**

```text
POST http://localhost:3001/divisao
```

**Body → raw → JSON:**

```json
{
    "numero1": 10,
    "numero2": 5
}
```

**Resultado esperado:** `2`

#### 📸 Teste no Postman

![Teste da Divisão](./imagem/divisao.png)

---

## 📋 Rotas da API

| Operação         | Método | Endpoint         |
| ---------------- | ------ | ---------------- |
| ➕ Soma           | POST   | `/soma`          |
| ➖ Subtração      | POST   | `/subtracao`     |
| ✖️ Multiplicação | POST   | `/multiplicacao` |
| ➗ Divisão        | POST   | `/divisao`       |

## 🎯 Objetivo

O objetivo deste projeto é desenvolver uma API utilizando **Node.js e Express**, praticando a criação de rotas, o recebimento de dados em formato JSON e a realização de operações matemáticas através de requisições HTTP.

Os testes das funcionalidades foram realizados utilizando o **Postman**, com as respectivas evidências apresentadas neste README.

## 👨‍💻 Autor

**Guilherme Costa**

Projeto acadêmico desenvolvido para fins de estudo.
