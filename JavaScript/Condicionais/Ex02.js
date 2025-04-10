//Verificar se o usuário pode tirar carteira de motorista

var prompt = require('prompt-sync')();

const Idade = Number(prompt("Informe sua Idade: "));

if(Idade >= 18){
    console.log("Você Pode Tirar sua Carteira :)")
} else if(Idade <= 0){
    console.log("Informe uma Idade Válida.")
} else if (Idade < 18) {
    console.log("Você Não Pode Tirar Sua Carteira :(")
}