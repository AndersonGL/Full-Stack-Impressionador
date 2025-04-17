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
    let saldo = banco(1000, 60);
    console.log(`Seu saldo é de ${saldo} reais`);

}

main(); // Para continuar você prescisa informar o seu nome parra cadastro! Anderson Gouveia voce foi casadtrado com sucesso! Seu saldo é de 940 reais.