
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
})