//Mostrar tabuada de um número(Use o for)

var prompt = require('prompt-sync')();

soma = Number(prompt("Escolha Um Número Positivo: "))

for(var i = 1; i <= 10; i++){
    resultado = (soma * i);

    console.log(soma + " x " + i + " = " + resultado);
}