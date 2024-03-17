//MÉTODOS ARRAY Aula 14-03-2024
//Método: Shift - Remove o primeiro elemento array e retorna esse elemento que foi removido
//Sintaxe:array.shift();

let numbers = [90, 80, 70,60];
//Teste:

let removedElement = numbers.shift();

console.log(numbers);
console.log(removedElement);
//removeu o primeiro número (90) e retornou para o final

let removedElement2 = numbers.shift( 2 );
console.log(removedElement2);
//Removeu o 80 e 90
