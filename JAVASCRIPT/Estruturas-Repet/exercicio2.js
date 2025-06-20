// JavaScript Impressionador - Módulo 5 - Estruturas
// Condicionais e de Repetição
// Exercícios
// Estrutura de Repetição - FOR:

// Exercício 1: Cálculo do Faturamento Semanal
// Você é o gerente de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres em uma
// semana. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia da
// semana. Crie um programa que calcule o valor total das vendas em uma semana.

function calcularFaturamentoSemanal(vendasPorDia, precoPorHamburguer) {
  let faturamentoSemanal = 0;
  for (let i = 0; i < vendasPorDia.length; i++) {
    faturamentoSemanal += vendasPorDia[i] * precoPorHamburguer;
  }
  return faturamentoSemanal;
}

const vendasPorDia = [20, 15, 25, 18, 22, 30, 28];
const precoPorHamburguer = 10;
const faturamentoTotal = calcularFaturamentoSemanal(
  vendasPorDia,
  precoPorHamburguer
);
console.log(`O faturamento total da semana é R$${faturamentoTotal}.`);

// Exercício 2: Listagem do Cardápio Digital
// Você deseja criar um cardápio digital para sua lanchonete. Crie um programa que liste os itens do cardápio
// juntamente com seus preços. Utilize um loop for para percorrer o cardápio e exibi-lo.
// Estrutura de Repetição - WHILE:

const cardapioEx2 = [
  { nome: "Hambúrguer", preco: 10 },
  { nome: "Batata Frita", preco: 5 },
  { nome: "Refrigerante", preco: 3 },
  { nome: "Milkshake", preco: 7 },
];

function exibirCardapio(cardapio) {
  console.log("Cardápio da Lanchonete:");
  for (let i = 0; i < cardapio.length; i++) {
    console.log(`${cardapio[i].nome}: R$${cardapio[i].preco}`);
  }
}
exibirCardapio(cardapioEx2);

// Exercício 3: Contagem de Dinheiro no Caixa
// Você é o caixa de uma lanchonete e precisa contar o dinheiro recebido até que a última venda do dia seja
// feita. Crie um programa que simule a contagem do dinheiro recebido a cada venda até o fechamento da
// lanchonete.

const cardapioEx3 = {
  Hambúrguer: 10,
  "Batata Frita": 5,
  Refrigerante: 2,
  Milkshake: 7,
};
function listarItensDoCardapio(cardapio) {
  for (const item in cardapio) {
    console.log(`${item}: R$${cardapio[item]}`);
  }
}
listarItensDoCardapio(cardapioEx3);
listarItensDoCardapio(cardapioEx3);

// Exercício 4: Entrega de Pedidos Pendentes
// Você é o entregador de uma lanchonete e precisa entregar pedidos até que não haja mais pedidos
// pendentes. Crie um programa que simule a entrega de pedidos até que não haja mais pedidos na lista.
// Estrutura de Repetição - DO...WHILE:

const cardapioEx4 = {
  Hambúrguer: 10,
  "Batata Frita": 5,
  Refrigerante: 2,
  Milkshake: 7,
};
const pedidoClienteEx4 = {
  Hambúrguer: 2,
  "Batata Frita": 1,
  Refrigerante: 3,
};
function calcularTotalDaContaEx4(cardapio, pedidoCliente) {
  let totalConta = 0;
  for (const item in pedidoCliente) {
    if (item in cardapio) {
      totalConta += cardapio[item] * pedidoCliente[item];
    }
  }
  return totalConta;
}
const totalContaEx4 = calcularTotalDaContaEx4(cardapioEx4, pedidoClienteEx4);
console.log(`Total da conta: R$${totalContaEx4}`);

// Exercício 5: Adivinhe o Número Secreto para Desconto
// Você deseja criar um programa que permite aos clientes da sua lanchonete adivinharem um número secreto
// para ganhar um desconto. Eles podem tentar quantas vezes quiserem, mas só ganharão o desconto quando
// adivinharem o número secreto. Crie um programa que use a estrutura do...while para permitir que os clientes
// tentem adivinhar o número secreto.

function listarItensDoCardapioArray(cardapio) {
  for (const item of cardapio) {
    console.log(item);
  }
}
const cardapioLanchonete = [
  "Hambúrguer",
  "Batata Frita",
  "Refrigerante",
  "Milkshake",
  "Hot Dog",
  "Cachorro-Quente",
  "Pizza",
];
listarItensDoCardapioArray(cardapioLanchonete);

// Exercício 6: Gerenciamento de Estoque de Itens em Falta
// Você é o gerente de uma lanchonete e está verificando o estoque de itens em falta. Crie um programa que
// permita que você insira os itens que estão em falta e os adicione ao estoque até que você decida encerrar o
// processo.

const cardapioEx6 = {
  Hambúrguer: 10,
  "Batata Frita": 5,
  Refrigerante: 2,
  Milkshake: 7,
};
const pedidoClienteEx6 = [
  { nome: "Hambúrguer", quantidade: 2 },
  { nome: "Batata Frita", quantidade: 1 },
  { nome: "Refrigerante", quantidade: 3 },
];
function calcularTotalDaContaEx6(cardapio, pedidoCliente) {
  let totalConta = 0;
  for (const pedido of pedidoCliente) {
    if (pedido.nome in cardapio) {
      totalConta += cardapio[pedido.nome] * pedido.quantidade;
    }
  }
  return totalConta;
}
const totalContaEx6 = calcularTotalDaContaEx6(cardapioEx6, pedidoClienteEx6);
console.log(`Total da conta: R$${totalContaEx6}`);
