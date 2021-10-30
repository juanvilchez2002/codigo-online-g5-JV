console.log("Hola Mundo desde NodeJS");

//usando la dependencia axios en node

//equivalente es el equivalente a 
//import {axios} from 'axios'
const axios = require('axios'); 

axios.get('https://reqres.in/api/users?page=2')//GET devuelve una promesa
.then((respuesta)=>{
    console.log(respuesta.data);
})
.catch((error)=>{
    console.log(error);
})