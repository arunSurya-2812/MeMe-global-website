import { Component } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Logo from "../img/logo.png";
export default class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <Container>
          <Row>
            <Col lg={4} sm={8} xs={12}>
              <div className="logo">
                <Image
                  src={Logo}
                  height="70px"
                  width="250px"
                  alt="MeMe-Global logo"
                />
              </div>
            </Col>
            <Col lg={4} sm={4}  xs={12}style={{ marginTop: "15px" }}>
              <strong>GET IN TOUCH</strong>
              <div class="w-100"></div>
              <div class="w-100"></div>
              <strong>Address:</strong>
              <p>
                26-B,BHARATHI VILAS,JAWAHARLAL NEHRU SALAI EKKADUTHANGAL,GUINDY
                INDUSTRIAL ESTATE, CHENNAI,TAMILNADU-600003
              </p>
              <div class="w-100"></div>
              <strong>Phone:</strong>9150041898
              <div class="w-100"></div>
              <strong>Email:</strong>
              <div class="w-100"></div>
              <strong>Open Time:</strong>
              <span>8AM - 6:00PM</span>
            </Col>
            <Col lg={4} sm={4} xs={12}style={{ marginTop: "15px" }}>
              <strong>Company</strong>

              <h5>Copyright @MeMe-india </h5>
            </Col>
            <Col lg={4}></Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
