/*
    Objetos -> cualquier cosa de la que podamos describir sus 
    caracteristicas y capacidades
    Los objetos nos permite guardar datos de forma estructurada
    relacionandos como propiedad:valor
    Es una forma de guardar datos complejos con sus caracteristicas

*/

let mascota = {
    nombre: "Myski", //string
    raza:"Peruana", //string
    color:"Negro", //string
    edad: 1, //number
    hobbies: ["Jugar", "Dormir", "Comer"], //arreglos
    comer: function(){
        console.log("gua guauuuu");
    }, //una función
    ladra: true, //booleano
}

//objeto.propiedad
console.log(mascota.nombre);
console.log(mascota.hobbies);
console.log(mascota.hobbies[1]);
console.log(mascota.comer());
mascota.comer();

//tamaño del objeto
console.log(Object.keys(mascota).length);


let albumMusical={
    nombre:"After Hours",
    fecha_lanzamiento: "20/03/2020",
    genero:["Dream Pop", "Drum and Bass"],
    canciones: [
        {
            titulo: "Heartless",
            duracion: 3.21,
            autor: ["Abel Tesfaye", "Leland Wayne"]
        },{
            titulo:"Blinding Lights",
            duracion: 3.22,
            autor: ["Abel Tesfaye", "Ahmad Balshe", "Jason Queenvile"]
        }
    ]
};

console.log(albumMusical.canciones[0].autor[1]);