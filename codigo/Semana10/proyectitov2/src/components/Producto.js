

export default function Producto() {
    return (
        <div className="producto">
            <img 
                className="img-top" 
                src="https://picsum.photos/200"
                alt="imagen"
            />
            <div className="text-botton">
                <h4>
                    Producto
                </h4>
                <p>
                    Lorem ipsum dolor sit.
                </p>
                <div className="prod-info">
                    <span>
                        S/. 25.00
                    </span>
                    <button className="btn-agregar">
                        Agregar
                    </button>
                </div>
            </div>

        </div>
    )
}
