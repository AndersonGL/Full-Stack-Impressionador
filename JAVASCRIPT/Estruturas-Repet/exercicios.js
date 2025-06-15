// Exercício 1: Verificação de Desconto
// Crie um programa verificaDesconto que verifique se um cliente tem direito a um desconto. Se o valor da
// compra for maior ou igual a R$ 100, o cliente recebe um desconto de 10%. Caso contrário, nenhum desconto
// é aplicado. O programa deve imprimir mensagens que retornem o se o cliente possui ou não o direito de
// retorno e o valor da compra no console.

function verificarDesconto(valorDaCompra) {
    if (valorDaCompra >= 100) {
        console.log("Parabéns! Você tem o direito a um desconto de 10%");
        const valorComDesconto = valorDaCompra = 0.9;
         console.log(`Valor da Compra R$${valorComDesconto}`)
    }else{

 console.log("Desculpe, mas você não tem direito ao desconto")
 console.log(`Valor da Compra R$${valorCompra}`)

    }
}

const valorDaCompra = 180;
verificarDesconto(valorDaCompra);



// Exercício 2: Verificação de Produto em Estoque
// Escreva um programa verificarEstoque que verifica se um produto está em estoque com base na quantidade
// disponível. Se a quantidade disponível for maior que zero, exiba "Produto disponível", caso contrário, exiba
// "Produto esgotado" no console.
// IF / ELSE IF / ELSE:


function verificarEstoque(estoqueDisponivel) {
 
     if (quantidadeEstoque > 0 ) {
        console.log("Produto disponivel")
     }else {

        console.log("Produto esgotado")
     }

     const quantidade = 100;

     verificarEstoque(quantidade);


}



// Exercício 3: Determinação de Categoria de Cliente
// Escreva um programa categoriaCliente que determine a categoria de um cliente com base em sua
// pontuação de fidelidade, que será entre 0 e 100. Se a pontuação for maior ou igual a 85, o cliente é
// categorizado como "Cliente Premium". Se for maior ou igual a 50, é categorizado como "Cliente Regular".
// Caso contrário, é categorizado como "Cliente Comum".



function categoriaCliente(){
   const pontuacaoFidelidade = Math.floor(Math.random() * 101);
    
   console.log(` Sua pontuação de fidelidade é: ${pontuacaoFidelidade}`);


   if(pontuacaoFidelidade>= 85) {
     
   console.log("Cliente Premium")

   }else if(pontuacaoFidelidade >= 50) {

   console.log("Cliente Regular");

   }else{

    console.log("Cliente Comum");

   }
}

categoriaCliente();




// Exercício 4: Classificação de Desempenho de Vendas
// Você está gerenciando uma equipe de vendedores e deseja avaliar o desempenho de cada vendedor com
// base em suas vendas mensais em relação a uma meta estabelecida. Escreva um programa
// desempenhoIndividualDeVendas que determine a categoria de desempenho de um vendedor com base no
// percentual alcançado em relação à meta. As categorias incluem "Excelente Desempenho" (para vendedores
// que alcançaram ou excederam a meta), "Muito Bom Desempenho" (para vendedores com vendas entre 90% e
// 99% da meta), "Bom Desempenho" (para vendedores com vendas entre 80% e 89% da meta), "Desempenho
// Satisfatório" (para vendedores com vendas entre 61% e 79% da meta) e "Desempenho Insatisfatório" (para
// vendedores com vendas abaixo de 60% da meta). Execute o código e informe a categoria de desempenho do
// vendedor com base nas vendas mensais e na meta de vendas estabelecida.
// OPERADOR TERNÁRIO:

function desepenhoIndividualDeVendas(vendasMensais, metasDeVendas) {
  const percentualAlcancado = (vendasMensais / metasDeVendas) * 100;

  if (percentualAlcancado >= 100) {
   return "Excelente Desempenho";
  }else if (percentualAlcancado>= 90 && percentualAlcancado < 100){
   return "Muito Bom Desempenho";
  }else if (percentualAlcancado >= 80 && percentualAlcancado < 90) {
   return "Bom Desempenho";
  }else if (percentualAlcancado >= 61 && percentualAlcancado <80){
   return "Desempenho Satisfat´rio";
  }else {
   return "Desepenho Insatisfatorio";

  }
}

const vendasMensais = 7500;
const metaVendas = 1000;

cosnt categoriaDEsempenho = desempenhoIndividualDeVendas{

   vendasMensais,
   metaVendas
};

console.log(`Categoria de Desempenho: ${categoriaDesempenho}`);


// Exercício 5: Verificação de Velocidade
// Crie uma função chamada verificarVelocidade que recebe a velocidade de um veículo como argumento e
// retorna true se o veículo estiver dentro do limite de velocidade (limite igual ou inferior a 80 km/h) e false caso
// exercicios.md 2023-09-22
// 2 / 2
// contrário, utilizando o operador ternário.






// Exercício 6: Semáforo de Trânsito
// Crie uma função mensagemSemaforo que recebe uma cor de semáforo como argumento (por exemplo,
// "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando a ação a ser tomada com base na cor
// do semáforo. Utilize o operador ternário para determinar a mensagem.
// SWITCH / CASE:






// Exercício 7: Prioridade no Trânsito
// Crie uma função chamada coresDoSemaforo que recebe uma cor de semáforo como argumento (por
// exemplo, "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando se é seguro passar ou se é
// necessário parar.








// Exercício 8: Verificação de Placa de Veículo
// Crie uma função verificarPlaca que recebe o último dígito da placa de um veículo como argumento (um
// número de 0 a 9) e retorna uma mensagem indicando o dia de rodízio em São Paulo, com base no último
// dígito da placa.

