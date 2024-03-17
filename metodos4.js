//MÉTODOS ARRAY Aula 14-03-2024
//Método includes - é utilizado para saber se um array possui determinado valor ou elemento
//Sintaxe: Array.includes()

//Testes:

console.log( [1, 2, 3, NaN].includes( NaN ) ) //poderia ser uma constante,  
//mas o .includes ficou responsável por verificar se 2 está aqui
// True/False 

console.log( [1, 2, 3].includes( 5 ) ) 


//MÉTODOS ARRAY Aula 14-03-2024
//Método Push - Adiciona um ou mais elementos ao final de um array
//Sintaxe: array.push();
let Notas = [5, 8, 5, 7];
//Testes:

Notas.push( 10 );
console.log(Notas);


Notas.push(9, 5, 6);
console.log(Notas);