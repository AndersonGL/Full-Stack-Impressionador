// Diferenças entre métodos e funções


const pessoa = {

  nome: "Anderson",
  saudacao: function(){

return `Olá, ${pessoa.nome}`;
  }
}

console.log(pessoa.saudacao());


// String e Sequência de caracteres


let string = "Ola, mundo!";

console.log(string.toUpperCase());
console.log(string.toLowerCase());


// splice, (start e end)

console.log(string.slice(0,5));  // conta do zero ao 
console.log(string.slice(-6));   // conta de traz 




// substring

console.log(string.substring(0,5));  // conta do zero ao 
console.log(string.substring(-6));   // conta de traz 
console.log(string.substring(7, 3));   // inverte esse valores


// split (delimiter[, limit]);

let texto = "maça, banana, laranja, uvas";
let frutas = texto.split(",")
console.log(frutas);            // ["maça", " banana", " laranja", " uva" 


let texto = "maça, banana, laranja, uva s";
let frutas = texto.split(",",3)     //["maça", " banana", " laranja"]

console.log(frutas)



//  splice (indice, numeroDeItensRemover, item1...)

frutas.splice(3);
console.log(frutas);


// ARRAYS


let frutas = ["maçã","uva","laranja"]

console.log(frutas.indexOf("laranja"));
//podendo adicionar tambem numeros
console.log(frutas.slice(0,1)); //inicio na quantidade dos elementos

console.log(frutas.slice(0,1,10)); //substituir o elemento  inicio na quantidade dos elementos
console.log(frutas) //[ 'maçã', 'uva'


// ARRAYS




