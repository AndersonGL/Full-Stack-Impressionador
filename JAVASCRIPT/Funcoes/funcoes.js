//function saudacao(nome) {
// console.log(`Olá ${nome}, bem vindo ao nosso site!`)

//}

//saudacao("Anderson");

// function nomeFuncao() { instrução } - Sintaxe Basica uma função

function enviarMensagem() {
  console.log(
    "Para continuar você precisa informar o seu nome parra cadastro!"
  );
}

//enviarMensagem();  // Para continuar você prescisa informar o seu nome parra cadastro!

// Casdastro usuario

function cadastroUsuario(nome, sobrenome) {
  console.log(`Olá ${nome} ${sobrenome} voce foi casadtrado com sucesso!`);
}

//cadastroUsuario("Anderson", "Gouveia");  // Anderson Gouveia voce foi casadtrado com sucesso!

// Verificar saldo em conta

function banco(deposito, saque) {
  let saldo = deposito - saque;
  return saldo;
}

//console.log(banco(1000, 60));   // 940

// function principal

function main() {

    enviarMensagem();
    cadastroUsuario("Anderson ","Gouveia");
    let saldo = banco(1000, 780);
    console.log(`Seu saldo é de ${saldo} reais`);

}

main(); // Para continuar você prescisa informar o seu nome parra cadastro! Anderson Gouveia voce foi casadtrado com sucesso! Seu saldo é de 940 reais.

-----------------------------------------------------------------------------------------------------------------------------------------------------------


// Parâmetros e Argumentos
// function nome funcao(PARAMÊTRO) {Instrução}
// nomeFunction (Argumento) - Chamada da função (Executa o bloco de instruções)



function soma(numero1, numero2){



console.log(numero1 + numero 2);



}



soma(10, 5);





function calcularPrecoTotal(precoUnitario , quantidade) {



   let total = precoUnitario + quantidade;



console.log("O total da sua compra é: " + total);



}



let camiseta = 30;

let quantidadeItem = 3;



calcularPrecoTotal (camiseta , quantidadeItem);


calcularTotal();



----------------------------------------------------------------------------------------------------------------
// RETORNO DE UMA  FUNÇÃO

let pedido = {
id : 1234,

nome : "João",

email : "joao@exemplo.com",

batataFrita : 6,

suco : 4,



};


function enviarNotificacao(nome, idPedido, email) {



console.log(`Enviando email para ${email} confirmado o pedido de número  ${idPedido}`)

console.log(`Mensagem: ${nome} pedido confirmado`);

}

enviarNotificacao(pedido.nome, pedido.id, pedido.email);













