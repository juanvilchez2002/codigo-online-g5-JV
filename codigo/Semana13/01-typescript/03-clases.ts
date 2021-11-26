//creamos una interface
interface iHamburguesa{
    id:number,
    nombre:string,
    ingredientes:Array<string>,
    preparacion:string,
    getingredienteSecreto():string//getter
}

//clases
class Hamburguesa implements iHamburguesa{
    //propiedades en JS es opcional
    id;
    nombre;
    ingredientes;
    preparacion;
    private _ingredienteSecreto;//privada, no ha de ser publico
    //solamente es accesible de forma directa dentro de la propia clase

    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes=[];
        this.preparacion="";
        this._ingredienteSecreto="plancton";
    }

    //getter va a obtener
    get ingredienteSecreto(){
        return this._ingredienteSecreto;
    }

    //setter va a dar valor
    set ingredienteSecreto(nuevoIngrediente){
        this._ingredienteSecreto=nuevoIngrediente;
    }
}

let CangreBurger = new Hamburguesa(1, "Cangreburger" )

CangreBurger.ingredienteSecreto ="lechuga"

console.log(CangreBurger.ingredienteSecreto);
