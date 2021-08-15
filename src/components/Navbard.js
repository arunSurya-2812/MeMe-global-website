import "./Components.css";
import React from "react";
import { Navbar, Nav, Container,  } from "react-bootstrap";
import "./Components.css";

function Navboard() {
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect fixed="top" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/" className="nav-item nav-link mx-3">
                <p>Home</p>
              </Nav.Link>

              <Nav.Link
                href="/Fiber"
                className="nav-item nav-link mx-3"
                id="Navline"
              >
                <p>Fiber</p>
                <div className="NavDropdown">
                  
                    <a  href="#">Cotton</a>
                    <br />
                    <a  href="#">Bananaa Fibre</a>
                    <br />
                    <a  href="#">Linen</a>

                    <br />
                    <a   href="#">Silk</a>

                    <br />
                    <a  href="#">Lotus</a>
                  
                </div>
              </Nav.Link>

              <Nav.Link
                href="/Yarn"
                className="nav-item nav-link mx-3"
                id="Navline"
              >
                <p> Yarn</p>{" "}
                <div class="NavDropdown">
               
                    <a href="http://localhost:3000/Yarn">Cotton</a>
                    <br />
                    <a href="http://localhost:3000/Yarn">Polly Cotton</a>
                    <br />
                    <a href="#">Tencel & Modal</a>

                    <br />
                    <a href="#">Lyocell</a>

                    <br />
                    <a href="#">Recycle</a>
                </div>
              </Nav.Link>
              <Nav.Link
                className="nav-item nav-link mx-3"
                id="Navline"
                href="/Fabrics"
              >
                <p>Fabrics</p>
                <div class="NavDropdown">
                  <ul>
                    <a href="#">FABRICS</a>
                    <br />
                    <a href="#">SUSTAINABLE FABRICS</a>
                    <br />
                    <a href="#">ARTISAN MADE</a>

                    <br />
                    <a href="#">FABRICS CRAFTSME</a>
                  </ul>
                </div>
              </Nav.Link>
              <Nav.Link
                href="/Leathers"
                className="nav-item nav-link mx-3"
                id="Navline"
              >
                <p>Leathers</p>{" "}
                <div class="NavDropdown">
                  <a href="#">Bags</a>
                  <br />
                  <a href="#">Accessories</a>
                  <br />
                  <a href="#">Jacket</a>

                  <br />
                  <a href="#">Footwares</a>
                </div>
              </Nav.Link>
              <Nav.Link
                className="nav-item nav-link mx-3"
                id="Navline"
                href="/Knits"
              >
                <p>Knits</p>
                <div class="NavDropdown">
                  <ul>
                    <a href="#">Knits</a>
                    <br />
                    <a href="#">Weave</a>
                    <br />
                    <a href="#">Artisan</a>

                    <br />
                    <a href="#">Eco Friendly</a>
                  </ul>
                </div>
              </Nav.Link>
              <Nav.Link
                href="/Brands"
                className="nav-item nav-link mx-3"
                id="Navline"
              >
                <p>Brands</p>

                <div class="NavDropdown">
                  <ul>
                    <a href="#">Cotton</a>
                    <br />
                    <a href="#">Bananaa Fibre</a>
                    <br />
                    <a href="#">Linen</a>

                    <br />
                    <a href="#">Silk</a>

                    <br />
                    <a href="#">Lotus</a>
                  </ul>
                </div>
              </Nav.Link>

              <Nav.Link
                href="/Ecofriendly"
                className="nav-item nav-link mx-3"
                id="Navline2"
              >
                <p>Eco friendly</p>

                <div class="NavDropdown">
                  <ul>
                    <a href="#">FABRICS</a>
                    <br />
                    <a href="#">SUSTAINABLE FABRICS</a>
                    <br />
                    <a href="#">ARTISAN MADE</a>

                    <br />
                    <a href="#">FABRICS CRAFTSME</a>
                  </ul>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
export default Navboard;
