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
  const [titulo, setTitulo] = useState("Mi Titulo");
  const [texto, setTexto]= useState("textito");



  //let titulo = "Titulo Variable";  

  //contador=5;
  
  let actualizarContador = ()=>{
    console.log("ejecutando");
    setContador(contador+1)
  }

  //
  const actualizarTexto = (e) =>{
    console.log(e);
    //actualizar el estado
    setTexto(e.target.value)
  };

  //arreglo de productos
  const productos = [
    {
      nombre: "peluche",
      precio: 50
    },{
      nombre: "Furro 300",
      precio: 1
    },{
      nombre: "Pingüino",
      precio: 100
    },{
      nombre: "GPU RTX 3060",
      precio: 3000
    }
  ]

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
        {/* <Nombre_del_componente/> */}
        {/* props son objetos */}

        <Main 
          subtitulo="Primer subtitulo"
          mostrarInfo={true}
          numero={2}
          tituloPadre={titulo}
          actualizarTitulo={setTitulo}
        />

        <Main 
          subtitulo="Segundo subtitulo"
          mostrarInfo={false}
          numero={2}
          tituloPadre={titulo}
          actualizarTitulo={setTitulo}
        />

        {/*componentes controlados*/}
        {/** todo input debe estar amarrado a un estado */}
        <div>
          <input 
            type="text" 
            placeholder="Ingrese Texto..." 
            value={texto} 
            onChange={(e)=>{actualizarTexto(e)}}/>
        </div>

        {/**
         * renderizar arreglos
         * cuando renderizemos arregos necesitamos un key x cada item y tienen 
         * que ser unicos
         */}
         <ul>
           {
             productos.map(({nombre, precio}, i) =>(
               (
                 <li key={i}>
                   {`${nombre} - ${precio}`}
                 </li>
               )
             ))
           }
         </ul>
    </>
  );
}

export default App;
