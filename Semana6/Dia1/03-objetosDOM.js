//Window hace referencia a toda la pestaña del navegador
//no es necesaria su referenciación

//info del navegador
console.log(`Info del Navegador: ${window.navigator.userAgent}`);

//cual es mi url
console.log(`Mi URL es ${window.location}`);

//ubicación
let ubicacionN = navigator.geolocation.getCurrentPosition(
    function(ubi){
        console.log(ubi);
        /*
        console.log(ubi.coords);//coordenadas
        console.log(ubi.timestamp);//hora
        */
    }
);

console.log(ubicacionN);

//window -> document representa a la pagina

console.log(window.document);

//estoy capturando un elemento

let miTitulo = document.querySelector("h1");

console.log(miTitulo);


//innerHTML es el contenido HTML de un elemento
//es un valor
miTitulo.innerHTML = "Hola Soy Nuevo Titulo";

//el texto dentro de la etiqueta
console.log(miTitulo.innerHTML);

//window -> Document, representa la página web y su contenido

//obtener un elemento por su ID
let miCaja = document.getElementById("caja")
console.log(miCaja);

//innerHTML representa el contenido HTML del elemento
//se puede escribir etiqueta en HTML
miCaja.innerHTML = "<h2>Titulo Caja</h2>";

//modificar estilo
miCaja.style.backgroundColor = "purple";
miCaja.style.color = "white";