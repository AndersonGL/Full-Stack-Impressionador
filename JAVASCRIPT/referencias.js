// Tipo Referência e Tipo Primitivo



let listaA = [1,2,3];



let listaB = listaA;
listaB[0] = 99;



console.log(listaB); // [99, 2, 3
console.log(listaA); // [1, 2, 3]

//  Primitivos  


let string = "Olá ";
let mensagem = string;
mensagem += "Mundo!";
console.log(mensagem); // Olá Mundo!    
console.log(string); // Olá


let objA = {nome: "Anderson"};
let objB = objA;
objB.idade = 37;
objB.nome = "Anderson Gouveia Lignelli";

console.log(objA); // {nome: "Anderson", idade: 37}
console.log(objB); // {nome: "Anderson", idade: 37}

let listaC = [...listaA]; // Faz uma cópia da listaA
console.log(listaC); // [1, 2, 3]
listaC[3] = 100;

console.log(listaC); // [1, 2, 3, 100]
console.log(listaA); // [1, 2, 3]   


let objC = {...objA}; // Faz uma cópia do objA
objC.corDeCabelo = "preto";
console.log(objC); // {nome: "Anderson", idade: 37, corDeCabelo: "preto"}
console.log(objA); // {nome: "Anderson", idade: 37} 