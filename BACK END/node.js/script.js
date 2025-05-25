import { rename } from "node:fs/promises";

const oldName = process.argv[2];
const newName = process.argv[3];

rename(oldName, newName)
  .then(() => console, log(`Arquivo renomeado para ${newName}`))
  .catch(() => console.log(`naõ foi possivel renomear o arquivo ${oldName}`));

// Criar uma pasta package.json

// nome da pasta arquivoTeste.txt para arquivoRenomeado.txt

// testa com node ./script.js
