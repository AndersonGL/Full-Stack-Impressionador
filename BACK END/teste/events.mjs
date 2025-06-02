import { EventEmitter } from "node:events";

const eventEmitter = new EventEmitter();

eventEmitter.addListener("Evento1 Lançado", () =>
  // addListener ou on
  console.log("Escutei o evento1!")
);

eventEmitter.emit("Evento1 Lançado");

// esmodule tenho que troca lá no type: do arquivo package.json para module.

// e no common.js crio um arquivo teste.mjs importo a class e continuo com codigo.
