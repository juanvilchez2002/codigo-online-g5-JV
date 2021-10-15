//class = molde, plano, fábrica
class Pokemon{
    //carascteristicas que tiene este plano
    // Nombre;
    // Tipo;
    // Ataque;
    // Defensa;
    // PuntosVida;
    //métodos, directamente por su nombre
    //Y TODA CLASE va a tener un método constructor
    //este constructor se ejecuta automaticamente al momento de llamar a la clase
    constructor(nombre, tipo, ataque, defensa, puntosvida){
        //va a recibir las caracteristicas del objeto
        //se va a encarcar de construir el objeto
        //this es una referencia al mismo objeto
        this.Nombre = nombre;
        this.Tipo = tipo;
        this.Ataque = ataque;
        this.Defensa = defensa;
        this.PuntosVida = puntosvida;

        //1ero de construye
        //2do se ejecuta lo que se ponga después
        this.aparecer();
    }

    //métodos
    aparecer(){
        console.log(`un ${this.Nombre} salvaje aparecio`);
    }

    atacar(){
        console.log(`${this.Nombre} ataca con ${this.Ataque}`);
    }
}

//instanciamos a la clase
let pokemon1 = new Pokemon("Pikachu","Eléctrico", 30,20,60);
let pokemon2 = new Pokemon("Dragonite","Dragon", 70, 80, 120);

console.log(pokemon1);
console.log(pokemon2);