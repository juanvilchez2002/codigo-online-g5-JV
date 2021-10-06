//para esta parte usar if y for

/**
 * crear una función que reciba un arreglo y un nombre, y la función
 * debe retornar si el nombre existe dentro de la función debe
 * retornar la posición el nombre encontrado, en caso contrario de no
 * encontrarlo retornar -1
 */

let listaBusqueda = [
    "juan",
    "luis",
    "alex",
    "daniel",
    "mario"
];


function busquedaNombre(lista, nomb){
    for(let i=0; i<lista.length; i++){
        if(nomb == lista[i]){
            let mensaje = `el nombre ubicado se encuentra en: ${i} `;
            return mensaje;
        }
    }

    return -1;
}


let nombre = prompt("Ingrese el nombre a buscar: ");

console.log(busquedaNombre(listaBusqueda, nombre));

/**
 * como sabe la sunat si un RUC es válido?
 * 
 * hay un digito verificador:
 * 
 * Ejercicio RUC - Módulo 11
 * https://es.wikipedia.org/wiki/C%C3%B3digo_de_control
 * 
 */

function verifcarRUC(ruc){
    //verificar que el RUC tenga 11 digitos
    if(ruc.length == 11){
        //es correcto
        //porque eventualmente en este bloque de código
        //retornara true

        let factorChequeo = [5,4,3,2,7,6,5,4,3,2];

        let total = 0;

        for(let i = 0; i <factorChequeo.length; i++){
            let prod = ruc[i]*factorChequeo[i];
            total = total + prod;
        }

        let modulo = total % 11;
        
        let verificador = 11 - modulo;

        if(verificador == ruc[10]){
            return true;
        }
    }

    return false;
}

console.log(verifcarRUC("10417064767"));

//ejercicio de libro

let pagoHoras = 25;

let totalhoras=0;

for(let i=1; i<=6; i++){
    let cantDiaria = +prompt("Cuantas horas fueron hoy: ");
    totalhoras += cantDiaria;
}

console.log(`El trabajador tiene ${totalhoras} horas trabajadas con un pago de S/. ${totalhoras*pagoHoras}`);

//

let productor = [
    {
        nombre:"Audifonos",
        clave:1,
        materiaPrima:20
    },
    {
        nombre:"Funda para movil",
        clave:2,
        materiaPrima:10
    },
    {
        nombre:"USB",
        clave:3,
        materiaPrima:15
    },
    {
        nombre:"Mouse Gamer",
        clave:6,
        materiaPrima:30
    },
    {
        nombre:"Teclado",
        clave:4,
        materiaPrima:120
    },
    {
        nombre:"Gráfica",
        clave:5,
        materiaPrima:200
    }
]

function calcularManoDeObra(clave, costoMP){
    //calculando el costo de MO en función a la clave y MP
    if(clave == 3 || clave == 4){
        return costoMP*0.75;
    }else if(clave == 1 || clave == 5){
        return costoMP*0.8;
    }else if(clave == 2 || clave == 6){
        return costoMP*0.85;        
    }
};

function calcularCostoFabricacion(clave, costoMP){
    if(clave == 2 || clave == 5){
        return costoMP*0.3;
    }else if(clave == 3 || clave == 6){        
        return costoMP*.035;
    }else if(clave == 1 || clave ==4){
        return costoMP*0.28;
    }
};

function calcularCostos(arrProductos){
    for(let i=0; i < arrProductos.length; i++){
        //enfoquemos en la mano de obra
        let costoMP = arrProductos[i].materiaPrima;
        let clave = arrProductos[i].clave;
        let costoMO = calcularManoDeObra(clave, costoMP);
        let costoCF = calcularCostoFabricacion(clave, costoMP)

        let cProduccion = costoMP + costoCF + costoMO;

        console.log(`el costo toal de ${arrProductos[i].nombre} es S/. ${costoCF}`);
    }
};

calcularCostos(productor)