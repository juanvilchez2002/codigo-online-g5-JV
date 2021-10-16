//tarea asincrona: demora, buscar un registro, leer un archivo
const hornearTorta = ()=>{
    //no sabemos como ira el horneado de nuestra torta
    //y que eso demora en saber
    //Promise es una clase
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //aquí estoy forzando a que sea true o false
            //comunmente tendriamos una operación, buscar un registro
            //obtener un elemento, obtener datos
            let estado=false    ;
            if(estado==true){
                //cuando sucede algo - bien
                resolve("La torta esta Ready...")
            }else{
                //cuando no sucede nada - mal 
                reject("Se quemo ps...  ")
            }
        },5000);
    })
}

hornearTorta()
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })