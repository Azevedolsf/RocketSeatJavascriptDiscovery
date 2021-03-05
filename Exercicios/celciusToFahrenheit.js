// Celsius em Fahrenheit

// Crie uma função que receba uma string em celsius ou
// fahrenheit e faça a transformação de uma unidade para outra

// C = ( f - 32 ) * 5/9

// F = C * 9/5 + 32

function updateDegree(degree) {

    const celsiusExist = degree.toUpperCase().includes('C');
    const fahrenheitExist = degree.toUpperCase().includes('F');

    if(!celsiusExist && !fahrenheitExist) {
        throw new Error('Grau não identificado');
    }

    // Fluxo Principal
    let updateDegree = Number(degree.toUpperCase().replace('F', ''));
    let formula = (fahrenheit) => {
        (fahrenheit - 32) * 5/9;
    }
    let degreeSign = "C";

    // Fluxo alternativo
    if(celsiusExist){
        updateDegree = Number(degree.toUpperCase().replace('C', ''));
        formula = (celsius) => {
            celsius * 9/5 + 32;
        }
        degreeSign = "F";
    }


    return formula((updateDegree) + degreeSign);
    
}

try {
    updateDegree('50f');
} catch (error) {
    console.log(error.message);
}