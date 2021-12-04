import {useContext, useState} from 'react';//
import {CarritoContext} from "../context/carritoContext";
import {useForm} from "react-hook-form";//useForm es un hook personalizado para manejar formularios
import { useNavigate } from 'react-router-dom';
//para manejar mapas
import {MapContainer, TileLayer, Marker, useMapEvents} from 'react-leaflet'
import { guardarVenta } from '../services/ventasService';
import Swal from 'sweetalert2';

export default function CheckOutView() {

    //estado para manejar el estado
    const [coordenadas, setCoordenadas] = useState([-12.149882, -76.990930])

    //
    const {carrito} = useContext(CarritoContext);

    //prueba
    //const navi = useNavigate();

    //variable global total
    let total = 0;
    total = carrito.reduce((acum, prod) => {
        return acum + prod.cantidad*prod.precio
    },0)

    //
    const AnadirMarcador = () =>{
        //va a detectar eventoos
        const map = useMapEvents({
            click:(e)=>{
                const {lat, lng} = e.latlng;
                //console.log("viendo evento: ", e)
                setCoordenadas([lat, lng])
            }
        })

        return null
    }

    //hook forms, 
    //register -> es necesario para regitrar c/input, sirve como
    //referencia de los input
    //handleSubmit -> función que me premite manejar el evento submit del form
    //errors -> me permite por c/input mostrar un mensajito de error
    const {register, handleSubmit, formState: {errors}} = useForm();

    //función que va a recibir data
    const recibirSubmit = async (data)=>{
        //console.log("estamos viendo: ", data);
        //navi("/");

        try {
            //enviar la venta
            let nuevaVenta = {
                ...data,//nombreCompleto, telefono, email, direccion
                coordenadas,
                productos:carrito,
                total
            }

            await guardarVenta(nuevaVenta);//guardar la venta
            Swal.fire({
                icon:'success',
                text: "Venta comprada"
            })

        } catch (error) {
            throw error
        }
    }

    return (
        <div className='container mt-4'>
            <h1>
                CheckOut
            </h1>
            <div className='row my-2'>
                <div className='col-12 col-md-6'>
                    <h4>
                        Verifique el Carrito
                    </h4>
                    <ul className='list-group'>
                        {
                            //usamos map
                            carrito.map((prod, i) =>(
                                <li className='list-group-item  d-flex justify-content-between' keu={i}>
                                    <div>
                                        <h6 className='fw-bold'>
                                            {prod.nombre}
                                        </h6>
                                        <small>
                                            Cantidad: {prod.cantidad}
                                        </small>
                                    </div>
                                    <div className='badge bg-dark rounded-pill p-4'>
                                        S/. {(prod.precio * prod.cantidad).toFixed(2)}
                                    </div>
                                </li>
                            ))
                        }
                            {
                                //verificar si el total es 0
                                    total > 0? <li className='list-group-item  d-flex justify-content-between'>
                                        <span className='fw-bold'>
                                            TOTAL:
                                        </span>
                                        <span>
                                            S/.
                                            {
                                                total.toFixed(2)
                                            }
                                        </span>
                                    </li>:<li className='list-group-item'>
                                    Todavia no ha adicionado ningun producto
                                </li>
                            }
                        
                    </ul>
                </div>

                {/**
                 * formulario
                 */}
                 {
                    <div className='col-12 col-md-6'>
                        <form
                            onSubmit={handleSubmit(recibirSubmit)}
                        >
                            <div className='mb-2'>
                                <label className="form-label">
                                    Nombres y Apellidos:
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Ej. Juan Perez" 
                                    className='form-control'
                                    {...register("nombreCompleto", {required:true})}
                                />
                                {
                                    /**
                                     * errros.prop existe && retorno esto
                                     */
                                }
                                {errors.nombreCompleto&&<small className='text-danger'>
                                    Este campo es obligatorio.
                                </small>}
                            </div>

                            <div className='mb-2'>
                                <label className="form-label">
                                    Telefono:
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Ej. 999 999 999" 
                                    className='form-control'
                                    {...register("telefono", {
                                        required:{value:true, message:"Es requerido"},
                                        minLength:{value:6, message:"Se requiere 6 dígitos"},
                                        maxLength:{value:14, message:"Máximo 14 dígitos"}
                                    })}
                                />
                                {
                                    /**
                                     * errros.prop existe && retorno esto
                                     */
                                }
                                {errors.telefono&&<small className='text-danger'>
                                    {errors.telefono.message}
                                </small>}
                            </div>

                            <div className='mb-2'>
                                <label className="form-label">
                                    Correo:
                                </label>
                                <input 
                                    type="mail" 
                                    placeholder="Ej. juanvilchez2002@gmail.com" 
                                    className='form-control'
                                    {...register("email", {
                                        required:true}
                                    )}
                                />
                                {
                                    /**
                                     * errros.prop existe && retorno esto
                                     */
                                }
                                {errors.email&&<small className='text-danger'>
                                    Este correo es obligatorio
                                </small>}
                            </div>

                            <div className='mb-2'>
                                <label className="form-label">
                                    Dirección:
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Ej. Urb Los Arces F 67" 
                                    className='form-control'
                                    {...register("direccion", {
                                        pattern:/^[A-Za-z0-9]*$/}
                                    )}
                                />
                                {
                                    /**
                                     * errros.prop existe && retorno esto
                                     */
                                }
                                {errors.direccion&&<small className='text-danger'>
                                    Solo se acepta letras y dígitos
                                </small>}
                            </div>


                            {
                                //mapa
                            }
                            <MapContainer 
                                center={coordenadas}
                                zoom={15}
                                style={
                                   { height:'400px'}
                                }
                            >
                                    <TileLayer
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {
                                        /**
                                         * para colocar el marcador
                                         */
                                    }
                                    <AnadirMarcador/>
                                    <Marker position={coordenadas}/>
                            </MapContainer>
                            <button className="btn btn-dark btn-lg" disabled={carrito.length <=0}>
                                Comprar
                            </button>
                        </form>
                    </div>
                 }

            </div>
        </div>
    )
}
