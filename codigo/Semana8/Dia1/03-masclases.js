class Animal{
    constructor(nombre, tamanio, velocidad){
        this.Nombre = nombre;
        this.Tamanio = tamanio;
        this.Velocidad = velocidad;
    }

    correr(){
        console.log(`${this.Nombre} corre a ${this.Velocidad} m/s`);
    }
}

let Panda = new Animal("Panda", "Grande", 15);

console.log(Panda);

//extends significa que va a heredar las propiedades de Animal
class Roedor extends Animal{

    constructor(nombre, tamanio, velocidad, saltar, roer){
        //al contructor padre
        super(nombre, tamanio, velocidad)
        this.Saltar = saltar;
        this.Roer = roer;
    }

    esconder(){
        console.log(`${this.Nombre} saltar a ${this.Saltar} cm de altura`);
    }
}

let Rata = new Roedor("Mickey", "pequeño", 30, 50, "mucho");

console.log(Rata);
console.log(Rata.esconder());
console.log(Rata.correr());