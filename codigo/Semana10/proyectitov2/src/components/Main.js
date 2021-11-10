import Producto from "./Producto"

//<Main listaPlatillos={listaPlatillos}/>
//llamo a la función Main
//Main({listaPlatillos})
export default function Main({listaPlatillos, anadirACarrito}) {
    return (
        <main>
            {   /**
                *  item es c/platillo que esta 
                *  dentro de la lista, se pasa 
                *  como props
                */
                listaPlatillos.map((item, i)=>(
                    <Producto 
                        key={i} 
                        item={item}
                        anadirACarrito={anadirACarrito}
                    />
                ))
            }
        </main>
    )
}
