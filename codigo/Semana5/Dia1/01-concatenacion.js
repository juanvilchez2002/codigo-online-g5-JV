let a = 1;

let b = "4"; //string

let c = a+b;
console.log(a+b);
console.log(typeof c); //lo convierte en un string x el tipado dinamico

let nombre = "Juan ";
let apellido = "Vilchez";

console.log(nombre+apellido); // concatenación

//Template String - Template Literal  ` `
//Backticks ``
//${aca adentro, podemos poner código JS}
//esto me permite hace saltos de lineas
let texto = `Hola soy ${nombre}`;

console.log(texto);

let texto2 = `Holo soy ${nombre} ${apellido} y 
    soy de Lima`

console.log(texto2);

//Promt, permite capturar datos del usuario
//todo lo ingresado por un Promt es un string
let cantidadMascotas = prompt(`Hola ${nombre}, cuantas mascotas tienes?`);
console.log(`Mascotas: ${cantidadMascotas}`);
console.log(typeof cantidadMascotas);

let conviertido = +cantidadMascotas;
console.log(typeof conviertido);

//convertir tipo de variables
console.log(typeof cantidadMascotas);
let convers = parseInt(cantidadMascotas);
console.log(typeof convers);