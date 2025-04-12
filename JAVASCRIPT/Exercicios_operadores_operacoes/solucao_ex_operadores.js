// Exercicio 1

const produto = 200;
const desconto = 40; // R$
const imposto = 12; // R$

precoFinal = produto - desconto + imposto; // R$
console.log(`preço final do produto: R$ ${precoFinal}`); // R$ 172,00       


// Exercicio 2

const produto1 = 100;
const lucroAdicional = 30;
const precoVenda = produto1 + lucroAdicional; // R$ 130,00
console.log(`Preço de venda do produto: R$ ${precoVenda}`);


// Exercicio 3


const orcamento = 250; // R$ 
const aplicarDesconto = 50;
const precoProduto = 300; // R$ 

const valorFinal = precoProduto - aplicarDesconto; 
const dentroDesconto = valorFinal <= orcamento;

console.log(`Preço com o desconto R$ ${valorFinal}`); // R$ 250,00
console.log(`Esta dentro do orçamento: ${dentroDesconto}`)


// Exercicio 4

let quantidadeEstoqueString = "20";
let quantidadeMinEstoque = 20;

// Conversão Explicita

let quantidadeMinima = Number (quantidadeEstoqueString);
console.log(quantidadeMinima);

// verificação de igualdade estrita

let quantidadeSuficiente = quantidadeMinima ===
quantidadeMinEstoque;

console.log(`A quantidade no estoque é suficiente? ${quantidadeSuficiente}`);

// Exercicio 5

// Operadores not e and
 

let produtoDisponivel = true;
let produtoEstoque = 10;
let minEstoque = 15;

let produtoValido = produtoDisponivel >= minEstoque;
let produtoDisponivelEmEstoque = produtoDisponivel &&
produtoValido;
console.log (`O produto está disponivel e tem a quantidade suficiente: ${produtoValido}, E o produto está indisponivel: ${produtoDisponivelEmEstoque}`); 










