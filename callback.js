// function callback //

function sayMyName(name){
    console.log("Antes da reprodu��o da fun��o");
    name();
    console.log("Depois da reprodu��o da fun��o");
}
sayMyName(
    () => {
        console.log("Felipe");
    }
);
