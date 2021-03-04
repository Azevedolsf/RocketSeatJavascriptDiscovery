// Switch

function calculator(number1, number2, operator) {

    let result = 0
    switch(operator) {
        case '+':
            result = number1 + number2;
            break
        case '-':
            result = number1 + number2;
            break;
        case '*':
            result = number1 + number2;
            break
        case '/':
            result = number1 + number2;
            break;
        default:
            console.log('Não Implementado');
            break;
    }

    return result;
}

console.log(calculator(5, 6, "+"));


