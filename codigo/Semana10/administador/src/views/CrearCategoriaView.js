import { useState, useRef } from "react"
import { crearCategoria } from "../services/categoriaServices"
import {subirImagen} from "../services/productosServices"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

//variable global
let imagen;

export default function CrearCategoriaView() {

    //creamos unas referencia en vez de estados
    //las referencias van a funcionar como ID's
    const refNombre = useRef()
    const refDescripcion = useRef()

    //referenciamos useNavigate, ya que no se
    //puede usar directamente
    const navigate = useNavigate();

    //para manejar el submit
    const manejarSubmit = async(e) =>{
        e.preventDefault();
        let nuevaCategoria = {
            //creamos un objeto para enviar a mockapi
            //mediante las referencias se puede
            //obtener el valor actual
            //NO ES RECOMENDABLE USARLO
            //NO SE REDENRIZA Y useEffect TRABAJA
            //CON ESTADOS, NO SE PUED AUTOMATIZAR
            //es ideal usarlo en login
            nombre: refNombre.current.value,
            descripcion: refDescripcion.current.value
        }        
        
        try {
            //subimos la imagen
            const urlImagenSubida = await subirImagen(imagen);
    
            //creamos la categoria
            const categoriaCreada = await crearCategoria({...nuevaCategoria,imagen:urlImagenSubida})

            await Swal.fire({
                icon: "success",
                title: "Categoria Creada"
            })

            navigate("/listacategorias");
        } catch (error) {
            throw error;
        }
    }

     //funcion que maneja la imgane
     const manejarImagen = (e) =>{
        e.preventDefault();
        imagen = e.target.files[0];
        console.log(imagen);
    }

    return (
        <div>
            <h1 className="mb-3">
                Crear nueva categoria
            </h1>
            <form 
                onSubmit={
                    (e)=>{
                        manejarSubmit(e)
                    }
                }
            >
                <div className="mb-2">
                    <label className="form-label">
                            Nombre Cartegoria: 
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        ref={refNombre}
                    />

                    <label className="form-label">
                            Descripción Cartegoria: 
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        ref={refDescripcion}
                    />

                    <label className="form-label">
                            Imagen Cartegoria: 
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={
                            (e)=>{
                                manejarImagen(e)
                            }
                        }
                    />
                </div>

                <button 
                    className="btn btn-primary mb-5"
                    type="submit"
                >
                    Guardar
                </button>
            </form>
        </div>
    )
}
