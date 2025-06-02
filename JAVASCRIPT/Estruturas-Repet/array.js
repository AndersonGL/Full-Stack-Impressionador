// Utilizando  a estrutura de repetição IF, ELSE IF E ELSE

const usuario = { nome: "Daniel", idade: 29, time: "Fluminense" };
const mensagemDeBoasVindas1 = "Bem vindo, torcedor Tricolor!";
const mensagemDeBoasVindas2 = "Bem vindo, torcedor Rubro-Negro!";
const mensagemDeBoasVindas3 = "Bem vindo,amante do esporte!";
if (usuario.time === "Fluminense") {
  console.log(mensagemDeBoasVindas1);
} else if (usuario.time === "Flamengo") {
  console.log(mensagemDeBoasVindas2);
} else {
  console.log(mensagemDeBoasVindas3);
}

const mensagemDeEscolha =
  "Clique no setor para o qual deseja comprar seu ingresso!";
const mensagemFinal = "Divirta-se no Maracanã!!!";
