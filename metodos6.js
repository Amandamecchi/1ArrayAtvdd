//MÉTODOS ARRAY Aula 14-03-2024
//Método ForEache - Executa uma função para cada item do array
//Sintaxe: array.forEach

//forEache 
//item - mostra informação por informação;// exibi os dados do aluno
//index - mostra a posição que o item está começando do 0;

let alunos = [ 
    {nome: 'Júlia', idade: 15},
    {nome: 'Caio', idade: 16},
    {nome: 'Anna', idade: 12},
    {nome: 'Carlos', idade:18}
]
//Testes:

alunos.forEach(function(item, index,){
    console.log(item)
    console.log(index)
})

alunos.forEach(function(item, index){
    if(item.idade < 18)
    console.log("o alunos ${item.nome}, posição ${index} ainda não atingiu a maior idade")
})