import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../Imagenes/alimentare.png'


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
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbarPrincipal;