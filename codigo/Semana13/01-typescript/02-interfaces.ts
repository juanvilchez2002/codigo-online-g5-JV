//solamente las propiedades
//interface = contrato
interface iGato{
    nombre: string,
    color: string,
    raza: string,
    edad: number,
    personalidad: Array<string>,
    antipatico: boolean,
    tamanio: number,
    peludo?: string //opcional
}

//objeto
let gatita:iGato ={
    nombre:"Gatita",
    color:"Café con negro",
    raza:"Siames",
    edad:6,
    personalidad:["amigable", "seria"],
    antipatico:false,
    tamanio: 5,
    peludo:"bastante"
}

//tsc nombre_archivo.ts => nombre_archivo.js
//node nombre_archivo.js