

// FALSY
// Quando um valor � considerado false em contextos onde
// um booleano � obrigat�rio ( condicionais e loops )


// false 
// 0
// -0
// ""
// null
// undefined
// NaN

console.log( NaN ? 'verdadeiro' : 'falso');


// TRUTHY
// Quando um valor � considerado true em contextos onde um
// booleano � obrigat�rio ( condicionais e loops )

// true
// {}
// []
// 1
// 3.23
// "0"
// "false"
// -1
// Infinity
// -Infinity

console.log({} ? "verdadeiro" : "falso");