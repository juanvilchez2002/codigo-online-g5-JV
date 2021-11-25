import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
//para obtener los id's de las rutas
import { useParams, useNavigate } from "react-router-dom";
import { obtenerProductosPorId } from "../services/productoService";
//libreria para ampliar la imagen
import ReactImageMagnify from "react-image-magnify";
import { obtenerCategorias } from "../services/categoriaService";

export default function ProductoDetalleView() {

    //creamos un estado producto
    const [producto, setProducto] = useState(null)

    //obtener un objeto con todos los parametros de la url
    const {id} = useParams();

    //obtener la función añadir a carrito
    const {anadirACarrito} = useContext(CarritoContext);

    //para manejar la cantidad que se compra, contador
    const [cantidad, setCantidad] = useState(1);

    //para obtener las categorias
    const [categoria, setCategoria] = useState("");

    //links
    const navigate = useNavigate();

    //función para ser llamado cuando se realiza la carga
    //de la pgina
    const getProducto = async()=>{
        try {
            const prodObtenido = await obtenerProductosPorId(id);
            //para obtener la cat del producto
            const catObtenidas = await obtenerCategorias();
            //hacer match con la cat del prod y las categorias
            const catProducto = catObtenidas.find((cat) => cat.id === prodObtenido.categoria_id);
            setProducto(prodObtenido);
            setCategoria(catProducto); //todo el objeto de la categoria, id, nombre, descripcion e imagen
        } catch (error) {
            console.log(error);
        }
    };
    


    //función para modificar la cantidad comprada
    const modificarCantidad = (numero) => {
        //para controlar que no muestre número negativos
        if(cantidad + numero === 0){
            return
        }
        setCantidad(cantidad+numero);
    }

    //para añadir productos al carrito
    const anadirACarritoContext = ()=>{
        const {id, nombre, precio } = producto;
        /**
         * const nuevoProducto = {
         *  id: id,
         *  precio: precio,
         *  nombre: nombre
         * }
         */
        const nuevoProducto = {
            id,
            nombre,
            precio,
            cantidad,
        }

        anadirACarrito(nuevoProducto);
    }

    //para comprar
    const ejecutarCompraAhora = ()=>{
        anadirACarritoContext();
        navigate("/checkout")
    }

    //


    //ejecutar en el montaje
    useEffect(() => {
        getProducto();
    }, [])

    return (
        <>
            <div
                className="title-product py-5 mb-5"
                style={{
                    backgroundImage: `url('${categoria.imagen}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <h2 className="fw-bold container" style={{color:"white"}}>
                    {/* si categoria existe, pregunta por la propiedad nombre */}
                    {categoria?.nombre} - {producto?.nombre}
                </h2>
            </div>
        
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
                                        {/* <img 
                                                src={producto.imagen}
                                                alt={producto.nombre}
                                                className="img-fluid"
                                        />*/}


                                            <ReactImageMagnify
                                                {...{
                                                        smallImage: {
                                                            alt: producto.nombre,
                                                            isFluidWidth: true,
                                                            src: producto.imagen,
                                                        },
                                                        largeImage: {
                                                            src: producto.imagen,
                                                            width: 1600,
                                                            height: 1200,
                                                        },
                                                    }
                                                }
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

                                                <button 
                                                    className="btn btn-outline-dark ms-3"
                                                    onClick={anadirACarritoContext}
                                                >
                                                    <i className="fa fa-cart-plus">
                                                    </i>
                                                    Añadir a Carrito
                                                </button>   
                                            </div>
                                            <button 
                                                className="btn btn-outline-dark btn-lg mt-2"
                                                onClick={ejecutarCompraAhora}
                                            >
                                                Comprar ahora!
                                            </button>
                                        </div>
                                    </>
                                ):null
                            }
                    </div>
            </div>
        </>
    )
}

