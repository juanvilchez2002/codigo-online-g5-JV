//agregando bootstrap pada darle estilos
import "bootstrap/dist/css/bootstrap.min.css"
//importamos Auth
import { AuthContextProvider } from "./context/authContext";
//para generar rutas
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginView from "./views/LoginView"
import HomeView from "./views/HomeView"
import CheckOutView from "./views/CheckOutView"
import Navegacion from "./components/Navegacion";
import ProductoDetalleView from "./views/ProductoDetalleView";
import CarritoContextProvider from "./context/carritoContext";
import CarritoView from "./views/CarritoView";
import NotFound from "./views/NotFound";



export default function App() {
  return (
        <AuthContextProvider>    
          <CarritoContextProvider>
              {/* aquí dentro del provider puedo poner tanto componentes como rutas */}
              {/** <LoginView />*/ }
              <Router>
                <Navegacion/>
                <Routes>
                  {/**
                   * cuando quiero poner una pagina de 404, le infico el path="*" y al principio
                   * 
                   */}
                  <Route path="*" element={<NotFound/>}/>
                  <Route path="/" element={<HomeView/>}/>
                  <Route path="/login" element={<LoginView/>}/>
                  <Route path="/detalleproducto/:id" element={<ProductoDetalleView/>}/>
                  <Route path="/carrito" element={<CarritoView/>}/>
                 <Route path="/checkout" element={
                    <PrivateRoute>
                      <CheckOutView/>
                    </PrivateRoute>
                  }/>
                </Routes>
              </Router>
          </CarritoContextProvider>                    
        </AuthContextProvider>
  )
}

