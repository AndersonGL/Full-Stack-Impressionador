//Exercício 1: Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras
//maiúsculas.


//Exemplo de Saída: // “JAVASCRIPT é divertido”


let texto = "javascript é divertido";
let resultado = texto.replace("javascript", "javascript".toupperCase());
console.log(resultado);    // JAVASCRIPT É DIVERTIDO.toUpperCase()


//Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e,
//em seguida, converta essa palavra para letras minúsculas.
//Exemplo de Saída: // “ aprendendo”


let texto = "Aprendendo JavaScript"

let palavra = texto.split(" ")[0];


console.log(palavra.slice(0));
console.log(palavra.toLowerCase()); //Aprendendo
                                     // aprendendo javascript




//Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por
//“Javascript”.
//Exemplo de Saída: // “Aprendendo Javascript”


let linguaguem = "Aprendendo Python"
let resultado = linguaguem.replace("Python","JavaScript")
console.log(resultado)





//Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de
//produtos e remova o item 'sofá' da lista.
//Exemplo de Saída: “["cadeira", "mesa", "armário"]”





let itens = "cadeira", "mesa", "armário", "sofá"; 
let sala = itens.split(",", 3);
console.log(sala)

