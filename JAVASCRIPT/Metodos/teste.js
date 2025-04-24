const produto = {
    nome: "Lattop",
    preco: 2500,
    disponibilidade: true,
    emEstoque: 10,
  };
  
console.log(Object.keys(produto)); // retorna as chaves do objeto
  // ["nome", "preco", "diaponibidade"]


console.log(Object.values(produto)); // retorna os valores do objeto
  // ["Lattop", 2500, true] 

console.log(Object.entries(produto)); // retorna as chaves e valores do objeto    

//[
  //  [ 'nome', 'Lattop' ],
  //  [ 'preco', 2500 ],
  //  [ 'disponibilidade', true ]
 // ]


 