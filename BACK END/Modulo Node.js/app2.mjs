// Fazendo a leitura da receita de bolo

import { readFile } from "node:fs/promises";

async function readTextFile(filePath) {
  try {
    const recipe = await readFile(filePath, { encoding: "utf-8" }); // passando o encoding para traformar de leitura binaria para read string.
    console.log(recipe);
  } catch {}
  console.error("Erro ns leitura do arquivo");
}

readTextFile("./receita.txt");
