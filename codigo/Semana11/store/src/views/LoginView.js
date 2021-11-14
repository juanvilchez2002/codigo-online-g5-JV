//es un hook que permite trabajar el contexto

import { useContext } from "react";
//para indicar q contexto nos referimos
import { AuthContext } from "../context/authContext";

export default function LoginView() {

    //
    const {signIn} = useContext(AuthContext);

    {
        //console.log("valor contexto: ",signIn)
    }
    return (
        <button className="btn btn-danger btn-lg" onClick={signIn}>
            Ingresa con Google
        </button>
    )
}
