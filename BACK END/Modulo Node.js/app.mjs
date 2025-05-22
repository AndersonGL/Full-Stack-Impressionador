import { totalmem, freemem } from "node:os";

console.log(totalmem() / 1024 / 1024 / 1024);
// 7.148418426513672

console.log(freemem() / 1024 / 1024 / 1024);
// 0.6426811218261719
