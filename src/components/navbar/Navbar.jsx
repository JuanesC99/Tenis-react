import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">Tienda de tenis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Nike">Nike</NavDropdown.Item>
              <NavDropdown.Item href="/404">
                Vans
              </NavDropdown.Item>
              <NavDropdown.Item href="/404">Adidas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/404">
                Puma
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;