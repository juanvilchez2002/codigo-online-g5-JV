import { AuthContext } from "../context/authContext"
import { useContext } from "react"
import {Navbar, Container, Nav, NavLink} from "react-bootstrap"
import { Link  } from "react-router-dom"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"


export default function Navegacion() {

    //
    const {signOut} = useContext(AuthContext);

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
                            to="/checkout"
                        >
                            Checkout
                        </Link>
                    </Nav>
                    <Nav>
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
