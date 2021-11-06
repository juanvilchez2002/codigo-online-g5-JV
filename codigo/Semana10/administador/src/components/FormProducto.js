//componente


export default function FormProducto({value, actualizarInput, manejarSubmit}) {

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
