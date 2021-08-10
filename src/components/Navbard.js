import "./Components.css";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Components.css";

function Navboard() {
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect fixed="top"expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <LinkContainer to="/">
                <Nav.Link className="nav-item nav-link mx-3">
                  <p>Home</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Fiber">
                <Nav.Link className="nav-item nav-link mx-3" id="Navline">
                  <p>Fiber</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Yarn">
                <Nav.Link className="nav-item nav-link mx-3" id="Navline">
                  <p> Yarn</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Fabrics">
                <Nav.Link className="nav-item nav-link mx-3" id="Navline">
                  <p>Fabrics</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Leathers">
                <Nav.Link className="nav-item nav-link mx-3" id="Navline">
                  <p>Leathers</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Knits">
                <Nav.Link className="nav-item nav-link mx-3" id="Navline">
                  <p>Knits</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Brands">
                <Nav.Link className="nav-item nav-link mx-3" id="Navline">
                  <p>Brands</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Ecofriendly" >
                <Nav.Link className="nav-item nav-link mx-3" id="Navline2">
                  <p>Eco friendly</p>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
export default Navboard;
