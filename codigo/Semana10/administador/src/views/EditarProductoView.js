import { useState, useEffect } from "react";
//useParamt
//me permite obtener los parametros que estoy pasando
//por la URL
import { useParams } from "react-router-dom";
import FormProducto from "../components/FormProducto";
import { obtenerProductoPorId, editarproductoPorId } from "../services/productosServices";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function EditarProductoView() {

    //creamos un estado
    const [value, setValue] = useState({
        nombre:"",
        descripcion:"",
        precio:0
    })

    //usrParams es un objeto que va a contener todos
    //los parametros que se pase por la URL
    //obtenemos el parametro (id) que pasemos por
    //la URL, como es un obj se puede desestructurar
    const {id} = useParams();

    console.log({id});

    const navigate = useNavigate();

    //obtenemos el producto por medio del id
    const getProducto = async () => {
        try {
            const prodObtenido = await obtenerProductoPorId(id);
            //el producto obternido de mockapi
            //lo paso a value, donde actualizo
            //el estado
            setValue(prodObtenido);
            console.log(prodObtenido);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 
     * 
     */

     const manejarSubmit = async (e) => {
        e.preventDefault();
        try {
            await editarproductoPorId(id, value);
            await Swal.fire({
                icon: "success",
                title: "Éxito",
                text: "Producto Editado Exitosamente",
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

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




    //se ejecuta solamente en el montaje
    useEffect(()=>{
        getProducto();
    }, []);

    return (
        <div>
            {/**
             *  enviamos el value actualizado
             *  y se mostrara en el FormProducto
             */}
            <FormProducto 
                value={value}
                actualizarInput={actualizarInput}
                manejarSubmit={manejarSubmit}
            />
        </div>
    )
}
