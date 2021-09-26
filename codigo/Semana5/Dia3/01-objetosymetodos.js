let restaurante = {
    nombre:"La Nueva Palomino",
    platillos: [
        {
            id:1,
            nombrePlatillo: "Sencca",
            precio:30
        },{
            id:2,
            nombrePlatillo: "Pepian de Cuy",
            precio:36
        },{
            id:3,
            nombrePlatillo: "Americano",
            precio:40
        }
    ],
    //esta función se llama metodo
    //una función asignada a una propiedad de un obj
    mostrarPlatillos: function(){
        console.log(restaurante.platillos);
    }
};

console.log(restaurante.mostrarPlatillos());

restaurante.mostrarPlatillos();

//objeto jugador
let jugador = {
    //propiedades
    nombre: "Dybala",
    nacionalidad: "Argentina",
    posicion: "volante, delantero",
    estatura: 1.85,
    //metodos
    correr: function(){
        console.log("corre corre correeeeeee");
    },
    cabecear: function(){
        console.log("Salta y cabecea la pelota");
    },
    patear: function(){
        console.log("Pateaaaaa");
    },
};

jugador.correr();



