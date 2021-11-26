function objPersona (){
    this.nombre="Juan",
    this.edad= 38
};

objPersona.prototype.ciudadOrigen = "Ica";

const nuevaPersona = new objPersona();

console.log(nuevaPersona.ciudadOrigen);