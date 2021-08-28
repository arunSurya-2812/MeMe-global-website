import "./Components.css";
import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./Components.css";

import { FaAngleDown } from "react-icons/fa";
function Navboard() {
  return (
    <div>
    
        <Navbar collapseOnSelect fixed="top"  expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <div class="dropdown">
                <Nav.Link href="/">
                  <button class="dropbtn">
                    <a>Home</a>
                  </button>
                </Nav.Link>
              </div>

              <div class="dropdown" id="collasible-nav-dropdown">
                <Nav.Link href="/Leathers">
                  <button class="dropbtn">
                    <a>Leathers</a>
                  </button>
                  <FaAngleDown className="Toogle" />
                </Nav.Link>
                <div class="dropdown-content">
                  <a href="#">Bags</a>
                  <a href="#">Accessories</a>
                  <a href="#">Footwares</a>

                  <a href="#">Belt</a>
            
                </div>
              </div>

             
              <div class="dropdown">
                <Nav.Link href="/Yarn">
                  <button class="dropbtn">
                    <a>Yarn</a>
                  </button>

                  <FaAngleDown className="Toogle" />
                </Nav.Link>

                <div class="dropdown-content">
                  <a href="#">Kyorene Polymide Filament</a>
                  <a href="#">Staple Blend Cotton</a>
                  <a href="#">Continuous Filament</a>

                  <a href="#">Kyorene White Polyamide</a>

                </div>
              </div>
              <div class="dropdown">
                <Nav.Link href="/Fabrics">
                  <button class="dropbtn">
                    <a>Fabrics</a>
                  </button>

                  <FaAngleDown className="Toogle" />
                </Nav.Link>

                <div class="dropdown-content">
                    <a href="#">Weave </a>
  
                  <a href="#">Knits</a>
                
                </div>
              </div>
             
              <div class="dropdown">
                <Nav.Link href="/Fiber">
                  <button class="dropbtn">
                    <a>Fiber</a>
                  </button>

                  <FaAngleDown className="Toogle" />
                </Nav.Link>
                <div class="dropdown-content">
                  <a href="/#">VISCOSE DOBE</a>
                  <a href="#">Banana Fibre</a>
                  <a href="#">RECYCLED POLYESTER</a>
                </div>
              </div>
              <div class="dropdown">
                <Nav.Link href="/Knits">
                  <button class="dropbtn">
                    <a>Knits</a>
                  </button>

                  <FaAngleDown className="Toogle" />
                </Nav.Link>


                <div class="dropdown-content">
                  <a href="#">T-SHIRT</a>
                  <a href="#">POLO</a>
                  <a href="#">SHIRTS</a>

                  <a href="#">PANTS & TROUSERS</a>
                  <a href="#">JEANS</a>
                  <a href="#"> SWEATS & HOODIES</a>
                  <a href="#">TRACKS & JOGGER</a>

                  <a href="#"> INNERWEAR</a>

                  <a href="#">SPORTS WEAR</a>
                  <a href="#">
                   RELAX & SLEEPWEAR</a>

                </div>
              </div>

              <div class="dropdown">
                <Nav.Link href="/Brands">
                  <button class="dropbtn">
                    <a>Brands</a>
                  </button>

                  <FaAngleDown className="Toogle" />
                </Nav.Link>

                <div class="dropdown-content">
                  <a
                    href="https://nazca.in/home"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Nazca
                  </a>

                  <a
                    href="https://ophelia-moon.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    ophelia moon
                  </a>
                </div>
              </div>

              <div class="dropdown">
                <Nav.Link href="/Ecofriendly">
                  <button class="dropbtn">
                    <a>Ecofriendly</a>
                  </button>
                  <FaAngleDown className="Toogle" />
                </Nav.Link>

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
    </div>
  );
}

export default Navboard;
