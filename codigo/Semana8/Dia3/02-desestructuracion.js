//desestructuación en arreglos
let frutas = [
    "piña",
    "fresa",
    "naranja",
    "kiwi"
];

console.log(frutas[1]);
console.log(frutas[2]);

let fruta1 = frutas[0];
let fruta2 = frutas[1];

//en una sola linea para cada item
let [fru1, fru2, fru3, fru4] = frutas;

console.log(fru1);
console.log(fru2);
console.log(fru3);
console.log(fru4);

//desestructuración de objetos
let celular = {
    pantalla: 6.9,
    color: "negro",
    memoria: 4,
    camara: 12,
    marca: "Motorola",
    encender: function() {
        console.log("tururu");
    }
};


//tengo que saber que propiedades tiene el objeto - requisito
//no importa el orden y debe de respetarse el nombre de las propiedades
let {pantalla, encender, marca, memoria, color, camara} = celular;

console.log(pantalla);
console.log(camara);
console.log(marca);
console.log(memoria);
console.log(color);
encender(); 

//que tengo una función que recibe las caracteristicas de una persona
//recibiendo argumentos por orden
let verificarPersona = (nombre, dni, edad) => {
    console.log(nombre);
    console.log(dni);
    console.log(edad);
}

verificarPersona("Juan", "90909090", 25);

//recibiendo argumentos por un objeto
let verificarPersona1 = ({nombre, dni, edad}) => {
    console.log(nombre);
    console.log(dni);
    console.log(edad);
}

let persona = {
    edad: 21,
    nombre: "alberto",
    dni: "78787878",
    apellidos: "vilchez",
    hobbie:[
        "comer", "correr"
    ]
}

verificarPersona1(persona)
