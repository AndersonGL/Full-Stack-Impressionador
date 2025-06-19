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

let totalDinheiro = 0;
let venda = 0;
while (venda !== -1) {
  // -1 indica o fim das vendas
  venda = parseFloat(prompt("Digite o valor da venda (ou -1 para encerrar):"));
  if (venda !== -1) {
    totalDinheiro += venda;
    console.log(`Dinheiro contado até agora: R$${totalDinheiro.toFixed(2)}`);
  }
}
console.log(`Total de dinheiro no caixa: R$${totalDinheiro.toFixed(2)}`);

// Exercício 4: Entrega de Pedidos Pendentes
// Você é o entregador de uma lanchonete e precisa entregar pedidos até que não haja mais pedidos
// pendentes. Crie um programa que simule a entrega de pedidos até que não haja mais pedidos na lista.
// Estrutura de Repetição - DO...WHILE:

let pedidosPendentes = ["Pedido 1", "Pedido 2", "Pedido 3"];
do {
  const pedido = pedidosPendentes.shift(); // Remove o primeiro pedido da lista
  if (pedido) {
    console.log(`Entregando: ${pedido}`);
  } else {
    console.log("Não há mais pedidos pendentes.");
  }
} while (pedidosPendentes.length > 0);

// Exercício 5: Adivinhe o Número Secreto para Desconto
// Você deseja criar um programa que permite aos clientes da sua lanchonete adivinharem um número secreto
// para ganhar um desconto. Eles podem tentar quantas vezes quiserem, mas só ganharão o desconto quando
// adivinharem o número secreto. Crie um programa que use a estrutura do...while para permitir que os clientes
// tentem adivinhar o número secreto.

let numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número secreto entre 1 e 100
let tentativa;

do {
  tentativa = parseInt(prompt("Adivinhe o número secreto (1 a 100):"));
  if (tentativa < numeroSecreto) {
    console.log("Muito baixo! Tente novamente.");
  } else if (tentativa > numeroSecreto) {
    console.log("Muito alto! Tente novamente.");
  } else {
    console.log("Parabéns! Você adivinhou o número secreto!");
  }
} while (tentativa !== numeroSecreto);

// Exercício 6: Gerenciamento de Estoque de Itens em Falta
// Você é o gerente de uma lanchonete e está verificando o estoque de itens em falta. Crie um programa que
// permita que você insira os itens que estão em falta e os adicione ao estoque até que você decida encerrar o
// processo.

let estoqueEmFalta = [];
let item;

do {
  item = prompt("Digite o nome do item em falta (ou 'sair' para encerrar):");
  if (item.toLowerCase() !== "sair") {
    estoqueEmFalta.push(item);
    console.log(`Item "${item}" adicionado ao estoque em falta.`);
  }
} while (item.toLowerCase() !== "sair");
console.log("Estoque em falta:", estoqueEmFalta.join(", "));
