
// Crie um objeto que possuir� 2 propriedades, ambas do tipo array:

// receitas: [] 
// despesas: []

// Agora, crie uma fun��o que ir� calcular o total de receitas
// e despesas e ir� mostrar uma mensagem se a fam�lia est� com
// saldo positivo ou negativo, seguido do valor do saldo

const family = {
    incomes : [
        2500,
        3600,
        250,
        75,
        63,
    ],
    expenses: [
        200,
        3900,
        2509,

    ]
}


function sum(array) {
    let total =0

    for(i of array){
        total += i;
    }
    return total;
}

function calculateBalance() {
    let incomes = sum(family.incomes);
    let expenses = sum(family.expenses);   

    let familyBalance = incomes - expenses;

    let itsOk = familyBalance >= 0;

    let message = "Negativo";

    if (itsOk) {
        message = "Positivo";
    }

    console.log(`Seu saldo e ${message}: $${familyBalance}`);
}

    calculateBalance();
