//Uma escola quer registrar as turmas disponíveis para o turno da manhã.

var prompt = require('prompt-sync')();

let turmasManha = [];

let quantidade = parseInt(prompt("Quantas turmas você quer cadastrar? "));

for (let i = 0; i < quantidade; i++) {
  let turma = prompt("Digite o nome da turma " + (i + 1) + ": ");
  turmasManha.push(turma);
}

console.log();

console.log("Turmas do turno da manhã:");
for (let i = 0; i < turmasManha.length; i++) {
  console.log("- " + turmasManha[i]);
}