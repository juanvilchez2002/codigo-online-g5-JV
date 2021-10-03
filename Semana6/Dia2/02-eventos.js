
let divContenido = document.getElementById("contenido")

let miBoton = document.createElement("button");

miBoton.innerHTML = "Dame Click";

divContenido.appendChild(miBoton);

//elementoHTML.addEventListener("evento", function())
//escuchar una función
miBoton.addEventListener("click",function(){
    alert("Haz hecho alert¡¡¡");
});

let peliculas = [
    "Parasite",
    "Shang Chi",
    "Interstellar",
    "Matrix",
    "El bueno, el malo y el feo",
    "Geo tormenta",
    "Jhon Wick",
    "Constantine",
    "Godfather",
    "El Señor de los Anillos"
];

peliculas.forEach(function(peli, indice){
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerHTML = peli;

    divContenido.appendChild(nuevoParrafo);

    nuevoParrafo.style.cursor = "pointer"

    nuevoParrafo.addEventListener("dblclick", function(){
        alert(`Hiciste click en ${peli}`);
        nuevoParrafo.style.backgroundColor = "steelblue";
    })
});


//hacemos ver el texto del password

//creamos la etiqueta HTML
let miInput = document.createElement("input");

//agregramos atributos con setAttribut(atributo, valor_Atributo)
miInput.setAttribute("type","password");

//lo adicionamos al div.contenido
divContenido.appendChild(miInput);

//creamos la etiqueta boton
let btnVer = document.createElement("button");
btnVer.innerHTML = "Ver";
divContenido.appendChild(btnVer);

let esVisible = false;

btnVer.addEventListener("click", function(){
    esVisible = !esVisible; //cambia el valor de esVisible
    if(esVisible == false){
        miInput.setAttribute("type", "text");
    }else{
        miInput.setAttribute("type","password");  
    }
});

//capturar eventos

//creando elemento hipervinculo
let irAGoogle = document.createElement("a");

//le adicionamos un atributo
irAGoogle.setAttribute("href", "https://www.google.com");

//adicionando texto al hipertexto
irAGoogle.innerHTML = "Ir a Google";

//adicionarlo a divContenido
divContenido.appendChild(irAGoogle);

/**
 * capturar el evento con addEventListener
 */

irAGoogle.addEventListener("click", function(evento){
    //preventDefault() -> previene la acción por defecto de un evento
    evento.preventDefault();
    console.log(evento);
})

//capturó primero el formulario
let miFormulario = document.getElementById("formulario");

//capturamos el evento de submit
//submit es la accción de enviar datos
miFormulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    console.log("Submiiit¡¡¡¡");
    //vamos a hacer envios de datos con JS
    console.log(miFormulario.nombres.value);//muestra el valor del input nombre
    
    //todo lo que se obtiene de un 
    let nuevoUsuario = {
        //obtener los datos de los input
        //formulario.nombre_input.value
        nombres: miFormulario.nombres.value,
        apellido: miFormulario.apellidos.value
    }

    console.log(nuevoUsuario);
})