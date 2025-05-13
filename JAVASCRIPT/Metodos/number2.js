let flutuanteString = "32.7869";
let inteiroString = "42";


console.log(typeof flutuanteString);

// Converter o valor (geralmente string ) para um número

console.log(typeof Number.parseFloat(flutuanteString));

console.log(Number.parseFloat(inteiroString));



// Coverter  um inteiro para uma String - opcional - base numérica

let numero = 42; // base decimal

console.log(numero.toString());  // base decimal

console.log(numero.toString(10));  // base decimal

console.log(numero.toString(2));  // 42 base binária

console.log(numero.toString(3));  // base octa

// 2- 36 

// Converter uma string para um número inteiro , consierando a base numérica (opcional)

console.log(Number.parseInt(flutuanteString, 16));

console.log(Number.parseInt(inteiroString));

console.log(Number.parseInt(flutuanteString).toFixed(2)); // duas casas após o valor.