//en este caso no va a recibir ningun parametro
let hacerPeticion = () =>{
    return new Promise((resolve, reject)=>{
        let asistente = new XMLHttpRequest();
        asistente.addEventListener("readystatechange",()=>{
            if(asistente.readyState===4){
                //ya tengo la respuesta
                resolve(asistente.responseText);
            }
        });
        //pon el destinatario y la forma de envio
        asistente.open("GET", "https://swapi.dev/api/people/1");
        //envia la carta
        asistente.send();
    });
}; 
/*
hacerPeticion().then((rptaTexto)=>{
    console.log("rptaTexto ", rptaTexto);
    console.log("Convertido ", JSON.parse(rptaTexto));
});*/

const pedirData = async() =>{
    try {
        let rpta = await hacerPeticion();
        console.log(JSON.parse(rpta));
    } catch (e) {
        console.log(e);
    }
}

pedirData();