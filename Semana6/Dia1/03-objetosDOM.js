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

//obtener elementos por su nombre de clase
let misItems = document.getElementsByClassName("lista_item");

console.log(misItems);

//Array.from(htmlCollection) crea un arreglo
let arregloItems = Array.from(misItems);

console.log(arregloItems);

//anotación importante: el forEach, Filter, Map, Find la función
//con la q se trabaja, se puede obtener el item y el indice
//forEach(function(item, index_item, arreglo))
arregloItems.forEach(function(item, index, arreglo){
    item.style.backgroundColor = "skyblue";
    item.innerHTML = `Patata ${index}`;
    console.log("Mostrando el :",arreglo);
});

let frutas = [
    "piña",
    "fresa",
    "maracuya"
]

//array.forEach(function(item_actual, posición, propio_arreglo))
frutas.forEach(function(fru, ind, conj){
    console.log(fru);
    console.log(ind);
    console.log(conj);
});

//obtener element de diferentes maneras
//los querySelector y querySelectorAll funcionan de la misma manera
//que los selectores en CSS
let miTexto = document.querySelector("#texto"); 

console.log(miTexto);

//querySeletorAll me da un NodeList
//un NodeList lo puedo tratar como un arreglo
let boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach(function(bx){
    bx.innerHTML = `<p> soy un parrafo</p>`
})

//crear elementos
let series = [
    "Squid Game",
    "Pasión de Gavilanes",
    "Dark",
    "Billions",
    "GOT",
    "Suits",
    "Mr. Robot",
    "House of Dragons",
    "Chernobyl",
    "Breaking Bad"
];

let divContenido = document.getElementById("contenido");

//document.createElement -> recibe el nombre de una etiqueta
//en el ejemplo se crea una lista desordenada
let listas = document.createElement("ul");

console.log(divContenido);

//appendChild adiciona un contenido como hijo
//push a un elemento ya existente
divContenido.appendChild(listas);

let textLI = "";

series.forEach(function(serie){
    textLI = textLI + `<li>${serie}</li>`
});

console.log(textLI);

listas.innerHTML = textLI;