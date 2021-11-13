//importando bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import ListaProductosView from "./views/ListaProductosView";
import CrearProductosView from "./views/CrearProductosView";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import EditarProductoView from "./views/EditarProductoView";
import ListaCategoriasView from "./views/ListaCategoriasView";
import CrearCategoriaView from "./views/CrearCategoriaView";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/**
           *  Route path="/url" element={<Componente/>}
           * 
           */}

          <Route
              path="/" element={<ListaProductosView/>}
          />

          <Route
              path="/crearproducto" element={<CrearProductosView/>}
          />

          {/**
           *  cuando quiero indicar que voy a
           *  pasar un parametro utilizo:
           *  path="/URL/:nombre_parametro"     
           */}
          <Route
              path="/editarproducto/:id" element={<EditarProductoView/>}
          />

          <Route path="/listacategorias" element={<ListaCategoriasView />} />

          <Route path="/crearcategoria" element={<CrearCategoriaView />} />

        </Routes>
      </Router>
      
      

      {/* <ListaProductosView/>
      <CrearProductosView/> */}

    </div>
  )
}
