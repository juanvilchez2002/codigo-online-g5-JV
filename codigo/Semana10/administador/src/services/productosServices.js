//importaremos datos de mockapi
import axios from "axios";

//conjunto de funciones para hacer peticiones

//variable que almacena la URL de mockapi
const URL = `${process.env.REACT_APP_API}productos`;

const obtenerProductos = async() =>{
    try {
        //creamos una variable q recibira la URL
        const {data} = await axios.get(URL)
        return data;
    } catch (error) {
        throw error;
    }
};

//función que nos permita crear un nuevo producto
//recibira como argumento el nuevo producto
const crearProducto = async(nuevoProducto)=>{
    try {
        //creamos las cabeceras
        const headers = {
            "Content-Type": "application/json"
        }

        //axios siempre me va devolver la propiedad
        //data, donde esta la respuesta del
        //serviodor axios cuando hace POST, 
        //PUT necesita no solo la URL va necesitar
        //los headers y la data
        //axios.post(URL, objCrear, {headers})

        const {data} = await axios.post(URL, nuevoProducto, {headers});
        return data;
    } catch (error) {
        console.log(error);
    }
}

//funcion para obtener el producto por id, que se usara
//para editar producto

const obtenerProductoPorId = async(id) =>{
    try {
        //concatenamos la URL con el id para obtener
        //el producto
        const {data} = await axios.get(`${URL}/${id}`)
        return data
    } catch (error) {
        throw error;
    }
}

//función que nos permitira actualizar un producto
//

const editarproductoPorId = async (id, objProd) =>{
    try {
        //para actualizar datos es necesario
        //usar las cabeceras
        const headers = {
            "Content-Type": "application/json",
        };     
        //envio la actualización a mockapi   
        await axios.put(`${URL}/${id}`, objProd, {headers});
        return;//envia un revolve
    } catch (error) {        
        throw error;
    }
}

//función para eliminar producto
const eliminarProuducto = async (id) =>{
    try {
        await axios.delete(`${URL}/${id}`)
        return "Producto Eliminado"
    } catch (error) {
        console.log(error);
    }
}


//exportar la función para ser usada en otros archivos
export {
    obtenerProductos, 
    crearProducto, 
    obtenerProductoPorId, 
    editarproductoPorId, 
    eliminarProuducto

}