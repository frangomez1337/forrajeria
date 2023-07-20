import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../Assets/banner1.jpg"
import ItemListContainer from './itemListContainer';

const NavBar = () => {
    return (
    <>
      <img alt='' style={{ width: '100%', height: '150px' }}src={img}></img>
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Forrajería La Chacra</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Alimentos Caninos">Alimentos Caninos</Nav.Link>
            <Nav.Link href="#Alimentos Felinos">Alimentos Felinos</Nav.Link>
            <Nav.Link href="#Accesorios">Accesorios</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <ItemListContainer/>
          </Nav>
        </Container>
      </Navbar>
      

    </div>
      
    </>
    )
}

export default NavBar;