/**
 * objeto Date nos sirve para manejar fechas
 * 
 * una clase es un plano un diseño, un molde
 * cuando invocamos una clase utilizamos la palabra new
 */

let hoy = new Date();

console.log(hoy);

//obtengo el año
console.log(hoy.getFullYear());

//obtengo el mes, para Enero es 0 y Diciembre es 11
console.log(hoy.getMonth()+1);

//de que tipo es "hoy"
console.log(typeof hoy);

//obtengo el día
console.log(hoy.getDate());

let navidad = new Date(2021,11,25)

console.log(navidad);

//getTime me devuelve el timestamo de navidad

console.log(navidad.getTime());

//timestamp -> es una referencia de marca de tiempo en milisegundos

let hastaNavidad = navidad - hoy;

//en milisegundo
console.log(hastaNavidad);

//milisegundos segundos minutos días

let díasParaNavidad = hastaNavidad / 1000 / 60 / 60 / 24;

console.log(díasParaNavidad);

console.log(díasParaNavidad.toFixed(2));

/**
 * objeto Math
 * es un objeto que maneja metodos matematicos
 * 
 */

console.log(Math.sqrt(144));//raiz cuadrada

console.log(Math.pow(5,3));//elevado a la potencia

console.log(Math.random());//número aleatorio entre 0 y 1

//número aleatorio entre rangos
function aleatorio(min, max){
    // (Math.random()*(max-min))+min 
    let restultado = Math.random()*(max-min)+min;
    return restultado
}

console.log(aleatorio(5,50));//número aleatorio entre 5 y 50

for(let i=0; i<5; i++){
    console.log(aleatorio(5,50));
}