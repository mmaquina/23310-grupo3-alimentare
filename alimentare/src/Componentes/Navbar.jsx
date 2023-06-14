import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../Imagenes/alimentare.png'
import { signOut } from "firebase/auth";
import { auth } from "../Componentes/firebase/FirebaseConfig"


const logout = async()=>{
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error)
  }
}

const navbarPrincipal = () => {
  return (
    <Navbar className="navBg" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Alimentare" width="60" height="60" className='d-inline-block align-middle'/> Alimentare
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Recetas">Recetas</Nav.Link>
            <Nav.Link as={Link} to="/Alimentos">Alimentos</Nav.Link>
            <Nav.Link as={Link} to="/Contacto_2">Contacto</Nav.Link>
          </Nav>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            <Button onClick={logout} variant="outline-dark">Logout</Button>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbarPrincipal;