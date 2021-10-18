//obtener productos
//endpoint es un recurso que podemos acceder
const obtenerProductos = async() =>{
    try{
        let respuesta = await fetch("https://616b5ec116c3fa0017171696.mockapi.io/productos");
        let productos = await respuesta.json()
        console.table(productos);
        return productos;//la promesa me retorna productos
    }catch(err){
        console.log(err);
    };
};

//creando un selector para la etiqueda <body></body>
let body = document.querySelector("body");

obtenerProductos()
    .then((misProductos)=>{
        let htmlProd = "";
        misProductos.forEach(producto => {
            htmlProd += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                </tr>`
        });
        body.innerHTML = `<table border=1>
                                ${htmlProd}
                          </table>`
    })
    .catch(err => console.log(err));



