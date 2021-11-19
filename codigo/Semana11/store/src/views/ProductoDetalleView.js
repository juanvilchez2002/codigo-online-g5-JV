import { useState, useEffect } from "react";
//para obtener los id's de las rutas
import { useParams } from "react-router-dom";
import { obtenerProductosPorId } from "../services/productoService";

export default function ProductoDetalleView() {

    //creamos un estado producto
    const [producto, setProducto] = useState(null)

    //obtener un objeto con todos los parametros de la url
    const {id} = useParams();

    //para manejar la cantidad que se compra, contador
    const [cantidad, setCantidad] = useState(1);

    //función para ser llamado cuando se realiza la carga
    //de la pgina
    const getProducto = async()=>{
        try {
            const prodObtenido = await obtenerProductosPorId(id);
            setProducto(prodObtenido);
        } catch (error) {
            throw error
        }
    }


    //función para modificar la cantidad comprada
    const modificarCantidad = (numero) => {
        //para controlar que no muestre número negativos
        if(cantidad + numero === 0){
            return
        }
        setCantidad(cantidad+numero);
    }

    //ejecutar en el montaje
    useEffect(() => {
        getProducto();
    }, [])

    return (
        
        <div className="container">
            {/**
                * en muchos casos es necesario y 
                * recomendable validar si algo es 
                * undefined o null
            */}
                <div className="row my-3">
                    {/**
                     * si el producto es null, undefined o
                     * algun valor falsy, 
                     */}
                        {
                            producto?(
                                <>
                                    <div className="col-12 col-md-6">
                                        <img 
                                            src={producto.imagen}
                                            alt={producto.nombre}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <h4>
                                            {producto.nombre}
                                        </h4>
                                        <h3>
                                            {producto.precio}
                                        </h3>
                                        <hr/>
                                        <p>
                                            {producto.descripcion}
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <button 
                                                className="btn btn-dark"
                                                onClick={()=>{
                                                    modificarCantidad(-1)
                                                }}
                                            >
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <h4 className="mx-2">
                                                {cantidad}
                                            </h4>
                                            <button className="btn btn-dark"
                                                onClick={()=>{
                                                    modificarCantidad(+1)
                                                }}
                                            >
                                                <i class="fas fa-plus"></i>
                                            </button>

                                            <button className="btn btn-outline-dark ms-3">
                                                <i className="fa fa-cart-plus">
                                                </i>
                                                Añadir a Carrito
                                            </button>   
                                        </div>
                                        <button className="btn btn-outline-dark btn-lg mt-2">
                                            Comprar ahora!
                                        </button>
                                    </div>
                                </>
                            ):null
                        }
                </div>
        </div>
    )
}

