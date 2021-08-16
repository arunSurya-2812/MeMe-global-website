import "./Components.css";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Components.css";

function Navboard() {
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect fixed="top" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>

            <div class="dropdown">
                <button class="dropbtn">
                  <a href="http://localhost:3000">Home</a>
                </button>
              </div>

              <div class="dropdown">
                <button class="dropbtn">
                  <a href="http://localhost:3000/Fiber">Fiber</a>
                </button>
                <div class="dropdown-content">
                  <a href="#">Cotton</a>
                  <a href="#">Banana Fibre</a>
                  <a href="#">Linen</a>
                  <a href="#">Silk</a>
                  <a href="#">Lotus</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn">
                  <a href="http://localhost:3000/Yarn">Yarn</a>
                </button>
                <div class="dropdown-content">
                  <a href="#">Cotton</a>
                  <a href="#">Poly Cotton</a>
                  <a href="#">Tencel& Modal</a>

                  <a href="#">Lyocell</a>

                  <a href="#">Recycle</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn">
                  <a href="http://localhost:3000/Fabrics">Fabrics</a>
                </button>
                <div class="dropdown-content">
                  <a href="#">Fabrics</a>
                  <a href="#">SUSTAINABLE FABRICS</a>
                  <a href="#">ARTISAN MADE</a>

                  <a href="#">FABRICS CRAFTSME</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn">
                  <a href="http://localhost:3000/Leathers">Leathers</a>
                </button>
                <div class="dropdown-content">
                  <a href="#">Bags</a>
                  <a href="#">Accessories</a>
                  <a href="#">Jacket</a>

                  <a href="#">Footwares</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn">
                  <a href="http://localhost:3000/Knits">Knits</a>
                </button>
                <div class="dropdown-content">
                  <a href="#">Knits</a>
                  <a href="#">Weave</a>
                  <a href="#">Artisan</a>

                  <a href="#">Eco friendly</a>
                </div>
              </div>

              <div class="dropdown">
                <button class="dropbtn">
                  <a href="http://localhost:3000/Brands">Brands</a>
                </button>
                <div class="dropdown-content">
                  <a href="#">Brands</a>
                  <a href="#">Linen</a>
                  <a href="#">Artisan</a>
                  <a href="#">Fibre</a>
                  <a href="#">Eco friendly</a>
                </div>
              </div>

              <div class="dropdown">
                <button class="dropbtn">
                  <a href="http://localhost:3000/Ecofriendly">Ecofriendly</a>
                </button>
                <div class="dropdown-content">
                  <a href="#">Fabrics</a>
                  <a href="#">SUSTAINABLE FABRICS</a>
                  <a href="#">ARTISAN MADE</a>

                  <a href="#">FABRICS CRAFTSME</a>
                </div>
              </div>

              {/*
              <button class="dropbtn">
                <a href="http://localhost:3000">Home</a>
              </button>*      




              <Nav.Link
                href="/Fiber"
                className="nav-item nav-link mx-3"
                id="Navline"
              >

              </Nav.Link>

             */}
              {/* <Nav.Link
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
             </Nav.Link>*/}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
export default Navboard;
