//importaremos datos de mockapi
import axios from "axios";

//conjunto de funciones para hacer peticiones

//variable que almacena la URL de mockapi
const URL = "https://616b5ec116c3fa0017171696.mockapi.io/productos";

const obtenerProductos = async() =>{
    try {
        //creamos una variable q recibira la URL
        const {data} = await axios.get(URL)
        return data;
    } catch (error) {
        throw error;
    }
};

//exportar la función para ser usada en otros archivos
export {obtenerProductos}