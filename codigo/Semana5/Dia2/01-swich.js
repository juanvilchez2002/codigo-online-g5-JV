let producto = +prompt("Ingrese el código del producto");

//switch evalua una condición a traves del "case"
switch(producto){
    //case posible_valor, este puede ser uin num, booleano, string
    case 1:
        console.log("Chocolate");
        //todo el código que quiera
        break; //corta la ejecución del switch
    case 2:
        console.log("Papitas");
        break;
    case 3:
        console.log("Galletas");
        break;
    case 4:
        console.log("Pollo");
        break;
    default: //else
        console.log("Código no encontrado");
}



let horas = +prompt("Ingrese sus horas semanalas: ");

//si el trabajador labora más de 35 horas tiene horas extras
//si el trabajador tiene igual o más de 30 hroas hasta menos de 35
//horas, cumplio con su jornada
//si el trabajador tiene menos de 30 horas se le debe de mandar 
//un aviso

//para casos especiales como rangos es mejor comparar el true para
//que se pueda ejecutar

switch(true){
    case horas > 35:
        console.log("Horas extras");
        break;
    case horas >= 30 && horas <= 35:
        console.log("Cumplio su jornada");
        break;

}