import { useEffect, useState } from "react";
import { obtenerProductosPorPagina, obtenerProductos  } from "../services/productoService";
import {obtenerCategorias} from "../services/categoriaService"
import ProductoCard from "../components/ProductoCard";
import Slider from "@mui/material/Slider"
import { useParams } from "react-router-dom";//para buscar producto por nombre o algun detalle

export default function ProductosConFiltrosView() {

    //creamos los estados
    const [productosOriginal, setProductosOriginal] = useState([]);//nunca se modifica
    const [productos, setProducto] = useState([]);//estado para producto
    const [pagina, setPagina] = useState(1);
    const [limite, setLimite] = useState(20);
    const [precio, setPrecio] = useState([0,500]);//estado para precio

    const [categorias, setCategorias] = useState([]);

    const {busqueda} = useParams()

    console.log(busqueda);

    //obtenemos los productos
    const getData = async () => {
        try {
            let prodObtenidos;
            if (typeof busqueda === "undefined") {
                prodObtenidos = await obtenerProductosPorPagina(pagina, limite);
            } else {
                prodObtenidos = await obtenerProductos(busqueda);
            }
            const catObtenidas = await obtenerCategorias();
            setProducto(prodObtenidos);
            setProductosOriginal(prodObtenidos);
            setCategorias(catObtenidas);
        } catch (error) {
            console.log(error); //Swal icon:"error"
        }
    };

    //función que filtra por categoria
    const filtrarPorCategoria = (idCategoria) =>{
        const productosFiltrados = productosOriginal.filter((prod)=>
            prod.categoria_id === idCategoria
        )
        setProducto(productosFiltrados)
    };

    //obtener el precio de los productos
    const manejarFiltroPrecio = (evento, nuevoRango)=>{
        setPrecio(nuevoRango);
        //realizar el filtro deacuerdo a los precios
        //filtro el arreglo por los que tengan precio
        //mayor o igual que el menor valor del Slider
        //menor o igual qie el mayor valor dle Slider
        const productosPorPrecio = productosOriginal.filter((prod) => 
        prod.precio >= precio[0] && prod.precio <= precio[1])
        setProducto(productosPorPrecio)
    }

    //lo ejecutamos para que se ejecute en el montaje
    useEffect(()=>{
        getData();
    }, [])

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-around my-3 px-5">
                    <button className="btn btn-outline-dark btn-sm" onClick={()=>{
                        setProducto(productosOriginal)
                    }}>
                        Todas las Categorias
                    </button>
                    {
                        categorias.map((cat, i) =>(
                            <button 
                                className="btn btn-outline-dark btn-sm" 
                                key={i}
                                onClick={()=>{
                                    filtrarPorCategoria(cat.id);
                                }}
                            >
                                {
                                    cat.nombre
                                }
                            </button>
                            )
                        )
                    }
                </div>

                {
                    //para adicionar el slider de precio
                }
                <div>
                    <small>
                        Filtro por precio:
                    </small>
                    <Slider
                        value={precio}
                        onChange={manejarFiltroPrecio}
                        valueLabelDisplay="auto"
                        min={0}
                        max={500}
                    >
                    </Slider>
                </div>


                <div className="row my-3">
                    {
                        //apartir de productos mostramos los productos
                    }
                    {productos.map((prod, i) => (
                        <div className="col-12 col-md-6 col-lg-4" key={i}>
                            <ProductoCard producto={prod} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
