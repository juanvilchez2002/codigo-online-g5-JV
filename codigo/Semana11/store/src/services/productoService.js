import axios from "axios";

const URL = `${process.env.REACT_APP_API}productos`;


//buscar todos o filtrar
const obtenerProductos = async(busqueda="") =>{
    try {
        let {data} = await axios.get(`${URL}?search=${busqueda}`);
        return data;
    } catch (error) {
        throw error
    }
}

//obtener un solo producto por su Id
const obtenerProductosPorId = async(id)=>{
    try {
        let {data} = await axios.get(`${URL}/${id}`);
        return data;
    } catch (error) {
        throw error
    }
}

//obtener producto por su categoria
const obtenerProductosPorCat = async(idCat)=>{
    try {
        let {data} = await axios.get(`${URL}?categoria_id=${idCat}`);
        return data;
    } catch (error) {
        throw error
    }
}

//obtener productos pero limitar la cantidad y pagina x pagina, como grupitos
const obtenerProductosPorPagina = async(page=1, limit=9) =>{
    try {
        let {data} = await axios.get(`${URL}?page=${page}&limit=${limit}`);
        return data;
    } catch (error) {
        throw error        
    }
}

export {
    obtenerProductos,
    obtenerProductosPorId,
    obtenerProductosPorCat,
    obtenerProductosPorPagina
}