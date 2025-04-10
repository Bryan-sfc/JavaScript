//Verificar se uma senha digitada está correta

var prompt = require('prompt-sync')();

const SenhaInformada = prompt("Informe a Senha de Acesso: ")

let Senha = 1999;

if (SenhaInformada == Senha){
    console.log("Acesso Liberado, Senha Correta")
} else {
    console.log("Acesso Negado, Senha Incorreta.")
}