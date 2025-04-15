let agora = new Date();
let horaDeBrasilia = agora.toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});

console.log(horaDeBrasilia);

console.log(agora.getFullYear());
console.log(agora.getDay());
console.log(agora.getDate());
console.log(agora.getMilliseconds());
console.log(agora.getMonth());