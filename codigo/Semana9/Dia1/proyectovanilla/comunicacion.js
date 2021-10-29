//se va a encargar de hacer peticiones

const URL = "https://616b5ec116c3fa0017171696.mockapi.io/productos";


//función que obtendra los datos
const obtenerProductos = async() => {
    try {
        //intenta esto
        //await, le dedimos aguanta, esto tiene que resolverse
      
        //respuesta del fetch, nos da el status 200, cabeceras del responde, NO ME DA UN JSON
        const respuesta = await fetch(URL);  //si le pasamos solo la URL a un fetch, es un GET, respuesta de la petición
        const productos = await respuesta.json();//aquí hay otra promesa y esto me da el JSON convertido
        return productos; //resolve(productos)
    } catch (error) {
        //y si falla me pasas la voz
        throw error;
    };
};

//función para crear un producto
const crearProducto = async(objProducto) => {
    try {
        //POST
        let configuracion = {
            method: 'POST',
            //de obj de JS a JSON que es texto
            body: JSON.stringify(objProducto), 
            headers: {
                //API sepa como interpretarlo
                'Content-Type': 'application/json'
            }
        };

        const respuesta = await fetch(URL, configuracion);
        const productoCreado = await respuesta.json();

        console.log(productoCreado);

        return productoCreado;

    } catch (error) {
        console.log(error);
    }
}

//este es el export
export{
    obtenerProductos,
    crearProducto
};