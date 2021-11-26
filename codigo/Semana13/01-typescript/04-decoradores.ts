//decoradores, algo que puede cambiar algo
function decoradorGustavo(texto:string){
    return function(target){
        target.prototype.presentacion = function(){
            console.log(`Buenos días, soy ${texto}`);
            /*target.vestimenta = ["Vestido", "Sombrero"]
            target.vestimenta.forEach(prenda => {
                console.log(prenda);
                
            });*/            
        }
    }
}

@decoradorGustavo("Maria Perez")
class Persona{

    vestimenta:Array<string>;

    constructor(ropa){
        this.vestimenta=ropa
    }

    presentacion(nombre:string):void{
        console.log(`Hola soy ${nombre}`);
        this.vestimenta.forEach((rop)=> console.log(rop))
    }
}

let persona1 = new Persona(['jeans', 'polo', 'zapatillas'])

persona1.presentacion('Karina')