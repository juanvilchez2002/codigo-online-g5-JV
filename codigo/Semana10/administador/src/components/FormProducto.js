//componente
import { useRef } from "react";

export default function FormProducto({value, actualizarInput, manejarSubmit, manejarImagen, categorias}) {
    
    //es una referencia
    //va a ser como trabajar como un id interno de 
    //react 
    const inputFile = useRef();

    console.log(value);

    /*
        todo input debe estar amarrado a un estado
        pero se creara un objeto para manejar todos 
        los input
    */

    return (
        <div>
            {/**
             *  el evento que envia los datos
             */}
            <form onSubmit={(e) =>{
                manejarSubmit(e);
            }}>
                
                <div className="mb-3">
                    <label className="form-label">
                        Nombre del Producto: 
                    </label>
                    <input
                        type="text"
                        className="form-control" 
                        name="nombre" 
                        value={value.nombre}
                        onChange={
                            (e)=>{
                                actualizarInput(e);
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Descripción: 
                    </label>
                    <input
                        type="text"
                        className="form-control" 
                        name="descripcion" 
                        value={value.descripcion}
                        onChange={
                            (e)=>{
                                actualizarInput(e);
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Precio: 
                    </label>
                    <input
                        type="number"
                        className="form-control" 
                        name="precio" 
                        value={value.precio}
                        onChange={
                            (e)=>{
                                actualizarInput(e);
                            }
                        }
                    />
                </div>
                {/**
                 * para subir img
                 */}
                <div className="mb-3">
                    <label className="form-label">
                        Imagen:
                    </label>


                    {/*<input
                        type="file" 
                        className="form-control"
                        ref={inputFile}
                        onChange={(e)=>{
                            manejarImagen(e)
                        }}
                    />*/}


                    <input
                        type="file"
                        className="form-control"
                        ref={inputFile}
                        onChange={(e) => {
                            manejarImagen(e);
                        }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Categoria:
                    </label>

                    <select
                        value={value.categoria_id}
                        className="form-select"
                        name="categoria_id"
                        onChange={(e)=>{
                            actualizarInput(e);
                        }}
                    >
                        {
                            categorias.map((cat, i)=>(
                                <option value={cat.id} key={i}>
                                    {cat.nombre}
                                </option>
                            ))
                        }
                    </select>
                </div>

                    <button 
                        className="btn btn-primary"
                        type="submit"
                    >
                        Guardar
                    </button>
            </form>
        </div>
    )
}
