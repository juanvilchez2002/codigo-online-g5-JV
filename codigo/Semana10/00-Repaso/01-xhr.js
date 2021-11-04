let hacerPeticion = (tareaFinal) =>{
    let asistente = new XMLHttpRequest();

    //solo estamos escuchando el evento
    //no se ejecuta nada
    asistente.addEventListener("readystatechange", ()=>{
        switch(asistente.readyState){
            case 1:
                //pon el remitente y dirección
                console.log("Open", asistente.readyState);
                break;
            case 2:
                //envialo por el buzon
                console.log("Send", asistente.readyState);
                break;
            case 3:
                //avisa si llego al destinatario
                console.log("Recepcion", asistente.readyState);
                break;
            case 4:
                //avisas cuanto el destinatario responde
                console.log("Respuesta del Server", asistente.readyState);
                //me avisa cuand el dest. respona
                console.log("status", asistente.status);
                console.log("respuesta", asistente.responseText);
                tareaFinal(asistente.responseText);
                break;
            default:
                console.log("algo paso");

        }
    })

    //como si mandara una carta indico los datos y la envio

    //pon el destinatario y la forma de envio
    asistente.open("GET", "https://swapi.dev/api/people/1");

    //envia la carta
    asistente.send();
}

const convertirJS = (rptaJson) =>{
    console.log(JSON.parse(rptaJson));
};


hacerPeticion(convertirJS   );