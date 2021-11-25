// import
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
}
  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';

const Header = () => (
  <Navbar expand={false}>
    <Container fluid className="justify-content-end" >
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
);

export default Header;
