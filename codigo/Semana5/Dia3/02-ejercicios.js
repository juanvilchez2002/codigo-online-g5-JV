/*
    Ejercicio
    Se tiene 02 tipos de hamburguesa, una simple y otra doble, 
    cree un algotirmo que permita pedir x hamburguesas simples 
    o dobles, y después dar el total a pagar segun el pedido.

    La hamburguesa simple cuesta 5 soles
    La hamburguesa doble cuesta 9 soles

*/

/**
 *  a) que datos necesito?
 *  
 *  cantidad de hamburguesas simples
 *  cantidad de hamburguesas dobles
 *  precio de hamburguesas simples
 *  precio de hamburguesas dobles
 *  variable que indique que se finaliza el pedido (pedido 1 x 1)
 * 
 *  b) d donde obtengo esos datos?
 * 
 *  precio en variables xq ya lo tenemos
 *  cantidad de dobles y simples, ambos se preguntan al usuario 
 *  si finaliza también preguntamos al usuario
 * 
 *  c) esos datos están en la forma correcta?
 * 
 *  cantidades esto tiene que ser númerico
 * 
 */

let precioSimple = 5;
let precioDoble = 9;

let cantidadSimple = 0;
let cantidadDoble = 0;

//finalizar me indica si termino el pedido
//si es true, significa que ya no agregare más hamburguesas
let finalizar = false;

do{
    //código a ejecutar
    let eleccion = +prompt("Ingrese: \n1. para una Simple \n2. para Doble \n3. para finalizar el pedido");
    
    //evular 
    switch(eleccion){
        case 1:
            console.log("Una Simple¡¡¡\n");
            cantidadSimple++;
            break;
        case 2:
            console.log("Una Doble!!!\n");
            cantidadDoble++;
            break;
        case 3:
            console.log("Finalizo el pedido¡¡¡\n");
            finalizar = true;
            break;
        default:
            console.log("Opción Incorrecta\n");  
    }

}while(finalizar==false);

let total = precioSimple*cantidadSimple + precioDoble*cantidadDoble;

console.log(`El total a pagar será de: ${total} por: \n${cantidadSimple} Hamburguesas Simples \n${cantidadDoble} Hamburguesa Doble`);