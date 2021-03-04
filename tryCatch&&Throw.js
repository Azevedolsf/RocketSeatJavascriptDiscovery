
// Throw

function sayMyName( name = '' ) {

    if(name === '') {
        throw 'Nome e obrigatorio';
    }

    return console.log(`O nome e ${name}`);
}

// Try Catch
try{
    sayMyName('Felipe')
}
catch(err) {
    console.log(err)
}

console.log('Apos tentativa');