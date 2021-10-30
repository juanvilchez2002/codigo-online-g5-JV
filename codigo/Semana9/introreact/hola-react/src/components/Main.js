//nuevo componente
//reglas del componente
//1. función o clase, puede ser una función flecha
//2. el nombre de la función/componente debe que comenzar con Mayusculas
//3. la función/componente debe de retornar algo
//3.1 el return sera el JSX(HTML) que se dibujara
//3.2 JSX utiliza (<html></html>), para indicar que dibujará elementos
//4. tiene que exportarse por defecto, para que otros componentes lo puedan reutilizar

function Main(){
    return(
        <main>
            <div>
                <h2>
                    Subtitulo
                </h2>
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </main>
    );
}


//exportar
export default Main;