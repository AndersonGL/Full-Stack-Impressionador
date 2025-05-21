//import { selectBestCountry as bestCountry } from "./script3.js"; // Esmodules

// let numero = 10;

// function teste(numero) {
//   console.log(numero);
//   return numero;
// }

// teste(numero);

const path = require("node:path");

const pathObj = path.parse(module.filename);

console.log(pathObj);

// const script3 = require("./script3");
// console.log(script3.bestCountry());

// trazendo a palavra Argentina do script3

//console.log(bestCountry());

// npm init - para criar uma pasta package.json
// arquivo principal = main = "script.js",
// COMONJS - só roda no back-end
// ESMODULES  // roda no front end e no back end
