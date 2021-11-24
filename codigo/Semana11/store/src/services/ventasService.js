import axios from "axios";

const URL = `${process.env.REACT_APP_API}ventas`;

const guardarVenta = async(nuevaVenta) =>{
    try {
        //creando los headers
        const headers = {
            "Context-Type": "application/json"
        }

        const {data} = await axios.post(URL, nuevaVenta, headers)
        return data
    } catch (error) {
        throw error
    }
}

export {guardarVenta};