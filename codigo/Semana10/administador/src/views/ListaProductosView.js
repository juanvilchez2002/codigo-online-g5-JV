//vamos a usar un servicio para manejar datos
//importanos useEffect para que se ejecute
import {useState, useEffect} from "react";
//importando el servicio para mostrar los productos
import { obtenerProductos } from "../services/productosServices";
//Link es un equivalente a <a></a>
import { Link } from "react-router-dom";


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
                                    <Link className="btn btn-info" 
                                    to={`/editarproducto/${id}`}
                                >
                                        Editar
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
