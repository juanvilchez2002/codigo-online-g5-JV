//importando bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import ListaProductosView from "./views/ListaProductosView";
import CrearProductosView from "./views/CrearProductosView";

export default function App() {
  return (
    <div>
      
      <ListaProductosView/>
      <CrearProductosView/>

    </div>
  )
}
