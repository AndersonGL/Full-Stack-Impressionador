// Classe vc. Instância

class Carro {
  marca = "Toyota";
  modelo = "Corolla";
  ano = 2024;

  ligar() {
    console.log("Carro ligado");
  }
  ssssssssssss;

  desligar() {
    console.log("Carro desligado");
  }

  exibirInformacoes() {
    console.log(`O carro é de modelo: ${Carro.modelo}
     da marca ${Carro.marca}, do ano de ${Carro.ano}`);
  }
}

const carro = {
  modelo: "Corolla",
  marca: "Toyota",
  ano: 2024,
};

console.log(carro);
