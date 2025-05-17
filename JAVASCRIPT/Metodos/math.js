// Math.round(x) - Arrendonda  x para o inteiro ais pr´ximo

let numero = 3.45; // 4 para baixo
let numero2 = 3.5; // 5 para cima

console.log(Math.round(numero));
console.log(Math.round(numero2));

console.log(parseInt(numero));
console.log(parseInt(numero2));

// Math.random() - Rerona um número pseudo-aleatório entre 0 e 1.

// console.log(Math.random());
// console.log(Math.random() * 100);

//const aleatorio = Math.random() * 100;
//console.log(parseFloat(aleatorio.toFixed(2)));

const aleatorio = Number.parseFloat((Math.tandom() * 100).toFixed(2));

console.log(aleatorio);
