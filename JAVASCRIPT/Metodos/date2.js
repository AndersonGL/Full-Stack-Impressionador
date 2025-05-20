const dataAtual = new Date();
console.log(dataAtual.getFullYear()); // ano atual
console.log(dataAtual.getMonth()); // mes atual - 0 a 11 (0 será  Janeiro e 11 - Será Dezembro)
console.log(dataAtual.getDate()); // dia atual
console.log(dataAtual.getHours()); // hora atual
console.log(dataAtual.getMinutes()); // minutos atuais
console.log(dataAtual.getSeconds()); // segundo atuais

console.log(dataAtual);

// timestamp - representação numérica - data referência 1 de janeiro
//de 1970

let timestamp = dataAtual.getTime();
//console.log(dataAtual);
//console.log(timestamp);
// timestamp - representação numérica - data referência 1 de janeiro
//d
//console.log(New Date(172988332187));
//consollog(New Date(172988378522));

let agora = new Date("2024-10-07");
console.log(agora);
