//Async/Await 
//Async devolvera una promesa antes que directamente retorne un valor

//de Promesas a Async
const traerData = () =>{
    return new Promise((resolve, reject) => {
        resolve("data obtenida");
        //reject("error al obtener data");
    })
};


//la misma función pero le indicamos que es una función asincrona
//async me devuelve una promesa, en vez de retornarme el resultado directamente
const traerData1 = async() => {
    //aca adenteo yo tengo más código, hago operaciones con un 
    //if, etc y cuando tenga exito reutrn si fallo throw

    return("Data obtenida con async");//el return se vuelve en un Resolve
    throw "Error al obtener data con async"
}


traerData()
    .then((rspt) => console.log(rspt))
    .catch((err) => console.log(err))

traerData1()
    .then((rspt) => console.log(rspt))
    .catch((err) => console.log(err))

//cuando ponemos await antes de una expresión le estamos diciendo
//esto retorna una promesa entonces detente hasta que await
//await es valido con funciones async
let usarData = async() =>{
    //cuando utilicemos AWAIT, tiene que estar dentro de una función
    //y esa función tiene que tener ASYNC
    //trycatch no es solamente para async/await
    try{
        let respta = await traerData1();
        console.log(`usando Await ${respta}`);
    }catch(error){
        //y su no funciona ejuecuta esto y me dice que ha pasado
        //este catch va a capturar el reject a throw de la función
        console.log(error);
    }
    
};

usarData(); 


//fetch con async/await
//al usar await hace una espera a que se resuelva y devuelve un resultado
const traerUsuario = async() =>{
    try{
        let rpta = await fetch("https://reqres.in/api/users?page=2");//se detiene y devuelve un resultado
        let datos = await rpta.json();//se detiene y se resuelve
        console.table(datos.data);
    }catch(err){//reject/throw
        console.log(err);
    }
};

traerUsuario();