
// Transformar notas escolares

// crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C


// de 90 pra cima - A
// entre 80 - 89 - B
// entre 70 - 79 - C
// entre 60 - 69 - D
// menor que 60 - F


function getScore(score) {

    if(score >= 90){ 
            score = "A";
        }else if(score >= 80 && score < 90){
            score = "B";
        }else if(score >= 70 && score < 80){
            score = "C";
        }else if(score >= 60 && score < 70){
            score = "D";
        }else if(score < 60){
            score = "F";
        }else{
            console.log("Valor invalido ")
        }

        return score;
}

console.log(getScore(75));
