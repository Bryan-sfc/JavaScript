//Menu simples até o usuário sair(Use o do...While)

var prompt = require('prompt-sync')();

let Resposta;

do{
    console.log("    _________________________")
    console.log("   /        <Menu>          /")
    console.log("  /      1) Atualizar      /")
    console.log(" /        2) Sair         /")
    console.log("/________________________/")
    Resposta = Number(prompt("Escolha sua Resposta: "));
    
    console.log();
    
    console.log("Atualizando...")

    if(Resposta != 2){
        console.log("Resposta Inválida.")
    }
}while(Resposta != 2)

console.log();

console.log("Fechando Programa...")