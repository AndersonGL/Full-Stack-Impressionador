//Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final,
//remova o primeiro item e exiba o carrinho atualizado.
//Exemplo de Saída: // ['Produto B', 'Produto C']

let produtos = ["Produto A", "Produto B"]
produtos.push("Produto C"); // Adiciona 'Produto C' ao final do array
produtos.shift(); // Remove o primeiro item do array
console.log(produtos); // ['Produto B', 'Produto C']


//Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final
//e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos
//disponíveis.
//Exemplo de Saída: // ['Produto X', 'Produto Y', 'Produto Z', 'Produto A', 'Produto B']

let produtos1 = ["Produto X", "Produto Y"];
let produtos2 = ["Produto A", "Produto B"];
let produtoZ = "Produto Z"; 

console.log(produtos1.push(produtoZ)); // Adiciona 'Produto Z' ao final do array
console.log(produtos1); // ['Produto X', 'Produto Y', 'Produto Z']  
console.log(produtos1.concat(produtos2)); // ['Produto X', 'Produto Y', 'Produto Z', 'Produto A', 'Produto B']
//


//Exercício 3: Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e
//'Agenda' estão presentes no estoque.
//Exemplo de Saída: // true
// false


let produtos3 = ["Caderno", "Lápis", "Estojo"];
 
console.log(produtos3.includes(produtoLapis)); // true
console.log(produtos3.includes(produtoAgenda)); // false


//Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo //menos um dos números é maior
//que 7.
//Exemplo de Saída: // true


let numeros = [2, 5, 8, 1];
let numeroMaiorQue7 = numeros.some(numero => numero > 7); // true   




//Exercício 5: Dado o array [4, 6, 8, 2], verifique se //todos os números são maiores que 3.
//Exemplo de Saída: // false

let numeros1 = [4, 6, 8, 2];
let todosMaioresQue3 = numeros1.every(numero => numero > 3); // false   