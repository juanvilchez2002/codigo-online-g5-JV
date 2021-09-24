/*
    Pedir al usuario sus nombres, apellidos y edad cada uno por 
    sepadado, el resultado deberia ser un console.log, resumiendo 
    los datos del usuario
*/

let nombre = prompt("Cual es tu nombre?");
let apellido = prompt("Cuales son tus apellidos?");
let edad = prompt("Cual es tu edad?");

console.log(`Bienvenido: ${nombre} ${apellido} ${edad}`);

/*
    Calcular el area de un triangulo

    a) que datos necesito?
    rpta. la base y la altura

    b) comó puedo tener esos datos?
    rpta. el usuario lo ingresa por el promt

    c) esos datos están en la forma que necesito?
*/

//convertiendo en number base con +
let base = +prompt("Cuales la base del triangulo?");
//convertiendo en float con parseFloat
let altura = parseFloat(prompt("Cual es la altura del triangulo"));

let resultado = (base*altura)/2;

console.log(`el área del triangulo es ${resultado}`);

/*
    Preguntar al usuario por dos números y mostrar el residuo 
    de la operación
*/

let numa = +prompt("Ingrese A: ");
let numb = +prompt("Ingrese B:  ");

console.log(`el residuo de los números es : ${numa%numb}`);