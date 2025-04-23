// Diferenças entre métodos e funções

const pessoa = {
  nome: "Anderson",
  saudacao: function () {
    return `Olá, ${pessoa.nome}`;
  },
};

console.log(pessoa.saudacao());

// String e Sequência de caracteres

let string = "Ola, mundo!";

console.log(string.toUpperCase());
console.log(string.toLowerCase());

// splice, (start e end)

console.log(string.slice(0, 5)); // conta do zero ao
console.log(string.slice(-6)); // conta de traz

// substring

console.log(string.substring(0, 5)); // conta do zero ao
console.log(string.substring(-6)); // conta de traz
console.log(string.substring(7, 3)); // inverte esse valores

// split (delimiter[, limit]);

let texto = "maça, banana, laranja, uvas";
let frutas = texto.split(",");
console.log(frutas); // ["maça", " banana", " laranja", " uva"

let texto1 = "maça, banana, laranja, uva s";
let frutas1 = texto.split(",", 3); //["maça", " banana", " laranja"]

console.log(frutas1);

//  splice (indice, numeroDeItensRemover, item1...)

frutas.splice(3);
console.log(frutas);

// ARRAYS

let produtos = ["Carrinho", "Boneca", "Bola"];

produtos.push("Navio"); //  push adiciona ao final da lista

console.log(produtos);

produtos.unshift("Video Game"); //unshift adiciona ao começo da lista

console.log(produtos);

produtos.pop(); // pop remove o último item da lista
console.log(produtos);

produtos.shift(); // shift remove o primeiro item da lista
console.log(produtos);

// tambem podemo utilizar numbers

let letras = ["d", "g", "a", "h", "b", "c", "e"];
let numeros = [1, 6, 5, 4, 10, 8, 2, 19, 3];

//.sort() ordena a lista em ordem alfabética ou numérica

letras.sort(); // ["a", "b", "c", "d", "e", "g", "h"]
numeros.sort(); // [1, 10, 19, 2, 3, 4, 5, 6, 8]
console.log(letras);
console.log(numeros);

letras.reverse(); // reverter os elementos
console.log(letras); // ["h", "g", "e", "d", "c", "b", "a"]


numeros.reverse(); // reverter os elementos
console.log(numeros); // [8, 6, 5, 4, 3, 2, 19, 10, 1]


// concatena dois ou mais arrays concat 

let mesclaArrays = letras.concat(numeros); // ["h", "g", 
// "e", "d", "c", "b", "a", 8, 6, 5, 4, 3, 2, 19, 10, 1]


