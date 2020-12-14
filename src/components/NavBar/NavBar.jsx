import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import CartIcon from '../CartIcon/CartIcon';
import { Link } from "react-router-dom";
import Logo from  '../Logo/Logo';

const NavBar = () => {
    return(
        <Navbar bg="danger" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to={`/`} exact="true"><Logo></Logo></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to={`/`} exact="true">Home</Nav.Link>
                <Nav.Link as={Link} to={`/`} exact="true">Catalog</Nav.Link>
                <NavDropdown title="Bands" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={`/`} exact="true">Hollow Prophet</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={`/`} exact="true">Thy Art Is Murder</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={`/`} exact="true">Shadow of Intent</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={`/`} exact="true">Rings of Saturn</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={`/`} exact="true">Humanity's Last Breath</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={`/`} exact="true">Contact Us</Nav.Link>
                <Nav.Link><CartIcon></CartIcon></Nav.Link>
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