let edad = +prompt("Cuál es tu edad?");

//if (condición)
//condicionales trabajan con booleanos: true y false
if(edad >= 18){
    console.log("Si accedes a la 1ra dosis");
}else if(edad >=0){
    console.log("No, tienes que esperar");
}else{
    console.log("Error al ingresar datos");
}


if(edad >= 60){
    console.log("Te toca Pfizer y te toca ya");
}else if( edad <= 55 && edad >= 40){
    console.log("Te toca Pfizer y te toca el finde");
}else if(edad == 18 || edad ==21){
    console.log("Te toca Sinopharm mañana");
}else{
    console.log("Anda a yomepongoelhombro.com");
}