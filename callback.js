// function callback //

function sayMyName(name){
    console.log("Antes da reprodução da função");
    name();
    console.log("Depois da reprodução da função");
}
sayMyName(
    () => {
        console.log("Felipe");
    }
);
