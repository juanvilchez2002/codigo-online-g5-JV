let listaPlatillos = [
    {
        id: 1,
        nombre: "Crema de Verduras",
        descripcion: "Suave crema preparada con una variedad de verduras estacionales",
        precio: 12.0,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80z",
    },
    {
        id: 2,
        nombre: "Albondigas con salsa Barbeque",
        descripcion:
            "Albondigas de carne de res condimentandas con finas hierbas acompañadas con Salsa Bbq y espinacas",
        precio: 18.0,
        stock: 8,
        imagen: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    },
    {
        id: 3,
        nombre: "Hamburguesa Royal",
        descripcion: "Carne, Queso, Huevo y tomate, todo envuelto con pan",
        precio: 11.0,
        stock: 14,
        imagen: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 4,
        nombre: "Pizza de la casa",
        descripcion: "Pizza con recetea original de la casa",
        precio: 14.0,
        stock: 7,
        imagen: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 5,
        nombre: "Ceviche de la casa",
        descripcion: "Plato Bandera Peruano acompañado con bebida a elección",
        precio: 20.0,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 6,
        nombre: "Ramen Fusión",
        descripcion: "Ramen preparado con ingredientes Peruanos",
        precio: 19.0,
        stock: 6,
        imagen: "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    },
];

/**REQUERIDA
 * 1. mostrar estos platillos de forma identica a como lo hace preview
 *
 * //ESTO ES OPCIONAL, aqui tendrías que investigar
 * 2. OPCIONAL (cuando de click en el boton agregar hacer que eso se sume al carrito)
 * 	-tips getElementsByClassName, y pueden agregar attributos adicionales
 * 3. OPCIONAL (mostrar el resumen del carrito en la parte izquierda)
 * 4. OPCIONAL (guardar el resumen en el LocalStorage)
 */

//lo ponen el discord


console.log(listaPlatillos.length);

//creando un valor donde se guardara el monto total a pagar
let costoOrden = 0;

//capturando la referencia a la etiqueta main "contenido"
let mainContenido = document.getElementById("contenido");

//creando un bucle para adicionar los productor
listaPlatillos.forEach(function(lista){
    //creando la etiqueta div.tarjeta
    let divTarjeta = document.createElement("div");
    //adicionando atributos al div.tarjeta
    divTarjeta.setAttribute("class","tarjeta");

    //creando la etiqueta div.imagen
    let divImagen = document.createElement("div");
    //adicionando atributos al div.imagen
    divImagen.setAttribute("class", "imagen");
    //creando la etiqueta img
    let imgTarjeta = document.createElement("img");
    imgTarjeta.setAttribute("src",`${lista.imagen}`);
    //adicionando la etiqueta img a div.imagen
    divImagen.appendChild(imgTarjeta);
    //adicionando div.imagen a div.tarjeta
    divTarjeta.appendChild(divImagen);
    //dicioando div.tarjeta a main.contenido
    mainContenido.appendChild(divTarjeta);

    //creando la etiqueta div.texto
    let divTexto = document.createElement("div");
    //adicionando atributos al div.texto
    divTexto.setAttribute("class","texto");
    //creando h4
    let nombrePlato = document.createElement("h4");
    //adicionando texto en h4
    nombrePlato.innerHTML = `${lista.nombre}`;
    //adicionando h4 a div.texto
    divTexto.appendChild(nombrePlato);
    //creando una etiqueta p
    let nombreDesc = document.createElement("p");
    //adicionando la descripción en la etiqueta p
    nombreDesc.innerHTML = `${lista.descripcion}`;
    //adicionando p a div.texto
    divTexto.appendChild(nombreDesc);
    //creando div.precio
    let divPrecio = document.createElement("div");
    //dandole atributos a divPrecio
    divPrecio.setAttribute("class", "precio");
    //creando etiqueta span
    let spanPrecio = document.createElement("span");
    //adicionando texto a span
    spanPrecio.innerHTML = `S/. ${lista.precio}`;
    //adicionando span a divPrecio
    divPrecio.appendChild(spanPrecio);
    //creando la etiqueta button
    let btnAgregar = document.createElement("button");
    //adicionando atributos a button
    btnAgregar.setAttribute("class", "btn-agregar");
    //adicionando texto a button
    btnAgregar.innerHTML = "Agregar";
    //adicionando el button a divTexto
    divPrecio.appendChild(btnAgregar);

    //adicionando divPrecio a divTexto
    divTexto.appendChild(divPrecio);

    //adicionando divTexto a divTarjeta
    divTarjeta.appendChild(divTexto);


    //adicionando eventos al btnAgregar
})

let 