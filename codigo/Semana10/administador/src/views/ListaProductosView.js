//vamos a usar un servicio para manejar datos
//importanos useEffect para que se ejecute
import {useState, useEffect} from "react";
//importando el servicio para mostrar los productos
import { obtenerProductos, eliminarProuducto } from "../services/productosServices";
//Link es un equivalente a <a></a>
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ListaProductosView() {

    //creamos un estado para productos
    //que sera un arreglo vacio
    const [productos, setProductos] = useState([]);

    //obtendremos lor productos
    const getProductos = async()=>{
        try {
            //ejecutamos obtenerProductos 
            let productosObtenidos = await obtenerProductos();

            //despues que obtenemos los datos,
            //actualizamos el estado
            setProductos(productosObtenidos);
           
           //console.table(productosObtenidos)
        } catch (error) {
            throw error
        }
    }

    //SweetAlert2 usa promesas
    //muestra un mensaje para ver si podemos
    //eliminar un producto
    const verificarEliminar = async(id) =>{
        const respuesta = await Swal.fire({
            icon:"warning",
            title:"¿Desea eliminar el producto?",
            text:"Esta acción es irreversible.",
            showConfirmButton:true,
            showDenyButton:true,
            confirmButtonText:"Si, Eliminar",
            denyButtonText:"No, Cancelar",
        });
        console.log(respuesta);
        //verificando su el usuario ha confirmado
        //para eliminar productor
        if(respuesta.isConfirmed){
            try {
                await eliminarProuducto(id);
                Swal.fire({
                    icon:"success",
                    title: "Producto Eliminado¡¡"
                })
                //actualizamos la lista de productos
                getProductos();
            } catch (error) {
                console.log(error);
            }
        }
    }

    //usamos el useEffect para que se ejecute al iniciar el proyecto
    useEffect(()=>{
        getProductos();
    }, [])

    return (
        <div>
            <h1>
                Productos Registrados
                <Link to="/crearproducto" className="btn btn-primary mx-2">
                    Crear Producto    
                </Link>
            </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Descripción
                        </th>
                        <th>
                            Precio
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map(({nombre, descripcion, precio, id}, i)=>(
                            <tr key={i}>
                                <td>
                                    {nombre}
                                </td>
                                <td>
                                    {descripcion}
                                </td>
                                <td>
                                    {precio}
                                </td>
                                <td>
                                    <Link 
                                        className="btn btn-info me-2" 
                                        to={`/editarproducto/${id}`}
                                >
                                        Editar
                                    </Link>
                                    <buttom 
                                        className="btn btn-danger"
                                        onClick={
                                            ()=>{
                                                verificarEliminar(id);
                                            }
                                        }
                                    >
                                        Eliminar
                                    </buttom>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
