    import { useState, useEffect } from "react";
    //useParamt
    //me permite obtener los parametros que estoy pasando
    //por la URL
    import { useParams } from "react-router-dom";
    import FormProducto from "../components/FormProducto";
    import { obtenerProductoPorId, editarproductoPorId, subirImagen } from "../services/productosServices";
    import { useNavigate } from "react-router";
    import Swal from "sweetalert2";
    import Cargando from "../components/Cargando"

    let imagen;//por defecto es undefined

    export default function EditarProductoView() {

        //creamos un estado
        const [value, setValue] = useState({
            nombre:"",
            descripcion:"",
            precio:0
        })

        //estado para mostrar icono cargando
        const [loading, setLoading] = useState(false);

        //usrParams es un objeto que va a contener todos
        //los parametros que se pase por la URL
        //obtenemos el parametro (id) que pasemos por
        //la URL, como es un obj se puede desestructurar
        const {id} = useParams();

        console.log({id});

        const navigate = useNavigate();

        //obtenemos el producto por medio del id
        const getProducto = async () => {
            try {
                
                const prodObtenido = await obtenerProductoPorId(id);
                //el producto obternido de mockapi
                //lo paso a value, donde actualizo
                //el estado
                setValue(prodObtenido);
                console.log(prodObtenido);
            } catch (error) {
                console.log(error);
            }
        }

        /**
         * 
         * 
         */

        const manejarSubmit = async (e) => {
            e.preventDefault();
            try {
                //verificamos el valor de imagen
                if(typeof imagen !== "undefined"){
                    
                    //cuando comience el proceso de crear el producto
                    setLoading(true)

                    //xq imagen no seria undefined
                    const urlImagenSubida = await subirImagen(imagen);
                    //actualiz el objeto value y a la
                    //vez se actualiza la imagen
                    await editarproductoPorId(id, {...value, imagen:urlImagenSubida});

                    //cuando termino de cargar
                    setLoading(false)

                }else{
                    //cuando comience el proceso de crear el producto
                    setLoading(true)

                    //actualizo pero sin subir ninguna imagen
                    await editarproductoPorId(id, value);

                    //cuando termino de cargar
                    setLoading(false)
                }
                

                await Swal.fire({
                    icon: "success",
                    title: "Éxito",
                    text: "Producto Editado Exitosamente",
                });
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        };

        /**
         * creamos una función para poder modificar 
         * el estado value
         */

        const actualizarInput = (e)=>{
            console.log(e, e.target.name, e.target.value);
            //usando el setValue para actualizar
            //pasamos un objeto y spread de value que
            //es un objeto
            setValue({
                ...value,
                //pasamos el nombre y el valor
                [e.target.name]: e.target.value,
            });
        }

        //funcion que maneja la imgane
        const manejarImagen = (e) =>{
            e.preventDefault();
            console.log(e.target.files);
            imagen = e.target.files[0];
            console.log(imagen);
        }



        //se ejecuta solamente en el montaje
        useEffect(()=>{
            getProducto();
        }, []);

        return (
            <>
                {
                    loading===true?(
                        <Cargando/>
                    ):(
                        <FormProducto 
                            value={value} 
                            actualizarInput={actualizarInput}
                            manejarSubmit={manejarSubmit} 
                            manejarImagen={manejarImagen}
                        />
                    )
                }
            </>
        );
    }
