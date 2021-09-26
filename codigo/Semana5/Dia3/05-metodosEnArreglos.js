let bebidas = [
    "Agua",
    "Limonada",
    "Mojito",
    "Pisco Sour"
];

console.table(bebidas);

//elimina el ultimo elemento de un arreglo
bebidas.pop();

console.table(bebidas);

//JS utiliza Prototypes, que son los objetos más sencillos que 
//tiene JS, y estos objetos sencillos ya traen en muchos casos
//propiedades y metodos.
//se puede alterar pero no es común


//forEach
//dentro de este forEach me permite hacer por cada item
//lo que yo desee. Recorre todo los elementos de un arreglo
//forEach recibe una función

bebidas.forEach(function(miBebida) {
//miBebida es un elemento de bebida
    console.log(miBebida);
})


function miFuncion(item, index){
    text+= index +":"+item+"\n";
}

let text ="";
const fruta = ["Manzana", "Naranja", "Cherry"];

fruta.forEach(miFuncion);

console.log(text);

