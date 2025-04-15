//.length() -> tamanho

// let frutas = ["Maçã", "Banana", "Kiwi", "Carambola", 
//     "Morango", "Ameixa", "Abacaxi", "Abacate", 
//     "Jabuticaba", "Romã", "Seriguela", "Embu", "Caqui", 
//     "Uva Verde", "Uva Roxa"
// ];

// console.log(frutas.length);

// let numeros = [20,5,3]

// console.log(numeros.length);

//----------------------------------------------------------

//.reverse() ->  reverter o nosso array

// let numeros = [70, 100, 120, 1000];
// numeros.reverse();

// console.log(numeros);

//----------------------------------------------------------

// let nomes = ["Valdemir", "Edson", "Anna", "Messi"];

//.push() -> Adiciona no final
// nomes.push("Matheus");

//unshift() -> Adiciona no inicio
// nomes.unshift("Sophia");

//.pop() -> Remover no final
// nomes.pop();

//.shift() -> Remove no inicio
// nomes.shift();

//.splice -> Adiciona ou remove elementos do array
// console.log(nomes.splice(2,1));

// console.log(nomes);

//----------------------------------------------------------

// let nomesAnimais = ["Julie", "Meg", "Mel", "Kiara", " Lola", "Sol"];

// //.includeS() -> Se existe no array, se ecsistir ele retornará true
// console.log(nomesAnimais.includes("Kiara"));

//----------------------------------------------------------

// let valores = [30,55,90,66];

// //Quero os valores maiores que 50
// const maiores = valores.filter(num => num > 50);

// console.log(maiores);

//----------------------------------------------------------

// //map.() -> Definição: Método usado em arrays que permite
// // transformar os elementos do array original em novos valores, 
// // criando um novo array, sem modificar o original.

// //1.Lista de Nomes de Alunos e Notas
// let alunos = [
//     {nome: "Clara", nota: 8},
//     {nome: "Laura", nota: 10},
//     {nome: "Hiohanna", nota: 9},
//     {nome: "Isabelle", nota: 6},
//     {nome: "Isaac", nota: 7},
//     {nome: "Sillas", nota: 10},
//     {nome: "Richard", nota: 8},
//     {nome: "Bryan", nota: 8}
// ];

// //Lista de Nomes:
// let alunoNomes = alunos.map(aluno => aluno.nome);

// //Função:
// let alunoNomesDois = alunos.map(function(aluno){
//     return aluno.nome;
// });

// let alunoNota = alunos.map(aluno => aluno.nota)

// console.log(alunoNomes);
// console.log(alunoNomesDois);
// console.log(alunoNota);

//----------------------------------------------------------


// // 2.Criar um array com mensagens personalizadas
// let nomes = ["Caio", "Dani", "Ryan", "Vinicius"];

// //Olá Caio
// //Olá Dani

// let mensagem = nomes.map(itemDoArrayNomes => `Olá, ${itemDoArrayNomes}`);

// console.log(mensagem);

//----------------------------------------------------------

// // 3.Pegar apenas os primeiros caracteres de nomes

// let nomes = ["Isabelly", "Emilly", "Machado", "Guilherme"]

// let inicialNomes = nomes.map(Element => Element[0]);

// console.log(inicialNomes);

//----------------------------------------------------------

let emails = [
    "kaue@gmail.com", "pedro@hotmail.com", "julia@outlook.com"
]

let dominios = emails.map(element => element.split("@")[1]);
let dominios2 = emails.map(element => element.split("@")[0]);

console.log(dominios);
console.log(dominios2);