let frutas = [
    "fresa",
    "mango",
    "piña",
    "lucuma"
];

for(let i=0; i<frutas.length;i++){
    console.log(frutas[i]);
}

//forEach recibe una función sin nombre como parametro
//donde el elemento que se ingresa es elemento del array

//forEach por cada elemento que encuentre se va a ejecutar, esa
//función va a recibir c/item en orden y este item lo podemos
//utilizar dentro de la función

//forEach(function(){})
//no devuelve valor alguno

frutas.forEach(
    function(fruta){
        console.log(fruta);
    }
)

//función clasica
function tarea(parametro){
    return parametro
}

//función anonima
//casi cualquier cosa se puede asignar una variable
let tarea2 = function(parametro){
    return parametro
};

//Map() transforma un array, podemos verlo como 
//una analogia de ir a escalar una montaña

let energia =[
    89,
    90,
    86,
    85,
    100
];

//Energia se va a dividir en 2, una para subir y otra para bajar.
//Como podría tener un nuevo arreglo con los valores que
//representen la mitad de la energía por cada item
//crea un nuevo arreglo pero con información transformada

let energiaCima=[];

for(let i=0; i<energia.length; i++){
    energiaCima.push(energia[i]/2);
}

console.log(energiaCima);

//usando metodo map
//en este caso ener es un elemento del array energia
let energiaCima1 = energia.map(
    function(ener){
        let energiaTrasn = ener/2
        return energiaTrasn
    }
)

console.log(energiaCima1);

//Filter() retornara un nuevo arreglo segun la condición 
//que le demos en la función

let conductores = [
    {
        nombre:"Jose",
        vacunado: true
    },{
        nombre:"Glenda",
        vacunado:true
    },{
        nombre:"Osmar",
        vacunado:false
    }
];

let puedePasar = conductores.filter(
    function(conductor){
        return conductor.vacunado==true;
    }
)

console.log(puedePasar);


let dniDB = [
    "42144143",
    "12345678",
    "76543210"
]

//Find() encuentra un valor en el arreglo y retorna el valor
//encontrado
let dniEncontrado = dniDB.find(
    function(dni){
        return dni=="12345678"
    }
)

console.log(dniEncontrado);