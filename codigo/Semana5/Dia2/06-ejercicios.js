/*
    Inventarios

    una bodega quiere hacer un inventario de sus productos.
    Actualmente vende 3 productos: gaseosa, leche, galleta

    queremos saber por cada tipo de productos, cuantos 
    tiene en existencia

    eso si, sabemos el total de productos pero no su cantidad
    correspondiente a cada tipo

*/

/*
    Descomposición:

    manejamos 03 productos
    sabemos que el total de todo pero no por tipo
    tendremos que preguntar producto por producto

*/

/*
    Que datos necesito?
    total de gaseosas + leche + galleta
    contar por tipo

    De donde obtengo esos datos?
    se los pregunto al usuario, por medio del promt

    Estan en la forma que necesito?
    necesito contar 1 x 1, number
*/

let qtyProductos = +prompt("Cuantos productos en total tienes?");

let gaseosa = 0;
let leche = 0;
let galleta = 0;

/*
    patrón, voy a preguntar una y otra vez
*/
for(let i=0; i<qtyProductos; i++){
    let producto = +prompt("Ingrese: \n 1. Gaseosa \n2. Leche \n3. Galleta");

    switch(producto){
        case 1:
            gaseosa=gaseosa+1;
            break;

        case 2:
            leche=leche+1;
            break;

        case 3:
            galleta=galleta+1;
            break;
        default:
            alert("Número erroneo");
    }
}

console.log(`En total hay: \nGaseosa: ${gaseosa} \nLeche: ${leche} \nGalleta: ${galleta}`);