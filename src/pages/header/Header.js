import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
  return (
    <div>
     <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand to="/">user management</Navbar.Brand>
           
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className='nav-link'>users</Nav.Link>
            
            <Nav.Link as={Link} to="/user" className='nav-link'>Post users</Nav.Link>
            {/* <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link> */}
          </Nav>
       
      </Container>
    </Navbar>

    </div>
  )
}

export default Header