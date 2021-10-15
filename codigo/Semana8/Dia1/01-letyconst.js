for(var i=0; i <5; i++){
    console.log(i);
};

console.log(`iterador ${i}`);

for(let j=0; j<5;j++){
    console.log(j);
}

//console.log(`iterador ${j}`);//genera un error

//cuando son const que tienen valores, se tiene la convención de poner en nombre en mayusculas

//no usar var, al menos un let

const PI = Math.PI;//puedo usarlo pero no modificarlo

console.log(PI);

//una variable puede referenciar casi cualquier cosa
//string, number, objetos, arrays, boleanos y finciones

let saludar = function(){
    console.log("Hola");
}

saludar();

const despedirme = function(){
    console.log("chau");
}

despedirme();

//si una variable que almacene lo que sea NO VA A CAMBIAR
//UTILIZAR CONST