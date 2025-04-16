// Exercício 1

let produtos = ["Celular", "Tablet", "Computador"];

console.log(produtos[1]);

produtos[2] = "Notebook"; // OBS NÃO PRECISO DECLARAR O LET NOVAMENTE, POIS O PRODUTOS JÁ FOI DECLARADO ANTES.

console.log(produtos); // Celular, Tablet, Notebook

// Exercício 2

let clientes = ["Anderson", "Lucas", "João"];
//clientes[3] = "Pedro";
console.log(clientes); // Anderson, Lucas, João, Pedro

clientes[clientes.length] = "Maria"; // Adiciona o cliente "Maria" na última posição do array
console.log(clientes); // Anderson, Lucas, João, Pedro, Maria

// Remove o cliente "João" do array
clientes.length = clientes.length - 1; // Remove o último cliente do array
console.log(clientes);

// array atualizado

// Exercicio 3

// criar um objeto com 3 propriedadea

let produto = {
  nome: "Televisão",
  preco: 1500,
  quantidde: 10,
};

console.log(produto.nome); // Anderson
console.log(produto["quantidde"]); // 10

// atualizar o nome do produto

produto.preco = 1600;
//produto["preco"] = 1600; 
console.log(produto); // 1600




// Exercicio 4

let venda = {
  cliente: "Carlos",
  produto: "Notebook",
  valor: 2500,
};


console.log(venda); // Carlos, Notebook, 2500

venda.data = "18-07-2024"; // Adiciona a propriedade data ao objeto venda
// venda["data"] = "18-07-2024";
console.log(venda); // Carlos, Notebook, 2500, 18-07-2024

//remove a propriedade produto do objeto venda

delete venda.produto; // Remove a propriedade produto do objeto venda
console.log(venda); // Carlos, 2500, 18-07-2024



// Exercicio 5


// array de objetos

let estoque = [ "Website", "Aplicativo", "Sistema" ];

let novoEstoque = [...estoque]; // Cria uma cópia do array estoque

novoEstoque[2] = "Televisão";
console.log(novoEstoque); // Website, Aplicativo, Televisão
console.log(estoque); // Website, Aplicativo, Sistema


let funcionario = [
  nome = "Anderson",
  cargo = "Vendedor",
  salario = 2000,
];

let novoFuncionario = [...funcionario]; // Cria uma cópia do array funcionario
novoFuncionario.cargo = "Gerente"; // Atualiza o cargo do funcionário no array novoFuncionario
console.log(novoFuncionario); // Anderson, Pedro, João
console.log(funcionario); // Anderson, Lucas, João  