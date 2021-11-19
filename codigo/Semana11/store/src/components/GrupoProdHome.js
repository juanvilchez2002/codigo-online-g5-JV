import { useState, useEffect } from "react"
//para mostrar los productos por pagina
import { obtenerProductosPorPagina } from "../services/productoService"
import ProductoCard from "./ProductoCard"

//productos va a ser un arreglo en la función
//va a agrupar los productos que iran al home
//recibe los productos
//va a dibujar los productos
const GrupoProdHome = () => {

    //estado para productos
    const [productos, setProductos] = useState([])

    //estado para controlar la paginación
    const [pagina, setPagina] = useState(1)
    const [limite, setLimite] = useState(6);

    const getProductos = async() =>{
        try {
            const prodObtenidos = await obtenerProductosPorPagina(pagina, limite);
            //para mostrar solo 6 productos
            //setProductos(prodObtenidos)
            
            //muestra los 6 productos debajo otros 6 productos
            setProductos([...productos, ...prodObtenidos])
        } catch (error) {
                console.log(error);
        }
    };

    //cargamos al iniciar los productos
    useEffect(() => {        
        getProductos();
    }, [pagina]);

    return (
        <div className="container">
            <div className="row my-3">
                    {
                        productos.map((prod, i)=>(                           
                            <div className="col-12 col-md-6 col-lg-4">
                                <ProductoCard 
                                    key={i}
                                    producto={prod}
                                />
                            </div>
                        ))
                    }
                
            </div>
            <div className="d-flex justify-content-center">
                <button 
                    className="btn btn-primary" 
                    onClick={()=>{
                        setPagina(pagina+1)
                    }}
                >
                    Ver más
                </button>
            </div>
        </div>
    )
}

export default GrupoProdHome