/*
    for(contador; condicional; actualización_contador){
        código que se va a repetir
    }
*/
for(let i=0; i<=10; i++){
    console.log(`El contador es: ${i}`);
}

console.log("Yo estoy al final");

//usando un arreglo
let ropa =["Bufanda", "Camisa", "Guantes", "Jeans"];

for(let i=0; i<ropa.length; i++){
    console.log(`Ropa ${i+1}: ${ropa[i]}`);
}222

/*

*/

let carta = ["ceviche", "pollo a la bassa", "costillar", "adobo", "caldo de gallina"];

let eleccion = +prompt("0. Ceviche \n1. Pollo a la Basa \n2. Costillar \n3. Adobo \n4. Caldo de gallina");

for(let i=0; i<carta.length; i++){
    if(eleccion == i){
        console.log(`Ud. a elegido: ${carta[i]}`);
    }
}