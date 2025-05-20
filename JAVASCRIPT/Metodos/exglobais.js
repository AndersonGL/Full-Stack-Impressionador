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

function extrairParteData(dataString) {
  let data = new Date(dataString);
  let ano = data.getFullYear();
  let mes = data.getMonth() + 1; // 0 a 11
  let dia = data.getDate();

  console.log("Ano:", ano);
  console.log("Mes", mes);
  console.log("Dia", dia);
}

//extrairParteData("2025-05-20"); //// fica com a data de ontem
extrairParteData("2025-05-20T00:00:00"); // atualiza a data

// Exercício 6: Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
// idade com base na data atual. Exiba a idade no console.
// Exemplo Entrada: // 1990-05-15
// Exemplo Saída: // Idade: 34
// Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
// Exiba o resultado no console.
// Exemplo Entrada: // 2024-10-07
// Exemplo Saída: // Data formatada no padrão brasileiro: 07/10/2024

function extrairPartesData(dataString) {
  let data = new Date(dataString);
  let ano = data.getFullYear();
  let mes = data.getMonth() + 1; // indices 0 -11
  let dia = data.getDate();

  console.log("Ano: ", ano);
  console.log("Mês: ", mes);
  console.log("Dia: ", dia);
}

// extrairPartesData("2024-10-07");

extrairPartesData("2024-10-07T00:00:00");

// Exercício 6: Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
// idade com base na data atual. Exiba a idade no console.
let dataNascimento = "1990-12-15";
// Idade: 34

function calcularIdade(dataNascimento) {
  let nascimento = new Date(dataNascimento);
  let hoje = new Date(); // data atual

  //Calcular idade com base pela diferença de anos
  let idade = hoje.getFullYear() - nascimento.getFullYear(); // 2024 - 1990 = 34

  // Criar a data do aniversário atual ano
  let aniversarioAtual = new Date(
    hoje.getFullYear(),
    nascimento.getMonth(),
    nascimento.getDate()
  ); //ANO-MES-DIA
  // Calcula diferença em millissegundos e converter em dias
  let diferencaDias = (hoje - aniversarioAtual) / (1000 * 60 * 60 * 24);

  //Ajuste de idade
  let ajuste = (diferencaDias < 0) * 1; // booleano (transformado em numero)
  //   console.log(ajuste);

  idade = idade - ajuste; // 34 - 0; = 34 anos
  // não fez anivsersario esse ano = 34 - 1 = 33;
  console.log("Minha idade é: ", idade);
}

calcularIdade(dataNascimento);

// console.log(1000 * 60 * 60 * 24); // 86400000 millissegundos que 1 dia possui
// timestamp(millissegundos) / millissegundos por dia

// console.log(1000 * 60 * 60 * 24); // 86400000 millissegundos que 1 dia possui
// timestamp(millissegundos) / millissegundos por dia

// Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
// Exiba o resultado no console.

// 2024-10-07 - UTC
// Data formatada no padrão brasileiro: 07/10/2024 - UTC 3

function formatarPadraoBrasileiro(dataString) {
  //Divide a string da data
  let data = new Date(dataString + "T00:00:00");
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();

  const dataFormata = `${dia}/${mes}/${ano}`;
  console.log(`Essa data é formatada: ${dataFormata}`);
}

// formatarPadraoBrasileiro("2024-10-07T00:00:00");

let data1 = "2024-10-07";
let data2 = "2023-08-22";
let data3 = "2024-01-13";

//DINÂMICA
formatarPadraoBrasileiro(data1);
formatarPadraoBrasileiro(data2);
formatarPadraoBrasileiro(data3);

function formatarPadraoMetodoNumber(dataString) {
  //Dividir a string data
  let partesDaData = dataString.split("-");
  //   console.log(partesDaData);

  //Converter para number
  let ano = parseInt(partesDaData[0]);
  let mes = parseInt(partesDaData[1]);
  let dia = parseInt(partesDaData[2]);

  let dataFormata = `${dia}/${mes}/${ano}`; // não é uma Data - O TIPO DADO - não está vindo do Objeto Date.
  console.log(dataFormata + " Por métodos de number e string.");
  //   console.log(dataFormata.getDate());
}

// formatarPadraoMetodoNumber(data1);

function formatarPadraoBrasileiroDate(dataString) {
  let data = new Date(dataString + "T00:00:00");

  let dataFormatada = data.toLocaleDateString("pt-BR");
  console.log("Data formatada no padrão brasileiro: " + dataFormatada);
}

formatarPadraoBrasileiroDate(data1);
formatarPadraoBrasileiroDate(data2);
formatarPadraoBrasileiroDate(data3);
