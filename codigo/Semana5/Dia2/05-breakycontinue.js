//break corte
//continue salta

let alumnos = ["Leo", "Arturo", "Gustavo", "Ariana", "Alan", "Masami"];

//algoritmo para que el usuario ingrese un nombre y busque si 
//si existe el alumno y me muestre la posición de ese alumno

//for e if
let nombre = prompt("Ingrese el nombre del alumno: ");

for(let i=0; i< alumnos.length; i++){
    if(nombre == alumnos[i]){
        console.log(`El indice es ${i}`);
        //corta la ejecución
        break;
    }
    console.log(`Buscando... en ${i}`);
}

//
let notas = [17, 15, 10, 5, 14, 20, 7, 9, 18, 1, 0, 13];

//saber las notas aprobatorias
for(let i=0; i<notas.length; i++){
    if (notas[i] < 12){
        //pasa esta instrucción
        continue;
    }
    console.log(notas[i]);
}