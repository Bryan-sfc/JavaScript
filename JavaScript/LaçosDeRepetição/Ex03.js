//Verificar senha com tentativa até acertar(Use o While)

var prompt = require('prompt-sync')();

let SenhaInformada;

let Senha = "123abc";

while(SenhaInformada != Senha){
    SenhaInformada = prompt("Informe a Chave de Acesso: ");

    console.log("Senha Incorreta, Tente Novamente.");
}

console.log("Senha Correta, Acesso Liberado.");