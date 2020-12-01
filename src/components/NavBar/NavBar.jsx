import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import CartIcon from '../CartIcon/CartIcon';

const NavBar = () => {
    return(
        <Navbar bg="danger" variant="dark" expand="lg">
  <Navbar.Brand href="/">ABYSSAL MERCH</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#link">Catalog</Nav.Link>
      <NavDropdown title="Bands" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/5.1">Hollow Prophet</NavDropdown.Item>
        <NavDropdown.Item href="#action/5.2">Thy Art Is Murder</NavDropdown.Item>
        <NavDropdown.Item href="#action/5.3">Shadow of Intent</NavDropdown.Item>
        <NavDropdown.Item href="#action/5.4">Rings of Saturn</NavDropdown.Item>
        <NavDropdown.Item href="#action/5.5">Humanity's Last Breath</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">Contact Us</Nav.Link>
      <Nav.Link href={`/Cart`}><img src={CartIcon.img1} width="25"></img></Nav.Link>
      {/* <Nav.Link href="#link"><img src={CartIcon.img1} width="25"></img></Nav.Link> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="dark">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
  }

  export default NavBar;