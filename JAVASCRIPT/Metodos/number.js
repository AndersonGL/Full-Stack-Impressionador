// Number - valores numéricos - inteiros e ponto flutuante.

let inteiro = 42;
let numeroPontoFlutuante = 3.4567;
let numeroPontoFlutuante2 = 3.4537;

// Verificar se o número é um inteiro - retornar booleano

console.log(Number.isInteger(inteiro)); // true
console.log(Number.isInteger(numeroPontoFlutuante)); //false

// Formatar número de acordo com as casas decimais

console.log(numeroPontoFlutuante.toFixed(2)); // digitos + casas decimais para cima
console.log(numeroPontoFlutuante2.toFixed(2)); // digitos + casas decimais para baixo
console.log(numeroPontoFlutuante2.toFixed()); // padrao 0 casas decimais

// Formatar número preisão específica

console.log(numeroPontoFlutuante.toPrecision(3)); // números digitos que o numeral devera conter.
console.log(inteiro.toPrecision(1)); // Onumero 42 é arredondado e exibido em notação cientifica com 4e+1
//(ou seja , 4 vexes 10 elevado a 1,  que é 40)
console.log(inteiro.toPrecision(2)); // 42
console.log(inteiro.toPrecision(3)); // 42.0
