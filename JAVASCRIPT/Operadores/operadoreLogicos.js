// && (AND) - ambas as condiççoes são verdadeiras

let idade = 20;
let codigoPromocional = true;


let idade2 = 17;

// Verificação se o usuário tem idade suficiente e possui um código.

let podeFazerLogin= idade >= 18 && codigoPromocional; //true

console.log(podeFazerLogin);


let podeFazerLogin2= idade2 >= 18 && codigoPromocional; //false
console.log(podeFazerLogin2);

// || (OR) - uma das condiççoes é verdadeira  


let loginOr =   idade >= 18 || codigoPromocional; //true
console.log(loginOr);

let loginOr2 = idade2 >= 18 || codigoPromocional; //true
console.log(loginOr2);




// ! (NOT) - inverte o valor booleano


let perfilConfigurado = false;

// Verifica se o perfil não está configurado

let alerta = !perfilConfigurado; //true
console.log(alerta);