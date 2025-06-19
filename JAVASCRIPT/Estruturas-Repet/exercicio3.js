// JavaScript Impressionador - Módulo 5 - Estruturas
// Condicionais e de Repetição
// Exercícios
// RECURSIVIDADE:



// Exercício 1: Contagem de Itens do Cardápio (Recursivo)
// Você é o gerente de uma lanchonete e deseja contar quantos itens diferentes estão no seu cardápio. Crie uma
// função recursiva em JavaScript que conte quantos itens diferentes existem no cardápio da lanchonete.

const cardapioLanchonete = ["Hámburguer", "Batata Frita", "Refrigerante", "Milkshake", "Hot Dog", "Pizza",]; // 6 elemntos - indice 0 ao 5

function contaItensDoCardapio(cardapio) {
    // 6 -5 -4 ...0
    if (cardapio.length === 0) {
        return 0;

    }else {
        cardapio.pop();
        return 1 + contaItensDoCardapio(cardapio); // 5 - 4 - 3

    }
}

const totalItens = contaItensDoCardapio(cardapioLanchonete)
console.log(`Total de itens no cardápio: ${totalItens}`);




// Exercício 2: Cálculo do Valor Total das Vendas (Recursivo)
// Você é o caixa de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres ao longo de
// um mês. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia do
// mês. Crie uma função recursiva em JavaScript que calcule o valor total das vendas de hambúrgueres no mês.
// FOR IN:


function calcularValorTotalVendas(vendasDiarias, precoPorHamburguer, dia) {
// Condição de parada: Se o dia for maior ou igual ao número de dias no mês  (assumindo 30 dias em um mês),
// retornamos 0 para encerrar a recursão.

if (dia >= vendasDiarias.length) {
return 0;
}

// Calcula o valor das vendas para o dia atual e chama recursivamente para o próximo dia.
const valorVendaDiaAtual = vendasDiarias[dia] * precoPorHamburguer;
const valorVendaProximoDia = calcularValorTotalVendas(
vendasDiarias,
precoPorHamburguer,
dia + 1
);

// Retorna a soma do valor do dia atual com o valor das vendas dos dias
seguintes.
return valorVendaDiaAtual + valorVendaProximoDia;
}
const vendasDiarias = [
20, 15, 25, 18, 22, 30, 28, 24, 27, 23, 19, 21, 26, 17, 16, 29, 31, 14, 20,
22, 18, 24, 25, 30, 28, 27, 29, 26, 21, 17,
];
const precoPorHamburguer = 10;
const totalVendasMes = calcularValorTotalVendas(
vendasDiarias,
precoPorHamburguer,
0
); // Começamos no primeiro dia (dia 0 + 1 = 1).
console.log(
`O valor total das vendas de hambúrgueres no mês é R$${totalVendasMes}`
);







// Exercício 3: Listagem de Itens do Cardápio
// Você é o gerente de uma lanchonete e deseja listar os itens do cardápio para exibição. Os itens do cardápio
// são armazenados em um objeto onde as chaves são os nomes dos itens e os valores são os preços. Crie um
// programa que use um loop for...in para listar todos os itens do cardápio juntamente com seus preços.

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


// Exercício 4: Calcular o Total da Conta
// Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
// cliente. Crie um programa que use um loop for...in para percorrer o pedido do cliente (um objeto com itens e
// quantidades) e calcule o valor total da conta.
// FOR OF:


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



// Exercício 5: Listagem de Itens do Cardápio
// Reutilizando o cardápio da lanchonete armazenado em um array do exercício 1, crie um programa que use
// um loop for...of para listar todos os itens do cardápio.


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


// Exercício 6: Calcular o Total da Conta
// Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
// cliente. Os itens do pedido estão armazenados em um array de objetos, onde cada objeto tem o nome do
// item e a quantidade. Crie um programa que use um loop for...of para percorrer o pedido do cliente e calcule o
// valor total da conta


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

return totalConta;
}
const totalConta = calcularTotalDaConta(cardapio, pedidoCliente);
console.log(`Total da conta: R$${totalConta}`);