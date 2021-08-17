import "./Components.css";
import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import "./Components.css";

import { FaAngleDown} from "react-icons/fa";
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
                <FaAngleDown className="Toogle" />
                <div class="dropdown-content">
                  <a href="/#">Cotton</a>
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
                <FaAngleDown className="Toogle" />

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
                <FaAngleDown className="Toogle" />
                
             
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
                <FaAngleDown className="Toogle" />
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
                <FaAngleDown className="Toogle" />
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
                
                <FaAngleDown className="Toogle" />
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
                
                <FaAngleDown className="Toogle" />
                <div class="dropdown-content">
                  <a href="#">Fabrics</a>
                  <a href="#">SUSTAINABLE FABRICS</a>
                  <a href="#">ARTISAN MADE</a>

                  <a href="#">FABRICS CRAFTSME</a>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default  Navboard;