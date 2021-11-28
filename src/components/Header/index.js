// import
// import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';
import './header.scss';

const Header = () => (
  <>
    <Menu stack right isOpen={false}>
      <a className="menu-item" href="#home">Accueil</a>
      <a className="menu-item" href="#cv">Mon CV</a>
      <a className="menu-item" href="#one">Mon parcours</a>
      <a className="menu-item" href="#two">Ma reconversion</a>
      <a className="menu-item" href="#three">Mes compéthences</a>
      <a className="menu-item" href="#four">Et maintenant ?</a>
    </Menu>

    <Navbar sticky="top">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#cv">Mon CV</Nav.Link>
          <Nav.Link href="#one">Mon parcours</Nav.Link>
          <Nav.Link href="#two">Ma reconversion</Nav.Link>
          <Nav.Link href="#three">Mes compéthences</Nav.Link>
          <Nav.Link href="#four">Et maintenant ?</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default Header;
