/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 16/07/2021 - 10:55:48
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/07/2021
 * - Author          : surya12
 * - Modification    :
 **/
import "./Components.css";
import React from "react";
import { Navbar, Nav, Container ,NavDropdown} from "react-bootstrap";
import { LinkContainer} from "react-router-bootstrap";
import "./Components.css";

function Navboard() {
  return (

    <Container>
        <Navbar collapseOnSelect expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="hello">
            
            <Nav className="Navgg">
              <LinkContainer to="/">
                <Nav.Link   className="nav-item nav-link mx-2">
                  
                  <p>Home</p>
                  
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Fiber">
                <Nav.Link  className="nav-item nav-link mx-2" id="Navline">
                  <p>Fiber</p>
                  
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Yarn">
                <Nav.Link className="nav-item nav-link mx-2" id="Navline">
                  <p> Yarn</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Fabrics">
                <Nav.Link className="nav-item nav-link mx-2" id="Navline">
                  <p>Fabrics</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Leathers">
                <Nav.Link className="nav-item nav-link mx-2" id="Navline">
                  <p>Leathers</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Knits">
                <Nav.Link className="nav-item nav-link mx-2" id="Navline">
                  <p>Knits</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Brands">
                <Nav.Link className="nav-item nav-link mx-2" id="Navline">
                  <p>Brands</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Ecofriendly" id="Navline2">
                <Nav.Link className="Ecofriendlynav">
                  <p>Eco friendly</p>
                </Nav.Link>
              </LinkContainer>
            </Nav>
           
          </Navbar.Collapse>
        </Navbar>
        </Container>

  );
}
export default Navboard;
