// Simulador de reprodução de filme

let reproduzido = true;
let entrada = 1; // Simulando entrada do usuário

function reproduzirFilme() {
  console.log("Apertou o play");
}

function pausarFilme() {
  console.log("Filme pausado");
  // Aqui você pode adicionar a lógica para pausar o filme
}

function sairDoFilme() {
  console.log("Saindo do filme");
  // Aqui você pode adicionar a lógica para sair do filme
}

function opcoesConfigurancao(entrada) {
  do {
    console.log("Opcões de configuração: 1- Pausar, 2- Sair");
    console.log(`opção: ${entrada}`);
    // Aqui você pode adicionar a lógica para iniciar o filme
    if (entrada === 1) {
      pausarFilme();
      reproduzido = false; // Simulando que o filme foi pausado
    } else if (entrada === 2) {
      sairDoFilme();
      reproduzido = false; // Simulando que o filme foi encerrado
    } else {
      console.log("Opção inválida, tente novamente.");
      break; // Saindo do loop se a opção for inválida
    }
  } while (reproduzido);
}

// Simulando a reprodução do filme
reproduzirFilme();
opcoesConfigurancao(entrada);
