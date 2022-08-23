import React from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Github Search</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
