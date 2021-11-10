

export default function Producto({item, anadirACarrito}) {
    /**
     * como item es un obj que contiene precio,
     * id, descripción, stock; se puede 
     * desestructurar
     */
    const {id, nombre, descripcion, precio, imagen}=item;

    const ejecutarCarrito = () =>{
    //     let objCarrito = {
    //         id: id,
    //         nombre: nombre,
    //         precio: precio
    //     }
        let objetoCarrito = {
            id,
            nombre,
            precio
        }
        //actualizamos el estado de carrito
        anadirACarrito(objetoCarrito)
    }
    
    return (
        <div className="producto">
            <img 
                className="img-top" 
                src={imagen}
                alt="imagen"
            />
            <div className="text-bottom">
                <h4>
                    {nombre}
                </h4>
                <p>
                    {descripcion}
                </p>
                <div className="prod-info">
                    <span>
                        S/. {precio}
                    </span>
                    <button                         className="btn-agregar"
                        onClick={
                            ejecutarCarrito
                        }
                    >
                        Agregar
                    </button>
                </div>
            </div>

        </div>
    )
}
