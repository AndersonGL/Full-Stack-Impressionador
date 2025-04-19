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
