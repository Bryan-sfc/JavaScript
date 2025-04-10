//Verificar se um número é par ou ímpar

var prompt = require('prompt-sync')();

const Numero = Number(prompt("Informe um Número Maior que 0: "));

if(Numero %2 == 0){
    console.log("Número Informado é Par");
} else if (Numero %2 == 1){
    console.log("Número Informado é Impar");
} else if (Numero < 0) {
    console.log("Número Inválido.");
} else {
    console.log("Informe um Número.");
}