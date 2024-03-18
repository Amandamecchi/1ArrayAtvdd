//MÉTODOS ARRAY Aula 14-03-2024 
//Método Find() - Vericar ou procurar um valor dentro de um array, 
//sendo que o retorno vai ser do primeiro elemento que satisfazer o teste
// Sintaxe: array.find()


//Testes:

let redesSociais = ["instagram", "twitter", "snapchat", "facebook", "tiktok", "whatsapp"];

let redesSociais2 = redesSociais.find(A => A.startsWith("s"));

console.log(redesSociais2);  



let Roupas = ["blusa", "shorts", "vestido", "saia"];

let Roupa =  Roupas.find(R => R.startsWith("s"));

console.log(Roupa);