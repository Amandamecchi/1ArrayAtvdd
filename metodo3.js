//MÉTODOS ARRAY Aula 14-03-2024
//Método Slice -  Copia a de parte que voce definiu de um array, sem mudar o array original.
//Sintaxe: array.slice(inicio, fim)

Sorvetes = ['Caramelo', 'Morango', 'Chocolate', 'Milho', 'pistache'];

//Testes:

resultado = Sorvetes.slice(- 2); //Com número negativo a contagem se inicia da direita para a esquerda 
console.log(resultado);

resultado = Sorvetes.slice(1, 4);
console.log(resultado);