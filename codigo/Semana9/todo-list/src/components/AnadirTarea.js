import { useState } from "react";

export default function AnadirTarea({tareas, setTareas}){

    const [texto, setTexto] = useState("");

    const agregarNuevaTarea = ()=>{
        setTareas([...tareas, texto]);
        setTexto("")
    }

    return(
        <div className="form-group">
            <input 
                type="text" 
                class="form-control"
                value={texto}
                onChange={
                    (e)=>{
                        setTexto(e.target.value)
                    }
                }
            />
            <button 
                className="btn btn-primary"
                onClick={agregarNuevaTarea}
            >
                Agregar Tarea
            </button>

        </div>
    )
}