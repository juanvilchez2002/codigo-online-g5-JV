let arrJuegos = [
    {
        nombre: "The Witcher 3",
        precio: 60
    },{
        nombre: "Doom",
        precio: 50
    },{
        nombre: "Among Us",
        precio: 30
    },{
        nombre: "Bloodborne",
        precio: 90
    },{
        nombre: "God of War (2018)",
        precio: 120
    },{
        nombre: "Civilization VI",
        precio: 45
    }
];


/**
 *  Preguntaremos al usuario cual es su presupuesto, para ofercele
 *  videojuegos que esten a su alcance
 *  y despues brindaremos un carrito de compras para que el 
 *  usuario pueda comprar
 *  
 */

/**
 *  1. preguntar su presupuesto
 *  2. comparar el presupuesto con los juegos que ofrecemos
 *  3. según la compraración, tener una lista de juegos a ofrecer
 *  4. agregar al carrito, seleccionar items
 *  5. cobrar, indicar el total
 */

let presupuesto = +prompt("Cuanto es su presupuesto?");



function revisarPresupuesto(){
    /**
     * una lista de los juegos que el usuario puede comprar
     */
    let juegosComprables =[]; 

    for(let i=0; i < arrJuegos.length; i++){

        if(arrJuegos[i].precio <= presupuesto){            
            juegosComprables.push(arrJuegos[i]);
        }
    }

    /*
        para que devuelva el resultado de la comparación
    */
    return juegosComprables;
}

/**
 *  agregarCarrito tiene que trabajar con la lista de los juegos
 *  que el usuario puede comprar 
 */
function agregarCarrito(listaJuegos){
    
    //lista donde se guardara el carrito
    let carrito =[];

    for(let j=0; j<listaJuegos.length; j++){
        //como necesito saber si el comprar un juego puedo comprar
        //el siguiente sin quedarme sin dinero
        if(presupuesto<listaJuegos[j].precio){
            console.log("Lo siento, el presupuesto no alcanza :(");
            continue;//salta
        }

        //confirm pregunta y obtiene un booleano
        let compra = confirm(`Deseas comprar? ${listaJuegos[j].nombre}`);
        
        console.log(compra);

        //agrego el juego y descuento el presupuesto
        if(compra == true){

            carrito.push(listaJuegos[j]);
            //actualizando el presupuesto segun haya comprando
            presupuesto= presupuesto - listaJuegos[j].precio;
        }
    }

    //despues del for el carrito esta lleno
    return carrito;
}


let listaComprables = revisarPresupuesto();
console.table(listaComprables);

let miCarrito = agregarCarrito(listaComprables);

console.log("Haz comprado: ");
console.table(miCarrito);
console.log(`tu vuelto es ${presupuesto}`);
