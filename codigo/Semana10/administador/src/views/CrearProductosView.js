import { useState } from "react";
import FormProducto from "../components/FormProducto"

export default function CrearProductosView() {

    /**
     * creamos un estado para manejar n inputs
     */

    const [value, setValue] = useState({
        nombre:"",
        descripcion:"",
        precio:0
    });

    /**
     * creamos una función para poder modificar 
     * el estado value
     */

    const actualizarInput = (e)=>{
        console.log(e.target.name, e.target.value);
        //usando el setValue para actualizar
        //pasamos un objeto y spread de value que
        //es un objeto
        setValue({
            ...value,
            //pasamos el nombre y el valor
            [e.target.name]: e.target.value,
        });
    }
    return (
        <div>
            <FormProducto 
                value={value} 
                actualizarInput={actualizarInput}
            />
        </div>
    )
}
