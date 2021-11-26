//clases
var Hamburguesa = /** @class */ (function () {
    //solamente es accesible de forma directa dentro de la propia clase
    function Hamburguesa(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = [];
        this.preparacion = "";
        this._ingredienteSecreto = "plancton";
    }
    Object.defineProperty(Hamburguesa.prototype, "ingredienteSecreto", {
        //getter va a obtener
        get: function () {
            return this._ingredienteSecreto;
        },
        //setter va a dar valor
        set: function (nuevoIngrediente) {
            this._ingredienteSecreto = nuevoIngrediente;
        },
        enumerable: false,
        configurable: true
    });
    return Hamburguesa;
}());
var CangreBurger = new Hamburguesa(1, "Cangreburger");
CangreBurger.ingredienteSecreto = "lechuga";
console.log(CangreBurger.ingredienteSecreto);
