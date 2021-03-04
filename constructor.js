// Function Constructor //

// O this dentro da construtora sempre referencia o objeto instanciado
function User(name){
    this.name = name;
}

// Felipe é objeto instanciado
const filipe = new User("Filipe");
console.log(filipe);

const joao = new User("João");
console.log(joao);
