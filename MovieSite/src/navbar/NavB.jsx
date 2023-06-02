import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function NavB() {

  return (
    <Navbar className='nav-bar' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="nav-title" href="./home">
          <img
            alt="Logo"
            src="https://img.icons8.com/ios-filled/50/ffffff/movie-projector.png"
            width="30"
            height="30"
            className="logo-image d-inline-block align-top"
          />{' '}
          FilmViews</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;