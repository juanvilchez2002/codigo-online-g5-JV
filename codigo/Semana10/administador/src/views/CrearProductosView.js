import { useState } from "react";
import FormProducto from "../components/FormProducto";
import {useNavigate} from "react-router-dom"
import { crearProducto } from "../services/productosServices";
import Swal from "sweetalert2"

//basicamente es una ariable global que no
//esta definida
let imagen;

export default function CrearProductosView() {

    /**
     * creamos un estado para manejar n inputs
     */

    const [value, setValue] = useState({
        nombre:"",
        descripcion:"",
        precio:0
    });

    //instanciamos useNavigate
    const navigate = useNavigate();

    /**
     * creamos una función para poder modificar 
     * el estado value
     */

    const actualizarInput = (e)=>{
        console.log(e, e.target.name, e.target.value);
        //usando el setValue para actualizar
        //pasamos un objeto y spread de value que
        //es un objeto
        setValue({
            ...value,
            //pasamos el nombre y el valor
            [e.target.name]: e.target.value,
        });
    }

    //creamos una función para grabar
    const manejarSubmit = async (e) =>{
        //evitamos que la pagina se recarge
        e.preventDefault();

        //siempre intenten indicar al usuario que 
        //esta pasando o que ha ocurrido
        try {
            await crearProducto(value);
            console.log("Producto Nuevo - Creado");

            //creando un mensaje de exito
            //es un await
            await Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Éxito',
                text: 'El producto ha sido creado¡¡¡¡',
                //es para que no me muestre un boton de cierre
                showConfirmButton: false,
                timer:2000
              })

            //despues de crear el producto se hace
            //un navigate a la ListaProductoView
            //home
            navigate("/");

        } catch (error) {
            console.log(error);
        }

    };

    //funcion que maneja la imgane
    const manejarImagen = (e) =>{
        e.preventDefault();
        console.log(e.target.files);
        imagen = e.target.files[0];
        console.log(imagen);
    }

    return (
        <div>
            <FormProducto 
                value={value} 
                actualizarInput={actualizarInput}
                manejarSubmit={manejarSubmit} 
                manejarImagen={manejarImagen}
            />
        </div>
    )
}
