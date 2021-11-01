import {useState} from "react";
//importando css, cuando importamos algo que no es JS tenemos que añadirle la extensión
import "bootstrap/dist/css/bootstrap.min.css";
import AnadirTarea from "./components/AnadirTarea";
import ListaTarea from "./components/ListaTarea";

export default function App() {

  const [tareas, setTareas] = useState([])

  return (
    <div>
      <AnadirTarea 
        tareas={tareas} 
        setTareas={setTareas} 
      />
      <ListaTarea 
        tareas={tareas} 
      />
    </div>
  )
}
