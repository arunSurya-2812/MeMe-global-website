import Contactusform from "./Contactusform";
import React from "react";
import { Image, Row, Col, Card, Button, Container } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";


import Jacket from "../img/Jacket.png"

import MIleather1 from "../Pdf/MIleather1.pdf";
import Bags11 from "../img/Bags11.jpg";
import Footware from "../img/Footware.jpg";
import Bags33 from "../img/Bags33.jpg";
import Belt from "../img/Belt.jpg";
import "./Components.css";

export default class Leathers extends React.Component {
  
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="12" lg="12">
              <Card className="imgLeathersCard">
                <Card className="contentCard">
                  <Card.Body>
                    <h1 className="cardTitle" style={{ color: "white" }}>
                      ABOUT US
                    </h1>
                    <Card.Text className="cardContent">
                      <p style={{ color: "white", fontWeight: "500" }}>
                        We are India’s leading manufacturers of leather goods
                        expertise in export of high end quality of finished
                        Leather Bags, footwear and various leather accessories.
                        To gain our Customer’s trust, expectations and
                        requirements and build a long term relationship with
                        them is our main Objective.
                        <br />
                        We
                        <br /> are located in CHENNAI RANIPET INDIA
                        <br /> MEME INDIA.
                        <br /> We offer leather goods that are both fashionable
                        and sustainable. We as leather and leather goods
                        exporter in India, ship to overseas destinations like
                        Canada, Germany, France, Australia, Russia, USA and
                        other European Countries. We deal in Leather bags, Belts
                        ,wallets and all kinds of small leather goods for both
                        Men & Women segment. <br /> MEME Leather has a dedicated
                        leather tannery in the southern Indian city of Chennai,
                        which can process 15,000 skins each day. This backward
                        integration enables MEME to create new finishes and
                        fashions in leather, which has been a key element in
                        growing our business. This facility has multiplied its
                        capacity to serve as our hub for leather sourcing and
                        finishing.
                      </p>
                    </Card.Text>
                    <a href={MIleather1} download="MI Leather" target="_blank">
                      <Button className="cardButton">
                        <FaDownload className="pdfIcon" />
                        Download PDF
                      </Button>
                    </a>
                  </Card.Body>
                </Card>
              </Card>
            </Col>
          </Row>
          <br />
          <Row style={{ textAlign: "center" }}>
            <h1>Our Products</h1>
            <Col md="3" lg="3" sm="4">
              <Image src={Bags11} className="Fiberproductcol1" roundedCircle />
              <h1>Bags</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image src={Bags33} className="Fiberproductcol2" roundedCircle />
              <h1> Accessories</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image
                src={Footware}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> Footwears</h1>
            </Col>
            <Col md="3" lg="3" sm="12">
              <Image src={Belt} className="Fiberproductcol3" roundedCircle />
              <h1> Belt</h1>
            </Col>
          </Row>
         
          <br />
          <br />
          <Row style={{ textAlign: "center" }}>
            <Col md="12" lg="12" sm="12">
              <Image src={Jacket} className="Fiberproductcol1" roundedCircle />
              <h1>Jackets</h1>
            </Col>
           
          </Row>
          <br />

          <br />
         
          <br />

          <Row style={{ textAlign: "center" }}>
            <Button className="websiteButton">View Website</Button>
          </Row>
          <br />
          <Contactusform />
        </Container>
      </div>
    );
  }
}
