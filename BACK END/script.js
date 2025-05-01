const hhtp = require("http");

// Função para lidar com requisições

const server = http.createServer((req, res) => {
  // Definindo o cabeçalho da resposta comHTML
  res.writeHead(200, {"Content-Type": "text/html"});


// Escrevendo uma resposta simples

res.write("<h1>Olá, Mundo!</h1>");


// Finalizando a resposta

res.end();

});

// Configurando  o servidor para ouvir na porta 3000

server.listen(3000, () => {

console.log("Servidor rodando na porta 3000....")

});


// node script.js

// npm init iniciar um servidor

// npm i  instalar modulos do node

// npm install -g instala o pacote  globalmente

// cd .. voltar uma pasta

//cd "Full-Stack-Hashtag"  retornar para pasta origem sempre lembrar de colocar a pasta 


// CLI AULA 5



