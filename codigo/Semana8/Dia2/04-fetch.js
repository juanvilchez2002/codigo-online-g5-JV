//GET
fetch("https://reqres.in/api/users?page=2")
//el fetch funciona con Promise
.then((resp)=>{
    console.log(resp);
    return resp.json();//parsea de texto a JS
}).then((gatos)=>{
    console.table(gatos.data);
});


//POST - Crear
let nuevoUsuario = {
    name: "Daniel de la Cruz",
    job: "Boss"
}

//headers - cabceras - guía de remisión
let cabecera = {
    method: "POST",//Método HTTP, POST, PUT, DELETE, GET
    headers: {//Que info envio, de que tipo, para que el backend sepa
        //como procesarlo
        "Content-Type": "application/json",
    },
    body:JSON.stringify(nuevoUsuario), //data, carga, pero hay que transformarla a JSON
};

fetch("https://reqres.in/api/users", cabecera)
.then((rest)=>{
    return rest.json()
})
.then((usercreado)=>{
    console.table(usercreado);
}).catch((err)=>{
    console.log(err);
})