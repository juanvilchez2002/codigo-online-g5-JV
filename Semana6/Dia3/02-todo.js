/**
 *  1. que datos necesito?
 *  - la tarea (string), estado de la tarea (booleano)
 *  - referencia del formulario
 *  - referencia a la lista
 * 
 *  2. como obtengo los datos?
 *  - evento click, tomando el value del input
 * 
 */


//referencia al formulario
let fromToDo = document.getElementById("fromToDo");

//referencia a la lista de tarea
let ulTareas = document.getElementById("tareas");

let tareas = []; //aquí se almacenarar las tareas a mostrar

//obtener el valor del input y adicionarlo al arreglo tareas[]
fromToDo.addEventListener("submit", function(event){
    //event es el evento
    event.preventDefault();
    //formulario.name_input.value
    let nuevaTarea = fromToDo.tarea.value;
    console.log(nuevaTarea);

    //lo agregamos al arreglo tareas
    tareas.push(nuevaTarea);
    console.log(tareas);

    //formulario.reset() -> reinicia todo el formulario
    fromToDo.reset();

    //llamamos a dibujarTareas
    dibujarTareas();
});

//creamos una función dibujarTareas
function dibujarTareas(){
    //cada vez que se ejecute dibujarTareas, lo primero q se hace
    //es decir que el contenido UL de HTML va a ser "" nada
    //limpiamos el contenido de ulTareas
    ulTareas.innerHTML = "";
        
    //se va a encargar de dibujar las tareas y mostrarlas en 
    //el navegador

    tareas.forEach(function(tarea, posicion){
        //creamos un elemento li
        let li = document.createElement("li");

        //como esta vacio le agregamos la tarea
        li.innerHTML = tarea;

        //adicionamos a la etiqueta ul que es ulTareas
        ulTareas.appendChild(li);

        //añadir un evento a cada item/tarea
        //evento dobleClick
        li.addEventListener("dblclick", function(){
            //hace doble click me muestra la tarea
            console.log("click en ", tarea)
            
            //elimnando una tarea
            tareas.splice(posicion,1);
            console.log("despues de eliminar", tareas);

            //llamamos de nuevo dibujarTareas
            dibujarTareas();
        })

    });

    

}




//splice(posición, cantidad)
//elimina una cantidad de elementos a partir de una determinada
//posición

let frutas = [
    "piña",
    "fresa",
    "uva",
    "manzana"
];

//eliminando uva
frutas.splice(2,1);

console.log(frutas);


