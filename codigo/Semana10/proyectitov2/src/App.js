//se pueden importar, imagenes, css, pero si no es JS es necesario colocarle la extensión
//OJO los estilos que se importa no afectan solamente al componente en que lo esto importando
//afectan a toda la aplicación
import "./css/estilos.css"
import Header from "./components/Header"
import NavSide from "./components/NavSide"
import Main from "./components/Main"

export default function App() {
  return (
    <div className="contenedor">
      <div className="aplicacion">
          <Header/>
        <div className="principal">
          <NavSide/>
          <Main/>
        </div>
      </div>
      <div className="boleta">
        
      </div>
    </div>
  )
}
