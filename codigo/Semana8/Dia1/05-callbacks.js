//1. Recordar que una variable se le puede asignar casi
//cualquier cosa incluyendo funciones

console.log("1. Estamos jugando monopolio y nos dio hambre");

setTimeout(function(){
    console.log("2. Esperar al Rappi hasta que llegue");
}, 2000)

console.log("3. Llega el Rappi y comemos");

/**
 * teno que buscar un registro de un alumno en un BD inmensa
 */

let alumnosBD = [
    "cristopher",
    "arturo",
    "masami",
    "juan",
    "fred",
    "nicolas",
    "justin",
    "ariana",
    "glenda",
    "graciela",
    "melissa"
]


//fCallBack va a hacer la referencia de una función que vamos a pasar como parametro
const buscarAlumno = function(nombre, fCallBack){
    //para simular q va a demorar voy a usar un setTimeout
    //y está función retornara true o false para indicar si
    //encuentra el alumno
    setTimeout(function(){
        for(let i=0; i<alumnosBD.length; i++){
            if(alumnosBD[i]==nombre){
                //hemos encontrado al alumno
                fCallBack(true)
                return;
            }
            
        }
        //si no lo encontramos
        fCallBack(false);
    }, 4000)
};

//llamamos a buscarAlumno
buscarAlumno("melissa", function(existe){
    if(existe==true){
        console.log("El alumno existe");
    }else{
        console.log("El alumno no existe ERROR");
    }
})