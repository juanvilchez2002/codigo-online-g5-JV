import { useState } from "react";
import FormProducto from "../components/FormProducto";
import {useNavigate} from "react-router-dom"
import { crearProducto, subirImagen } from "../services/productosServices";
import Cargando from "../components/Cargando";
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

    //estado para mostrar icono cargando
    const [loading, setLoading] = useState(false);

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
            //cuando comience el proceso de crear el producto
            setLoading(true)

            //subimos primero la imagen, y obtengo la
            //url
            const urlImagenSubida = await subirImagen(imagen);
            console.log(urlImagenSubida)

            //y le agrego al array
            await crearProducto({...value, imagen:urlImagenSubida});
            console.log("Producto Nuevo - Creado");

            //cuando termino de cargar
            setLoading(false)

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
        <>
            {
                loading===true?(
                    <Cargando/>
                ):(
                    <FormProducto 
                        value={value} 
                        actualizarInput={actualizarInput}
                        manejarSubmit={manejarSubmit} 
                        manejarImagen={manejarImagen}
                    />
                )
            }
        </>
    )
}
