//MÉTODOS ARRAY Aula 14-03-2024 
//Método splice() - Altera o conteúdo de uma lista 
//Sintaxe: array.splice (itemn, quantidadeRemovida)

let Nomes = ['Maria', 'João', 'Valentina', 'Enzo'];

//Testes:

Nomes.splice(2, 1); //2= a partir da posição que deseja remover 1= quero remover apenas só 1 elemento
console.log(Nomes); 


Nomes.splice(2, 1, 'Júlia') //removeu Enzo e adcionou Júlia
console.log(Nomes); 
