import { Component } from "react";
import {  Image, Row, Col } from "react-bootstrap";

import MIlogo2 from "../img/MIlogo2.png";
export default class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        {/* <Container> */}
          <Row>
            <Col lg={4} md={4}sm={7 } xs={12}>
              <div className="logo">
                <Image
                  src={MIlogo2}
                  height="80px"
                  width="210px"
                  alt="MeMe-Global logo"
                />
              </div>
            </Col>
            <Col lg={4} sm={4} md={3} xs={12}style={{ marginTop: "15px",fontFamily:"Poppins" }}>
              <strong >GET IN TOUCH</strong>
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
            <Col lg={4} sm={4} md={3} xs={12}style={{ marginTop: "15px",fontFamily:"Poppins"  }}>
              <strong>Company</strong>

              <h5>Copyright @MeMe-india </h5>
            </Col>
            <Col  md={3} lg={4}></Col>
          </Row>
        {/* </Container> */}
      </footer>
    );
  }
}
