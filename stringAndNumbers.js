// Transformando String em N�meros e N�meros em String //
let string = "29";
console.log(Number(string));

let number = 352;
console.log(String(number));

// Contar quantos caracteres tem uma palavra e quantos digitos tme um n�mero
let palavra = "Funda��o Sa�de";

console.log(palavra.length)

let numero = 15000;
console.log(String(numero).length);


// Transformar um numero quebrado com duas casas decimais e trocar ponto por virgula
let number1 = 453623.2351;
console.log(number1.toFixed(2).replace(".", ","));


// Transformar letras minuscula em maiusculas. Fa�a contr�rio disso tamb�m. 
let palavra1 = "Documentacao";
console.log(`antes de ser manipulada: ${palavra1}`)
console.log(`Colocando todas as letras em maiusculo: ${palavra1.toUpperCase()}`);
console.log(`Colocando todas as letras em minusculo: ${palavra1.toLowerCase()}`);