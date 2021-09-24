/*
    Una función es una tarea predefinida que se puede llamar varias
    veces para que haga la misma cosa.
    Una función, puede tener parametros (nombres), ya conocidos y 
    esos para parametros tendrán un argumento (valor)
*/

function calcularAreaTriangulo(base, altura){
    //se coloca el código que se va a ejecutar 
    //cuando se invoque/llama/ejecuta
    let area = base * altura / 2;

    //a) return indica que va adevolver mi función
    //b) termina la ejecución de mi función
    return area;
}

let resultado = calcularAreaTriangulo(50,17);
let resultado2 = calcularAreaTriangulo(100,25);

console.log(resultado);
console.log(resultado2);