import "./Components.css";
import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,

} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Components.css";


function Navboard() {
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect fixed="top" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link className="nav-item nav-link mx-3">
                  <p>Home</p>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Fiber">
                <Nav.Link className="nav-item nav-link mx-3" id="Navline">
                  <p>Fiber</p>
                  <NavDropdown>
                    <NavDropdown.Item eventKey="1">Cotton</NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item eventKey="1.1">
                      Poly Cotton
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item eventKey="1.2">
                      Tencel&Model
                    </NavDropdown.Item>
                    <NavDropdown.Divider />


                    <NavDropdown.Item eventKey="1.3">Lyocell</NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item eventKey="1.4">Recycle</NavDropdown.Item>

                  </NavDropdown>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Yarn">
                <Nav.Link className="nav-item nav-link mx-3" id="Navline">
                  <p> Yarn</p>
                  <NavDropdown>
                    <NavDropdown.Item eventKey="1">Fabrics</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.1">
                      Banana Fiber
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.2">
                      SUSTANABLE FABRICS
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.3">
                      Astian Made
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.4">Silk</NavDropdown.Item>
                  </NavDropdown>
               
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Fabrics">
                <Nav.Link className="nav-item nav-link mx-3" id="Navline">
                  <p>Fabrics</p>
                  <NavDropdown>
                    <NavDropdown.Item eventKey="1">Fabrics</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.1">
                      Banana Fiber
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.2">
                      SUSTANABLE FABRICS
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item eventKey="1.3">
                      Astian Made
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.3">Silk</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Leathers">
                <Nav.Link className="nav-item nav-link mx-3" id="Navline">
                  <p>Leathers</p>
                  <NavDropdown>
                    <NavDropdown.Item eventKey="1">Bags</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.1">
                      Accessories
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.2">Jacket</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.3">
                      Footwares
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.3">Leathers</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Knits">
                <Nav.Link className="nav-item nav-link mx-3" id="Navline">
                  <p>Knits</p>
                  <NavDropdown>
                    <NavDropdown.Item eventKey="1">Knits</NavDropdown.Item>
                     <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.1">Weave</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.2">Astian</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.3">
                      Eco friendly
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Brands">
                <Nav.Link className="nav-item nav-link mx-3" id="Navline">
                  <p>Brands</p>
                  <NavDropdown>
                    <NavDropdown.Item eventKey="1">Cotton</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.1">
                      Banana Fiber
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.2">Linen</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.3">Lotus</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.3">Silk</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Ecofriendly">
                <Nav.Link className="nav-item nav-link mx-3" id="Navline2">
                  <p>Eco friendly</p>
                  <NavDropdown>
                    <NavDropdown.Item eventKey="1">FABRICS</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.1">
                    SUSTAINABLE FABRICS
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="1.2">
                    ARTISAN MADE
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item eventKey="1.3">
                      FABRICS CRAFTSME
                    </NavDropdown.Item>
                  </NavDropdown>
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
