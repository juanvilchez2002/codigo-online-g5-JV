let saludo = "Hola mundo";

console.log(saludo);

//tipado        
let texto:string = "Juan";
let cantidad:number = 23;
let teQuiere:boolean = true;
let arreglo:Array<String> = [
    "flores",
    "chocolates",
    "peluches",
    "PS5"
];
let objetos:Object = {};
let random:any=undefined; //basicamente acepta cualquier tipo
let random2:unknown={nombre:"Backus"}; //en teoria acepta cualquier cosa menos null o undefined

//funciones
let sumar = (num1:number, num2:number):number=>{
    return num1+num2
}


console.log(sumar(10, 13));

