
// Estruturas de repetição (loop)

// FOR

// break - para a execução do loop
// continue - pula a execução do momento

console.log("***FOR***")

for ( let i = 0; i < 10 ; i++ ) {
    
    if ( i === 5 ) {
        continue;
    }
    
    console.log(i);
}

console.log("***WHILE***")

// WHILE

let i = 0;
while( i < 10 ){
    console.log(i)

    i++
}

// FOR OF

console.log("***FOR OF***");
let names = ["Felipe", "Azevedo", "Joao", "Kleber"];

for (let i of names) {
    console.log(i);
}

// FOR IN

console.log("***FOR IN***");

let person = {
    name:"Felipe",
    age: 27,
    adress:{
        city:"Rio de Janeiro",
        uf:"RJ"
    }
}

for (let i in person) {
    console.log(person[i]);
}
    