/*
    arreglos -> si se tiene muchos datos, en vez de crear muchas 
    variables, se puede crear un arreglo; estos permiten 
    guardar información en una sola variable pero con 
    el añadido de una posición
*/

let nombres = ["Juan", "Oscar", "Mauro", "Luis", "Ana"];

console.log(nombres[4]);

console.log(`Los nombres de mis alumn@s son ${nombres[0]}`);

//length -> nos idnca la cantidad de elementos que tiene el arreglo
console.log(nombres.length);

let cofre = ["gato", "perro"];

console.log(cofre);

//agregar items al final del arreglo
cofre.push("perrete", "pinguino", "jirafa");
console.log("cofre actualizado ", cofre);