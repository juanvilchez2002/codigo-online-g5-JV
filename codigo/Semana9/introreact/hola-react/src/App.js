import { useState } from "react"; //esto ya existe en React
//App es el componente principal
import Main from "./components/Main";


function App() {
  
  //1. Un conponente solamente debe retornar 01 elemento
  //2. Toda etiqueta debe estar cerrada
  //3. Si desea agregar JS en el JSX (HTML), hay que poner {}


  //creando un estado
  //const [estado, funcEstado] = useState(estado_inicial)
  const [contador, setContador] = useState(0);
  const [titulo, setTitulo] = useState("Mi Titulo")

  //let titulo = "Titulo Variable";  

  //contador=5;
  
  let actualizarContador = ()=>{
    console.log("ejecutando");
    setContador(contador+1)
  }

  return (
    <>
      <header>
        <h1>
          {titulo}
        </h1>
        <p>
          {contador}
        </p>
        <img 
          src="https://picsum.photos/200" alt="imagen"
        />
        <br/>
        <button onClick={actualizarContador}>Aumentar</button>
        <br/>
        <button 
          onClick={()=>{
            setTitulo("Titulo con React")
            }}
        >
          Cambiar titulo
        </button>     
      </header>

        {/*
            para llamar a componentes que tengn JSX, los invoco como si fueran etiquetas de 
            HTML con la misma instancia
        */}
        <Main />
    </>
  );
}

export default App;
