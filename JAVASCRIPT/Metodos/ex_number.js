// Módulo 5

// Exercícios - Métodos Nativos - Number

// Lembre-se de que os exercícios podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Exercício 1: Converta valores de texto em números
// Imagine que você tem valores em formato de texto, como "150.50" ou "200px". Seu objetivo é
// convertê-los para números reais.
// Exemplo de Entrada: // "150.50";
// // "200px";
// // "abc";
// Exemplo de Saída: // 150.50
// // 200
// // NaN

const valor1 = "150.50";
const valor2 = "200px";
const valor3 = "abc";

console.log(Number.parseFloat(valor1)); // Converte o número utilçizando o ponto flutuante
console.log(Number.parseInt(valor2)); // Converte 200 (descarta px)
console.log(typeof Number(valor3)); // Retorna um NaN (Não é um número) - tipo de dado é number.'

// Exercício 2: Somar valores numéricos de uma entrada de formulário
// Você recebe dois valores numéricos como string. Converta-os e some-os corretamente.
// Exemplo de Entrada: // "10" e "20.5";
// Exemplo de Saída: // 30.5

const numero1 = "10";
const numero2 = "20.5";

const soma = Number.parseFloat(numero1) + Number.parseFloat(numero2);

console.log(soma); // metodo 1 utilizando o Number

const soma2 = parseFloat(numero1) + parseFloat(numero2);
console.log(soma2); // Não precisando  chamr o objeto global Number.

// Exercício 3: Arredonde valores financeiros
// Você tem um valor financeiro com várias casas decimais e deseja exibi-lo com apenas duas
// casas decimais.
// Exemplo de Entrada: // 1234.56789;
// Exemplo de Saída: // Valor formatado: 1234.57

const valorFinanceiro = 1234.56789;
const valorFormato = valorFinanceiro.toFixed(2);
console.log(`Valor Finnceiro: ${valorFormato}`);
// 1234.57
console.log("Com precisão:" + valorFinanceiro.toPrecision(6)); // Outra Forma mesmo valor:  1234.57

// Exercício 4: Ajustar a precisão de um número
// Você tem um número muito grande e precisa exibi-lo com uma precisão específica.
// Exemplo de Entrada: // 12345.6789;
// Exemplo de Saída: // Valor com precisão: 1.235e+4

const valorGrande = 12345.6789; //Exibir com 4 dígitos no total
const valorComPrecisão = valorGrande.toPrecision(4);
console.log(`Valor com precisão é: ${valorComPrecisão}`);
// 1.235e+4
console.log("Com fixed:" + valorGrande.toFixed()); // padrão 0 casas decimais

// Exercício 5: Verificar se a entrada é um número válido
// Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de
// realizar qualquer operação.
// Exemplo de Entrada: // "123abc";
// Exemplo de Saída: // "A entrada não é um número válido."

const entrada = "123abc";
const entradaValida = "123";

//NaN - IsNan (true /false)
const entradaConvertida = Number(entrada);
const entradaValidaConvertida = Number(entradaValida);
// console.log(entradaConvertida);
// console.log(entradaValidaConvertida);

console.log(
  Number.isNaN(entradaConvertida) + " Entrada innválida valor não é um número"
); // NaN - entrada inválida = true
console.log(
  Number.isNaN(entradaValidaConvertida) + " Entrada válida número correto"
); // 123 - entrada válida - false

// Segunda forma

console.log(Number.isNaN(entradaConvertida) === false); //false (entrada inválida);
console.log(Number.isNaN(entradaValidaConvertida) === false); // true (entrda é verdadeira)

// Exercício 6: Verificar se o número é finito
// Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos.
// Exemplo de Entrada: // 1 / 0;
// // NaN ou “abc”;
// Exemplo de Saída: // ""O número é infinito ou não é um número."

const numero = 1 / 0;
const notNumber = NaN;
const string = "abc";

const valorValido = 123;

console.log(numero); // infity
console.log(notNumber); // NaN
console.log(string); // abc

console.log(Number.isFinite(numero)); //false
console.log(Number.isFinite(notNumber)); //false
console.log(Number.isFinite(string)); //false
console.log(Number.isFinite(valorValido)); //true
console.log(isFinite(valorValido)); // true
