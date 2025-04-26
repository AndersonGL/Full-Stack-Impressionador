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

// ARRAYS indexOf, slice, splice, unshift, push, pop, shift

let frutas10 = ["maçã", "uva", "laranja"];

console.log(frutas.indexOf("laranja"));
//podendo adicionar tambem numeros
console.log(frutas.slice(0, 1)); //inicio na quantidade dos elementos

console.log(frutas.slice(0, 1, 10)); //substituir o elemento  inicio na quantidade dos elementos
console.log(frutas); //[ 'maçã', 'uva'

// ARRAYS Includes

let frutas11 = ["maçã", "uva", "laranja"];

console.log(frutas11.includes("laranja")); //true
console.log(frutas11.includes(50)); //false

// ARRAYS every e some
// every verifica se todos os elementos atendem a condição

console.log(
  frutas11.every(function (frutas11) {
    return frutas11.includes("u");
  })
);
console.log(
  frutas11.some(function (frutas11) {
    return frutas11.includes("m");
  })
);

// join

let frutas12 = ["maçã", "uva", "laranja"];

console.log(frutas12.join(" - ")); //maçã - uva - laranja

// Propriedades

const objeto = {
propriedade: 10,
 metodos : function () {
   console.log("Olá eu sou um método");
}
}

console.log(objeto.propriedade); //10
objeto.metodos(); //Olá eu sou um método

const string1 = "Ola, mundo!";
console.log(string1.length); // 11  length conta os caracteres da string

const array = [1, 2, 3, 4];
console.log(array.length); // 4 length conta os elementos do array


// METODOS NATIVOS 

const produto = {
  nome: "Lattop",
  preco: 2500,
  diaponibidade: true
};

Object.keys(produto); // retorna as chaves do objeto
// ["nome", "preco", "diaponibidade"]



// Metodos Nativos

const pessoa1 = {
  cidade: "Rio de Janeiro",
  surf: true,

  falar: function() {console.log("Olá")}

}

const carro = {

  modelo : "Corolla",
  marca : "Toyota",


}

const joao = Object.create(pessoa1); //  Herdar de um objeto
Object.assign(joao, carro)          // Copiar as propiriedades
joao.falar();
console.log(joao.cidade, joao.surf);
joao.nome = "João";  // Propriedade Nome
joao.idade = 30;     // Propriedade Idade

console.log(joao);


console.log(joao.hasOwnProperty("marca"))  // true

console.log(joao.hasOwnProperty("surf"))  // false



// Objetos Personalizados 

const calculadora = {


valor1: 0,
valor2: 0,

definirValores :  function (v1, v2 ) {

  calculadora.valor1 = v1;
  
  calculadora.valor2= v2;
},

somar: function()  { 
   return calculadora.valor1 + calculadora.valor2;
},


subtrair: function()  { 
  return calculadora.valor1 - calculadora.valor2;
},


multiplicar: function()  { 
  return calculadora.valor1 * calculadora.valor2;
},



dividir: function()  { 
  return calculadora.valor1 / calculadora.valor2;
},

}

//exemplo de uso

calculadora.definirValores(20, 5);
console.log(calculadora.somar());
console.log(calculadora.subtrair());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());

calculadora.exponenciacao = function () {

  return this.valor1 ** this.valor2;
};

console.log(calculadora.exponenciacao());

 


