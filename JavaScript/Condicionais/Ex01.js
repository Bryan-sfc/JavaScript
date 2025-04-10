//Verificar se um número é positivo, negativo ou zero.

var prompt = require('prompt-sync')();

const Numero = prompt("Informe Um Número: ");

if(Numero == 0){
    console.log("O Numero Informado é Zero: " + Numero);
}else if (Numero > 0){
    console.log("O Numero Informado é de Valor Positivo: " + Numero);
}else if (Numero < 0){
    console.log("O Numero Informado é Negativo: " + Numero);
}
