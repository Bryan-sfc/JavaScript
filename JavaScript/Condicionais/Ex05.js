//Verificar se um aluno foi aprovado

var prompt = require('prompt-sync')();

const MediaAluno = Number(prompt("Informe a Média do Aluno: "));

if(MediaAluno >= 7){
    console.log("Aluno Aprovado.")
} else if (MediaAluno >= 5 && MediaAluno < 7){
    console.log("Aluno de Recuperação.")
} else {
    console.log("Aluno Reprovado.")
}