import axios from "axios";

//url de categorias
const URL = `${process.env.REACT_APP_API}categorias`;

//creamos función para crear categoria
const crearCategoria = async (nuevaCategoria) =>{
    try {
        //creamos la cabecera
        const headers = {
            "Content-Type": "application/json"
        }
        //axios me devuelve una propiedad 
        const {data} = await axios.post(URL, nuevaCategoria, {headers})
        return data
    } catch (error) {
        throw error
    }
}

//para obtener todas las categorias
const obtenerCategorias = async () => {
    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        throw error;
    }
};

export { 
    crearCategoria, 
    obtenerCategorias
}