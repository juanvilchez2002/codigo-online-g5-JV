//clásica
function saludar(nombre){
    return `Hola soy ${nombre}`;
}

//anonima
const despedida = function(mensaje){
    return `Bye, ${mensaje}`;
}

//función flecha
//si solo se usa un parametro se puede usar sin parentesis caso contrario usarlos
const saludar2 = (nombre) =>{
    return `Hola soy ${nombre}, función flecha`;
}

//si es algo sencillo directamente puedo indicar en la misma linea lo que se va
//a retornar
const saludar3 = nombre => `Hola soy ${nombre}, función fecha reducido`;

console.log(saludar("Juan"));

console.log(saludar2("Cuida2"));

console.log(saludar3("Juan"));


//el uso de las funciones flechas tiene limites en su uso dentro de la clase
let mouse ={
    nombre: "Miguel",
    roer: ()=>{
        //el objeto this hace referencia al objeto window
        //NO USAR FUNCIONES FECHA COMO METODOS DE UNO OBJETO, NO FUNCIONA
        //AFUERA DE UN OBJETO SE RECOMIENDA USAR FUNCIONES FLECHA
        console.log(`${this.nombre} roe queso`);
        console.log(this);
    }
}

mouse.roer();

let mouse2 ={
    nombre: "Miguel",
    roer: function(){
        //el objeto this hace referencia al objeto window
        console.log(`${this.nombre} roe queso`);
        console.log(this);
    }
}

mouse2.roer();