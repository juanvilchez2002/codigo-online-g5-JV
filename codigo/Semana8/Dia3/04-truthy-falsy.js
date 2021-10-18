//comparaciones con JS
// == vs ===

// == compra solo el valor
// === compara el valor y el tipo de dato
if(1 == "1"){
    console.log("Es verdura, son iguales");
}else{
    console.log("No son iguales");
}

//truthy - falsy
let meQuiere = undefined;

//falsy: underfined, 0, "", null
//let meQuiere = undefned
//let meQuiere = 0
//let meQuiere = null
//let meQuiere = ""


//truthy: texto, número, objeto, valor son verdaderos
//let meQuiere = "regalo"
//let meQuiere = 98890987

if(meQuiere){
    console.log("Claro");
}else{
    console.log("T-T");
}