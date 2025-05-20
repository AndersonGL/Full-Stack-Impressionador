// Exercício 1: Você precisa criar uma função que receba um número decimal e o arredonde de
// três formas diferentes: para baixo, para cima e para o valor inteiro mais próximo. Mostre o
// resultado de cada arredondamento no console.
// Exemplo Entrada: // 7.89
// Exemplo Saída: // Arredondado para baixo: 7
// Arredondado para cima: 8
// Arredondado para o valor mais próximo: 8

const { NEWDATE } = require("mysql/lib/protocol/constants/types");

let num = 7.89;

function arredondarNumeros(numero) {
  let baixo = Math.floor(numero); //Number(parseInt(numero));
  let cima = Math.ceil(numero); //Number(numero.tofixed());
  let arredondaProximo = Math.round(numero);

  console.log(`Arrendondado para baixo: ${baixo}`);
  console.log(`Arrendondado para cima: ${cima}`);
  console.log(`Arrendondado o valor mais proximo: ${arredondaProximo}`);
}

arredondarNumeros(num);

// Exercício 2: Crie uma função que receba uma lista de números e retorne o valor máximo e o
// valor mínimo dessa lista.
// Exemplo Entrada: // 10, 5, 20, 40, 1, 7
// Exemplo Saída: // Valor mínimo: 1
// Valor máximo: 40

let listaNumeros = [10, 5, 20, 40, 1, 7];
// Spread Operation
function encontrarMaxMin(listaNumeros) {
  console.log(`Valor minimo: ${Math.min(...listaNumeros)}`);
  console.log(`Valor máximo: ${Math.max(...listaNumeros)}`);
}
encontrarMaxMin(listaNumeros);

// Exercício 3: Você deve criar uma função que gere três tipos de números aleatórios: um entre 0
// e 1, outro entre 0 e 100, e um número inteiro aleatório entre dois valores específicos. Exiba os
// resultados no console.
// Exemplo Entrada: // 50, 100
// Exemplo Saída: // Aleatório entre 0 e 1: 0.8629821531529918
// Aleatório entre 0 e 100: 42.48780566605361
// Aleatório entre 50 e 100: 63.70589822740784

function gerarNumeroAleatorio(min, max) {
  let zeroAum = Number(Math.random().toFixed(2)); //0 a 1
  let zeroAcem = Math.random() * 100;
  let aleatorioMaxMin = Math.random() * (max - min) + min; // faixa min - max

  console.log(`Aleatório entre 0 e 1: ${zeroAum}`);
  console.log(`Aleatório entre 0 e 100: ${zeroAcem}`);
  console.log(`Aleatório entre ${min} e ${max}: ${aleatorioMaxMin}`);
}

gerarNumeroAleatorio(50, 100);

// Exercício 4: Crie uma função que receba duas datas e calcule a diferença entre elas em dias.
// Exiba o resultado no console.
// Exemplo Entrada: // 2024-01-01, 2024-10-07
// Exemplo Saída: // Diferença em dias entre 2024-01-01 e 2024-10-07: 280

function calcularDiferençaEmDias(dataInicial, dataFinal) {
  let diferencaEmMilisegundos = newDate(dataFinal) - newDate(dataInicial);

  console.log(diferencaEmMilisegundos);
  console.log(`A diferença entre os datas é: ${diferencaEmDias} dias`);
}

calcularDiferençaEmDias("2024-01-01", "2024-10-08");
// Exercício 5: Crie uma função que receba uma data e extraia o ano, mês e dia dessa data.
// Exiba as informações no console.
// Exemplo Entrada: // 2024-10-07
// Exemplo Saída: // Ano: 2024, Mês: 10, Dia: 6

// Exercício 6: Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
// idade com base na data atual. Exiba a idade no console.
// Exemplo Entrada: // 1990-05-15
// Exemplo Saída: // Idade: 34
// Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
// Exiba o resultado no console.
// Exemplo Entrada: // 2024-10-07
// Exemplo Saída: // Data formatada no padrão brasileiro: 07/10/2024
