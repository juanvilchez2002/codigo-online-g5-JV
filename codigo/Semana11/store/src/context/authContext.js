//archivo de autenticación
import {useState, useEffect, createContext} from "react";
import {auth, firebase} from "../config/Firebase";

//creamos el contexto
export const AuthContext = createContext();

//proveedor de google, sirve para poder ejecutar
//las funciones de ingresa, salir y ver el 
//estado del login
const proveedorGoogle = new firebase.auth.GoogleAuthProvider();

//creamos un proveedor
export const AuthContextProvider = (props) =>{
    //creamos nuestro estado global
    const [user, setUser] = useState(null);

    //creamos una función para logearnos
    const signIn = async() =>{
        const rptaGoogle = await auth.signInWithPopup(proveedorGoogle);
    };
    
    //función para cerrar sesion o logueo
    const signOut = () => auth.signOut();

    useEffect(()=>{
        //nos va indicar el estado del usuario
        //loguea y desloguee
        //en caso el usuario ingrese o salga del
        //app se va a disparar esta funcion
        //para ver que hay, si no esta logueado
        //o se sale retornara null, si se logea
        //retornara un objeto
        return auth.onAuthStateChanged((user)=>{
            //user es null(nologueado) o es un 
            //objeto (loqueado)
            setUser(user);
        })
    },[]);


    return (
        <AuthContext.Provider
        //value es lo que va a brindar desde su 
        //estado global
            value={{user, signIn, signOut}}
        >
            {/*provider va a funcionar como una 
            //caja generica transparente, 
            //componente generico que va a 
            //contener otrs componentes pero
            //sin saber exactamente que 
            //componentes son*/}
            {props.children}
        </AuthContext.Provider>
    )
};