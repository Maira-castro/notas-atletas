# 📊 Pontuação dos Atletas

## 📌 Descrição do Projeto

Este projeto foi desenvolvido como parte do **Projeto de Certificação 1** e tem como objetivo calcular a **média válida das notas de atletas** em uma competição de ginástica artística.

Cada atleta recebe **cinco notas** de jurados diferentes. De acordo com as regras da competição, a **maior e a menor nota são descartadas**, e a média é calculada com base **nas três notas restantes**.

---

## 🧠 Regras de Avaliação

- Cada atleta recebe **5 notas**
- As notas variam de **1 a 10**
- A **menor** e a **maior** nota são desconsideradas
- A média final é calculada com as **3 notas do meio**

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript**
- **Node.js** (para execução do arquivo)

---

## 📥 Entrada de Dados

Os dados dos atletas são representados por um array de objetos:

```js
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];
```
---
## 📤 Saída Esperada

A aplicação exibe no console o nome do atleta, as notas ordenadas e a média válida:
```
Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 9.253333333333334
```

## ▶️ Como Executar o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/Maira-castro/notas-atletas.git
   ```
2. Acesse a pasta do projeto:
    ```Bash
     cd notas-atletas
    ```
3. Execute o arquivo:
    ```Bash
    node notas-atletas.js
    ```

## 📂 Estrutura do Projeto
```
notas-atletas/
│
├── notas-atletas.js  # Lógica principal do projeto
└── README.md         # Documentação
````