
let nombre = prompt("Ingresa tu nombre");

//locaStorage es una mejora de los cookies
//es un obj dentro de window

//para guardar elementos, todos estos elementos son guardados
//como texto
//localStorage.setItem("nombre de lo guardado", "valos de lo guardado")
localStorage.setItem("nombreUsuario", nombre);


let numero = 9;
localStorage.setItem("num",numero);
let numRecuperado = localStorage.getItem("num");
console.log(typeof numRecuperado, numRecuperado);

// setTimeout(function(){
//     //podemos leer contenido del locaStorage
//     //localStorage.getItem("nombre_algo_guardado_en_LS")
//     let obtenido = localStorage.getItem("nombreUsuario");
//     alert(obtenido);
// }, 4000);

// //eliminar algo del localStorage
// setTimeout(function(){
//     //eliminar algo
//     //localStorage.removeItem("nomnbre_de_algo_guardado_en_LS")
//     localStorage.removeItem("nombreUsuario");
// }, 10000);

// //setTimeout(función, tiempo_milisegundos)
// //hace cosas en n tiempo
// setTimeout(function(){
//     console.log("Hace cosas en un X tiempo");
// }, 9000);

//setInterval
//ejecuta algo en un intervalo de forma periodica
/*
setInterval(function(){
    console.log("Holaaaa");
}, 1000);*/


let objeto = {
    modelo:"iphone",
    pantalla: 6.5,
    color: [
        "blanco",
        "dorado",
        "negro"
    ],
    anio:2021,
};

//JSON.stringify -> convierte en texto
//JSON.stringify -> convierte en JS a String
//toda información guardada en el localStorage debe de convertirse
//en texto
let objAJSON = JSON.stringify(objeto);

console.log(objAJSON);

console.log(typeof objAJSON);

localStorage.setItem("objeto", objAJSON);

setTimeout(function(){
    let jsonObtenido = localStorage.getItem("objeto");
    //en jsonObtenido no se puede trabajar como JS para ello se 
    //debe de convertirlo de nuevo a un obj de JS
    //.parse() recibe texto y lo transforma en JS
    console.log(`como texto ${jsonObtenido}`);
    let jsonRecuperado = JSON.parse(jsonObtenido);
    console.log("como JS", jsonRecuperado);
}, 4000);