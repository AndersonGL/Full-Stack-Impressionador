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

const cardapio = [
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
exibirCardapio(cardapio);

// Exercício 3: Contagem de Dinheiro no Caixa
// Você é o caixa de uma lanchonete e precisa contar o dinheiro recebido até que a última venda do dia seja
// feita. Crie um programa que simule a contagem do dinheiro recebido a cada venda até o fechamento da
// lanchonete.



const cardapio = {
"Hambúrguer": 10,
"Batata Frita": 5,
"Refrigerante": 2,
"Milkshake": 7,
};
function listarItensDoCardapio(cardapio) {
for (const item in cardapio) {
console.log(`${item}: R$${cardapio[item]}`);
}
}
listarItensDoCardapio(cardapio);
listarItensDoCardapio(cardapio);


// Exercício 4: Entrega de Pedidos Pendentes
// Você é o entregador de uma lanchonete e precisa entregar pedidos até que não haja mais pedidos
// pendentes. Crie um programa que simule a entrega de pedidos até que não haja mais pedidos na lista.
// Estrutura de Repetição - DO...WHILE:


const cardapio = {
 "Hambúrguer": 10,
 "Batata Frita": 5,
 "Refrigerante": 2,
 "Milkshake": 7,
};
const pedidoCliente = {
 "Hambúrguer": 2,
 "Batata Frita": 1,
 "Refrigerante": 3,
};
function calcularTotalDaConta(cardapio, pedidoCliente) {
 let totalConta = 0;
 for (const item in pedidoCliente) {
 if (item in cardapio) {
 totalConta += cardapio[item] * pedidoCliente[item];
 }
 }
 return totalConta;
}
const totalConta = calcularTotalDaConta(cardapio, pedidoCliente);
console.log(`Total da conta: R$${totalConta}`);



// Exercício 5: Adivinhe o Número Secreto para Desconto
// Você deseja criar um programa que permite aos clientes da sua lanchonete adivinharem um número secreto
// para ganhar um desconto. Eles podem tentar quantas vezes quiserem, mas só ganharão o desconto quando
// adivinharem o número secreto. Crie um programa que use a estrutura do...while para permitir que os clientes
// tentem adivinhar o número secreto.




function listarItensDoCardapio(cardapio) {
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
listarItensDoCardapio(cardapioLanchonete);




// Exercício 6: Gerenciamento de Estoque de Itens em Falta
// Você é o gerente de uma lanchonete e está verificando o estoque de itens em falta. Crie um programa que
// permita que você insira os itens que estão em falta e os adicione ao estoque até que você decida encerrar o
// processo.


const cardapio = {
"Hambúrguer": 10,
"Batata Frita": 5,
"Refrigerante": 2,
"Milkshake": 7,
};
const pedidoCliente = [
{ nome: "Hambúrguer", quantidade: 2 },
{ nome: "Batata Frita", quantidade: 1 },
{ nome: "Refrigerante", quantidade: 3 },
];
function calcularTotalDaConta(cardapio, pedidoCliente) {
let totalConta = 0;
for (const pedido of pedidoCliente) {
if (pedido.nome in cardapio) {
totalConta += cardapio[pedido.nome] * pedido.quantidade;
}
}
exercicios_gabarito.md 2023-09-26
5 / 5
return totalConta;
}
const totalConta = calcularTotalDaConta(cardapio, pedidoCliente);
console.log(`Total da conta: R$${totalConta}`);