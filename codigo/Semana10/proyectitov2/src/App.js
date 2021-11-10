//se pueden importar, imagenes, css, pero si no es JS es necesario colocarle la extensión
//OJO los estilos que se importa no afectan solamente al componente en que lo esto importando
//afectan a toda la aplicación
import "./css/estilos.css"
import {useState} from "react"
import Header from "./components/Header"
import NavSide from "./components/NavSide"
import Main from "./components/Main"
import {listaPlatillos} from "./utils/data"

export default function App() {

  //añadiremos los objetos
  const [carrito, setCarrito] = useState([]);

  const anadirACarrito = (objPlatillo)=>{
    //buscaremos si existe el producto en el 
    //carrito
    //findIndex(): -1 no existe, 0 a + existe
    const existe = carrito.findIndex((plato)=>plato.id === objPlatillo.id);

    //concuimos q no existe
    if(existe === -1){
      //si no existe se añade con la cantidad
      //base de 1
      setCarrito([...carrito, {...objPlatillo, cantidad:1}]);      
    }else{
      //si existe, hay q modificar el carrito
      //(cantidad), y para esp hacemos una 
      //copia
      let carritoTMP = [...carrito];
      //modificamos
      carritoTMP[existe].cantidad += 1;
      setCarrito(carritoTMP);
    }



  }

  return (
    <div className="contenedor">
      <div className="aplicacion">
          <Header/>
        <div className="principal">
          <NavSide/>
          {
            /**
             * <Componente nombre_props={valor_props}/>
             */
          }
          <Main 
            listaPlatillos={listaPlatillos}
            texto="Hola"  
            anadirACarrito={anadirACarrito}
          />
        </div>
      </div>
      <div className="boleta">
        <table className="text-center">
            <thead >
              <tr>
                <th>
                  Plato
                </th>
                <th>
                  P. Unit
                </th>
                <th>
                  Cant.
                </th>
                <th>
                  SubTotal
                </th>
              </tr>
            </thead>
            <tbody>
              {
                carrito.map((plato, i)=>(
                  <tr key={i}>
                    <td>
                      {plato.nombre}
                    </td>
                    <td>
                      S/. {plato.precio}
                    </td>
                    <td>
                      {plato.cantidad}
                    </td>                    
                    <td>
                      {plato.cantidad * plato.precio}
                    </td>
                  </tr>
                ))
              }
              <tr>
                <td colspan="3">
                  TOTAL 
                </td>
                <td>
                  {
                    carrito.reduce((total, plato)=>{
                      return total+(plato.cantidad* plato.precio)
                    },0)
                  }
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}
