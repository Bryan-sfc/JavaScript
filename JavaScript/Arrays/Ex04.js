//Um sistema de controle de presença precisa listar os alunos que compareceram à aula.(usando ForEach)

var prompt = require('prompt-sync')();

let AlunosPresentes = [];

let Presenca = [];

let quantidade = parseInt(prompt("Quantos Alunos a Sala Possui? "));

console.log();

for (let i = 0; i < quantidade; i++) {
    Presenca = prompt("Nome do Aluno: ");
    AlunosPresentes.push(Presenca);
}

console.log();

console.log("Alunos Presentes:");
for (let i = 0; i < AlunosPresentes.length;i++){
    console.log("- " + AlunosPresentes[i]);
}
