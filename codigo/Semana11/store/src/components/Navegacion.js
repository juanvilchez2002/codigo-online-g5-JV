import { AuthContext } from "../context/authContext"
import { CarritoContext } from "../context/carritoContext"
import { useContext, useRef } from "react"
import {Navbar, Container, Nav, NavLink, NavDropdown} from "react-bootstrap"
import { Link, useNavigate  } from "react-router-dom"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
//importando el Badge
import Badge from '@mui/material/Badge';
import ShoppingCart from "@mui/icons-material/ShoppingCart"

export default function Navegacion() {

    //obtenemos los valores de 
    const {user, signOut} = useContext(AuthContext);

    //obtenermos la cantidad de productos del carrito
    const {carrito} = useContext(CarritoContext);

    //lo que vamos a buscar
    const refBuscar = useRef();

    //navegador
    const navigate = useNavigate();

    //función para buscar
    const manejarBusqueda = ()=>{
        navigate(`/productosfiltros/${refBuscar.current.value}`)
    }

    //para obtener la cantidad total de carrito usamos reduce
    const totalCarrito = carrito.reduce((total, prod)=>{
        return total+prod.cantidad;
    }, 0)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    Store 5
                </Navbar.Brand>
                <NavbarToggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link 
                            className="nav-link"
                            to="/"
                        >
                            Home
                        </Link>
                        <Link 
                            className="nav-link"
                            to="/productosfiltros"
                        >
                            Productos
                        </Link>

                        {
                            user?(
                                <>
                                    <Link 
                                        className="nav-link"
                                        to="/checkout"
                                    >
                                        Checkout
                                    </Link>  
                                </>
                            ):null
                        }                      
                    </Nav>
                    <Nav>
                        <div className="d-flex justify-content-between">
                            <input type="text" placeholder="Buscar producto..." 
                                className="form-control"
                                ref={refBuscar}
                            />
                            <button className="btn btn-outline-dark" onClick={manejarBusqueda}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                            <Link 
                            className="nav-link"
                            to="/carrito"
                        >
                            <Badge badgeContent={totalCarrito} color="primary">
                                <ShoppingCart/>
                            </Badge>
                        </Link>
                        {/**
                         * login y logout
                         */}

                         {/**
                          * validando si el usuario existe
                          */}
                            {
                              user?(
                                  <NavDropdown
                                    title={
                                        <div className="d-inline">
                                            <img
                                                src={user.photoURL}
                                                className="me-2"
                                                alt="avatar"
                                                style={
                                                    {
                                                        borderRadius:'50%',
                                                        width:'30px'
                                                    }
                                                }  
                                            />
                                            <span>
                                                {user.displayName}
                                            </span> 
                                        </div>
                                    }
                                >      
                                    <NavDropdown.Item onClick={
                                            signOut
                                        }   
                                    >
                                        Salir
                                    </NavDropdown.Item>                          
                                </NavDropdown>
                              ):(
                                  <Link className="nav-link" to="/login">
                                      Ingresar
                                  </Link>
                              )
                            }
                        <NavLink onClick={
                            signOut
                        }>
                            Salir
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
