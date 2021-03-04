// Manipulando Array //

// Verificar se um texto possui uma palavra especifica

let frase = "amoor"

console.log(frase.includes('amoor'));

// Separar um texto que contém espaços em um novo array, onde cada index possui a divisão do texto

let frase1 = "Alimente-se dos seus sonhos";

let fraseDividida = frase1.split(' ');
console.log(fraseDividida);
let novaFrase = fraseDividida.join('_')
console.log(novaFrase);

// Criar um array com construtor

let myArray = new Array('a', 'b', 'c', 'd')

console.log(myArray);

// Contar elementos de um array

let myArray1 = [1,2,2,3,4];
console.log(myArray1.length);

// transformar uma cadeia de caracteres em um array
let frase2 = "manipulação"
console.log(frase2);
console.log(Array.from(frase2));