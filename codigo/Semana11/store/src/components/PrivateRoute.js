//mediante el context sabremos si el 
//usuario esta logueado o no
import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { Navigate } from "react-router-dom";

export default function PrivateRoute(props) {
    //props.children es literalmente no se que
    //componente voy a renderizar pero lo 
    //renderiza de tods maneras, el componente
    //que este dentro de PrivateRoute

    const {user} = useContext(AuthContext)
    console.log("Mostrando estado user: ", user);
    //usamos Navigate para rediccionar
    //si el usuario es diferenre de NULL
    //-V: retorno el hijo q me toque
    //-F: lo redirijo a Login con Navigate
    return user!==null? props.children:<Navigate to="/login"/>     
}
