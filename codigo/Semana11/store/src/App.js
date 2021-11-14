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

export default function App() {
  return (
        <AuthContextProvider>          
            {/* aquí dentro del provider puedo poner tanto componentes como rutas */}
           {/** <LoginView />*/ }
          <Router>
            <Navegacion/>
            <Routes>
              <Route path="/" element={<HomeView/>}/>
              <Route path="/login" element={<LoginView/>}/>
              <Route path="/checkout" element={
                <PrivateRoute>
                  <CheckOutView/>
                </PrivateRoute>
              }/>
            </Routes>
          </Router>
        </AuthContextProvider>
  )
}

