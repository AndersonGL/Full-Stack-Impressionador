//console.log("Olá, Mundo!")
//console.log("Bem-vindo  ao nosso curso impressionador")

 // Comentários -atalho - Crtl + ;
 // declaração do tipo +_nomr da variável = informação

// TIPO LET

let mensagem = "OLá Impressionador!";

console.log(mensagem);

// declaração do tpo LET 

let cor = "vermelho";

console.log(cor);

// redeclaração nao é permitida - let cor = "azul";

cor  = "azul"; // reatribuiçã
console.log(cor);

// TIPO CONST
const segundaMensagem = "Bem-vindo ao nosso curso Impressionador!";
console.log(segundaMensagem);

// tipo const - não pode ser redeclarada - ou criada novamente

// nao podemos reatrinuir o valor - segundaMensagem = "Quero trocar a mensagem"; // não pode ser reatribuida




// TIPO VAR 

nome = "Alon";
console.log(nome); // declaração está incorreto

var nome = "Anderson";
console.log(nome);

var nome = "Daniel"; // redeclaramos pode gerar erro
console.log(nome); 

nome = "Lira"
console.log(nome);

// Funçãos - são blocos de código que podem ser reutilizados

function executar() {
    console.log("Dentro da função");
    var numero = 10; // escopo de função
    console.log(numero);
    // retorna o valor da função


executar(); // chamando a função

}

// REGRAS DO JAVASCRIPT

let nomeProduto = "Boné"; // camelCase
let precoProduto = 29.99; // camelCase
let quantidade = 3;

let minhaPrimeiraMensagem = "Olá, Impressionador!"; // camelCase

// const const = "" // não pode usar palavras reservadas

