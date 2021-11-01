//nuevo componente
//reglas del componente
//1. función o clase, puede ser una función flecha
//2. el nombre de la función/componente debe que comenzar con Mayusculas
//3. la función/componente debe de retornar algo
//3.1 el return sera el JSX(HTML) que se dibujara
//3.2 JSX utiliza (<html></html>), para indicar que dibujará elementos
//4. tiene que exportarse por defecto, para que otros componentes lo puedan reutilizar


//los props se reciben en el hijo con el nombre del "atributo" que se le puso en el componente Padre
//estos props son como los par´metros de una función
//<Main subtitulo="ewrw" tituloPadre={Estado} actualizarInfo={setEstado}/>

function Main({subtitulo, tituloPadre, actualizarTitulo, mostrarInfo}){

    console.log("Estos son los props: ", {subtitulo, tituloPadre, actualizarTitulo, mostrarInfo});

    return(
        <main>
            <div>
                <h2>
                    {subtitulo}
                </h2>
                {
                    /**
                     * renderizado condicional: props, estado, variable
                     * 
                     * si mostrarInfo es true? nuestro esto si es verdad: muestro esto si es false
                     */
                }
                {
                    mostrarInfo? (<p>
                        Lorem ipsum dolor sit amet.
                    </p>): null
                }
                
                <p>
                    El titulo del App es {tituloPadre}
                </p>
                <button onClick={()=>{
                    actualizarTitulo("Titulo desde Main")
                    }}>
                        Actualizar desde Main
                </button>
            </div>
        </main>
    );
}

//exportar
export default Main;