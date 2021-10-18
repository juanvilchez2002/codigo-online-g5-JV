//spread Operator -> esparcir
//arreglos
let frutas = [
    "Kiwi",
    "Sandia",
    "Fresa",
    "Chirimoya"
];

//funciona tanto para arreglos como objetos


//un nuevo arreglo pero con el contenido de otro arreglo
//la ventaja es no solo de copiar un arreglo si no adicionar otros items
let frutasTMP = [...frutas, "Uvas", "Mango"];

console.log(frutasTMP);

let verduras = [
    "Lechuga",
    "Col China",
    "Zanahoria"
];

let comida = [
    ...frutas, ...verduras
]

console.log("Comida: ", comida);

//Spread Operator - esparcir
//objetos
let pikachu = {
    tipo: "Eléctrico",
    ataque: 40,
    vida: 55,
    ataque: "Cabezado"
};

let pikachuNaranja = pikachu; // esto hace tambien referencia por memoria, y esta mal

pikachuNaranja. vida = 23;

console.table(pikachuNaranja);
console.log("// Pikachu Original");
console.table(pikachu);

console.log("\n\nOtro ejemplo");

let pikachuVerde = {//se crea en otra dirección de memoria que pikachu original
    // aquí podemos reemplazar y agregar datos
    ...pikachu,
    ataque: "Conversar",//reemplazar
    come: "Lechuga"//agregar
};

pikachuVerde.vida = 40;

console.log("// Pikachu Verde");
console.table(pikachuVerde);
console.log("// Pikachu Original");
console.table(pikachu);

