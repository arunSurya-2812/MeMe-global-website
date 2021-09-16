import React from "react";
import { Image, Row, Col, Card, Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import "./Components.css";
import Knit from '../img/Knit.jpg'
import weave from '../img/weave.jpg'
// import Contactusform from "./Contactusform";


export default class Fabrics extends React.Component {
  render() {
    return (
      <div>

          <Row>
            <Col md="12" lg="12">
              {" "}
              <Card className="imgFabricsCard">
                <Card className="contentCard">
                  <Card.Body>
                    <h1
                      className="cardTitle"
                      style={{ color: "white", fontWeight: "800" }}
                    >
                      ABOUT US
                    </h1>
                    <Card.Text className="cardContent">
                      <p style={{ color: "white", fontWeight: "500" }}>
                        MEME INDIA offers you probably a wide range of the
                        highest quality fabrics made from natural fibers. Our
                        exclusive variety is perfect for making home textiles,
                        furniture, crafts, or clothing materials to create an
                        elegant, versatile wardrobe collection for yourself or
                        as gifts for others. It is also a great way to stand out
                        in the fast-fashion world, especially if you choose
                        sustainable fabrics from our website.
                      </p>
                    </Card.Text>
                    <Button className="cardButton">
                      <FaDownload className="pdfIcon" />
                      Download Pdf
                    </Button>
                  </Card.Body>
                </Card>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row style={{ textAlign: "center" }}>
          
            <Col md="7" lg="7" sm="6">
              <Image
                src={Knit}
                className="Fiberproductcol2"
                roundedCircle
              />
              <h1> knits</h1>
            </Col>
            <Col md="3" lg="3" sm="6">
              <Image
                src={weave}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> Weave
              
              </h1>
            </Col>
        
          </Row>
          <br />
          <br />
          <br />
          <Row style={{ textAlign: "center" }}>
          <a
              href="http://memefabric.com/home"
              rel="noreferrer"
              target="_blank"
            >
            <Button className="websiteButton">View Website</Button>
            </a>
          </Row>
          <br />
          <br />
          <br />
          {/* <Contactusform /> */}
  
      </div>
    );
  }
}
