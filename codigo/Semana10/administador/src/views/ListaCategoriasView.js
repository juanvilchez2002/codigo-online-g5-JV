import { useState, useEffect } from "react"
import { obtenerCategorias } from "../services/categoriaServices"
import Cargando from "../components/Cargando"
import { Link } from "react-router-dom";

export default function ListaCategoriasView() {

    //creamos 2 estados para carga y categoria
    const [categorias, setCategorias] = useState([]);

    const [loading, setLoading] = useState(false);

    //en el momento del montaje vamos a obtener
    //las categorias
    const getCategorias = async() =>{
        try {
            //cambiamos el loading
            setLoading(true);
            //obtenemos la categorias
            const categoriasObternidas = await obtenerCategorias();
            setCategorias(categoriasObternidas)
            //cambiamos el loading
            setLoading(false)

        } catch (error) {
            throw error
        }
    }

    //en el momento del montaje
    useEffect(() => {
        getCategorias();
    }, []);

    return (
        <>
        {
            loading?(
                <Cargando/>
            ):(
                <>
                    <h1 className="mb-3">Lista Categorias
                    <Link to="/crearcategoria" className="btn btn-primary mx-2">
                        Crear Categoria
                    </Link>
                    </h1>
                    
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre Categoria</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categorias.map((cat, i) => (
                                <tr key={i}>
                                    <td>{cat.nombre}</td>
                                    <td>{cat.descripcion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )

        }
            
        </>
    )
}
