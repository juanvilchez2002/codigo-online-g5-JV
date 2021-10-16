
let hornearTorta = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(true){
                resolve("Torta Lista¡¡¡")
            }else{
                reject("Se quemo")
            }
        },5000);
    });
};

let prepararGlaseado = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Glaseado Listo¡¡¡"); //va a ser exitoso
            //reject("Se quemo el microondas")
        }, 3000);
    });
};

let cubrirTorta = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            //resolve("Tota Decorada");
            reject("Pide rappi nomas...")
        }, 4000);
    });
};

//comencemos por la primera tarea a ejecutar
hornearTorta()
.then((tortarHorneada)=>{//exito, resolve
    console.log(tortarHorneada);
    //tuvimos exito con la torta, entonces vamos por el sgte
    //retornar otra promesa
    return prepararGlaseado();
})
//al retornar una promesa, el sgte then es de la promesa
.then((glaseadoListo)=>{//este then es de prepararGlaseado()
    console.log(glaseadoListo);
    return cubrirTorta();
})
.then((totaDecorada)=>{//este then es de cubrirTorta()
    console.log(totaDecorada);
})
.catch((tortaMala)=>{
    //funciona para todas las promesas que esten detrás
    //CUANDO SE DETECTA UN REJECT EN CUALQUIERA DE LAS PROMESAS
    //SE CORTA EL PROCESO
    console.log(tortaMala);
})