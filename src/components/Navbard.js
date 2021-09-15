import "./Components.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Components.css";



import { FaAngleDown } from "react-icons/fa";

function Navboard() {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <div class="dropdown">
              <Nav.Link href="/">
             
                <button class="dropbtn">
                <a href="/#">
                 HOME
                 </a>
          
                </button>
               
              </Nav.Link>
            </div>

            <div class="dropdown" id="collasible-nav-dropdown">
              <Nav.Link href="/Leathers">
                <button class="dropbtn">
                  <a href="/Leathers">LEATHERS</a>
                </button>
                <FaAngleDown className="Toogle" />
              </Nav.Link>
              <div class="dropdown-content">
                <a href="/#">BAGS</a>
                <a href="/#">ACCESSORIES</a>
                <a href="/#">FOOTWARES</a>

                <a href="/#">JACKETS</a>
              </div>
            </div>

            <div class="dropdown">
              <Nav.Link href="/Yarn">
                <button class="dropbtn">
                  <a href="/Yarn">YARN</a>
                </button>

                <FaAngleDown className="Toogle" />
              </Nav.Link>

              <div class="dropdown-content1">
                <a href="/#">KYORENE POLYMIDE FILAMENT</a>
                <a href="/#">STAPLE BLEND COTTON</a>
                <a href="/#">CONTINUOUS FILAMENT</a>

                <a href="/#">KYORENE WHITE POLYMIDE</a>
              </div>
            </div>

            <div class="dropdown">
              <Nav.Link href="/Fabrics">
                <button class="dropbtn">
                  <a href="/Fabrics">FABRICS</a>
                </button>

                <FaAngleDown className="Toogle" />
              </Nav.Link>

              <div class="dropdown-content">
                <a href="/#">WEAVE </a>

                <a href="/#">KNITS</a>
              </div>
            </div>

            <div class="dropdown">
              <Nav.Link href="/Fiber">
                <button class="dropbtn">
                  <a href="/Fiber">FIBER</a>
                </button>

                <FaAngleDown className="Toogle" />
              </Nav.Link>
              <div class="dropdown-content2">
                <a href="//#">VISCOSE DOBE</a>
                <a href="/#">BANANA FIBER</a>
                <a href="/#">RECYCLED POLYESTER</a>
              </div>
            </div>
            <div class="dropdown">
              <Nav.Link href="/Knits">
                <button class="dropbtn">
                  <a href="/Knits">KNITS</a>
                </button>

                <FaAngleDown className="Toogle" />
              </Nav.Link>

              <div class="dropdown-content3">
                <a href="/#">T-SHIRT</a>
                <a href="/#">POLO</a>
                <a href="/#">SHIRTS</a>

                <a href="/#">PANTS & TROUSERS</a>
                <a href="/#">JEANS</a>
                <a href="/#"> SWEATS & HOODIES</a>
                <a href="/#">TRACKS & JOGGER</a>

                <a href="/#"> INNERWEAR</a>

                <a href="/#">SPORTS WEAR</a>
                <a href="/#">RELAX & SLEEPWEAR</a>
              </div>
            </div>

            <div class="dropdown">
              <Nav.Link href="/Brands">
                <button class="dropbtn">
                  <a href="/Brands">BRANDS</a>
                </button>

                <FaAngleDown className="Toogle" />
              </Nav.Link>

              <div class="dropdown-content">
                <a
                  href="https://nazca.in/home"
                  rel="noreferrer"
                  target="_blank"
                >
                  NAZCA
                </a>

                <a
                  href="https://ophelia-moon.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  OPHELIA MOON
                </a>
              </div>
            </div>

            <div class="dropdown">
              <Nav.Link href="http://elysium.earth" >
                <button class="dropbtn">
                  <a href="http://elysium.earth">ECOFRIENDLY</a>
                </button>

                <FaAngleDown className="Toogle" />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navboard;
