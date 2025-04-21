//Exercício 1: Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras
//maiúsculas.


//Exemplo de Saída: // “JAVASCRIPT é divertido”


let texto = "javascript é divertido";
let resultado = texto.replace("javascript", "javascript".toUpperCase());
console.log(resultado);    // J?AVASCRIT é divertido.


//Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e,
//em seguida, converta essa palavra para letras minúsculas.
//Exemplo de Saída: // “ aprendendo”


let texto = "Aprendendo Javascript"
let palavra = texto.substring(0,10).toLowerCase();
console.log(palavra);
                                     // aprendendo javascript




//Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por
//“Javascript”.
//Exemplo de Saída: // “Aprendendo Javascript”


let frase  = "Aprendendo Python";
let palavraExtrair = frase.slice(11);
let fraseNova = frase.replace(palavraExtrair,"JavaScript");
console.log(fraseNova);


//Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de
//produtos e remova o item 'sofá' da lista.
//Exemplo de Saída: “["cadeira", "mesa", "armário"]”



let lista = "cadeira, mesa, sofá, armário";

let array = lista.split(", ");
console.log(array);

array.splice(array.indexOf("sofá"), 1);
console.log(array);


