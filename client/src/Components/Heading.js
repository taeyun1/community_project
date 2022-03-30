import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function Heading() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="Nav-meun" to={"/"}>
              Home
            </Nav.Link>

            <Nav.Link as={Link} className="Nav-meun" to={"/upload"}>
              Upload
            </Nav.Link>

            <Nav.Link as={Link} className="Nav-meun" to={"/"}>
              List
            </Nav.Link>

            <Nav.Link as={Link} className="Nav-meun" to={"/test"}>
              Test
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;
