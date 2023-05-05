import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Logo from '../assets/Imagenes/Sakura.png'

const navbarPrincipal = () => {
  return (
    <Navbar className="navBg" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" >
            <img src={Logo} alt="SakuraArteEnPapel" width="100" height="100" className='d-inline-block align-middle'/> Sakura Arte en Papel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Agendas">Agendas</Nav.Link>
            <Nav.Link as={Link} to="/Cuadernos">Cuadernos</Nav.Link>
            <Nav.Link as={Link} to="/Calendarios">Calendarios</Nav.Link>
            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbarPrincipal;