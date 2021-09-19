//console.log permite mostrar en la consola de JS, lo que se nos
//antoje es muy útil para saber que esta pasando internamente dentro de JS

console.log("Hola Mundo");


//variables
//palabras reservadas, JS las usa
//los nombres de variables son sensibles a Mayus y Minus
var _nombre = "Juan";
console.log(_nombre);

//Tipos de datos
//texto, números, booleanos

//String - Texto - Cadena de Texto
var nombre2 = "Alberto"
console.log(nombre2);

//Number - número
var edad=31;
console.log(edad);

//Boolean - Booleano; 
var esDeNoche = true;
console.log(esDeNoche);

//para ver el tipo de dato
console.log(typeof esDeNoche);

//para cambiar de valor de una variable, me basta con llamarla
edad = 27;
console.log(edad);

//cambiar tipo de dato
var anio = 2021;

anio="dos mil veintidos"

//JS es un lenguaje que no es tipado, no pre declaramos los tipos de datos

//VALORES RAROS EN VARIABLES

var nota; //underfined, no esta definido
console.log(nota);

var nulo = null;
console.log(nulo);

//Not a Number = NaN
var rareza = 100/"cebollas";
console.log(rareza);

//Infinity 
var infinito = 100/0;
console.log(infinito);
console.log(typeof infinito);