/**
 * App.js mi JS principal 
 * 1. Tener MockApi 
 * 2. Obtener datos (GET) fetch
 * 3. Convertir esos datos a HTML entendible por el navegador
 * 4. Crear un producto desde el navegador
 * 4.1 Detectar el evento click de un botón
 * 4.2 Vamos a abrir un modal de bootstrap
 * 4.3 Obtener los datos del formulario que estara dentro del modal
 * 4.4 Con esa info convertir a un JSON y enviarlo a MockAPI con un POST
 */

//importamos modulos
//importamos la función obtenerProductos
import { 
    obtenerProductos, crearProducto 
} from "./comunicacion.js";
import { imprimitProdutos } from "./interfaz.js";

//variables globales - los elementos del DOM
let btnCrear = document.getElementById("btnCrear");
//let modalCrear = document.getElementById("modalCrear");
let modalCrear = new bootstrap.Modal(document.getElementById("modalCrear")); //convertirlo en un Obj de Bootstrap

//referencia al boton de Guardar del modal
let btnGuardar = document.getElementById("btnGuardar");


const getProductos = async() =>{
    try {
        let productosObtenidos = await obtenerProductos();//devuelve una promesa
        console.table(productosObtenidos);
        imprimitProdutos(productosObtenidos);
    } catch (error) {
        
    }
}

getProductos();

//llamar al evento click de btnCrear
btnCrear.addEventListener("click", ()=>{
    modalCrear.show();
})


//llamar a btnGuardar
btnGuardar.addEventListener("click", async()=>{
    //referenciando al formulario
    let formulario = document.getElementById("formCrear");

    //referenciando el nuevo producto
    let nuevoProducto = {
        //formulario.name_del_input.value
        //por el name="nombre" obtiene el value de cada input dentro del form
        nombre: formulario.nombre.value,
        descripcion: formulario.descripcion.value,
        precio: formulario.precio.value
    };

    //utilizo la función crearProducto de comunicación y le paso
    //el objeto con la info de los inputs
    try {
        let productoCreado = await crearProducto(nuevoProducto);
        //exito creando el producto
        formulario.reset();//limpia los campos del formulario, los input
        modalCrear.hide();//modal escondete
        getProductos();//para que vuelva a obtener los productos y aparezca mi producto creado

    } catch (error) {
        console.log(error);
    }

    console.log(nuevoProducto);
})