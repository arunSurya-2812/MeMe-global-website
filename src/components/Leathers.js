import Contactusform from "./Contactusform";
import React from "react";
import { Image, Row, Col, Card, Button } from "react-bootstrap";

import leather from "./img/leather.png";
import leatherbag1 from "./img/leatherbag1.jpeg";
import leatherbag2 from "./img/leatherbag2.jpeg";
import leatherbag3 from "./img/leatherbag3.jpeg";
import leathershoe from "./img/leathershoe.jpeg";
import { FaDownload } from "react-icons/fa";
import "./Components.css";

export default function Knits() {
  return (
    <>
      <Row>
        <Col md="12" lg="12">
          <Card className="imgCard">
            <Card.Img
              src={leather}
              alt="Fiber-main"
              className="bgImg"
            ></Card.Img>
          </Card>
          <Card className="contentCard">
            <Card.Body>
              <h1 className="cardTitle">ABOUT US</h1>
              <Card.Text className="cardContent">
                <p>
                  We are India’s leading manufacturers of leather goods
                  expertise in export of high end quality of finished Leather
                  Bags, footwear and various leather accessories. To gain our
                  Customer’s trust, expectations and requirements and build a
                  long term relationship with them is our main Objective. We are
                  located in CHENNAI RANIPET INDIA MEME INDIA. We offer leather
                  goods that are both fashionable and sustainable. We as leather
                  and leather goods exporter in India, ship to overseas
                  destinations like Canada, Germany, France, Australia, Russia,
                  USA and other European Countries. We deal in Leather bags,
                  Belts ,wallets and all kinds of small leather goods for both
                  Men & Women segment. <br /> MEME Leather has a dedicated
                  leather tannery in the southern Indian city of Chennai, which
                  can process 15,000 skins each day. This backward integration
                  enables MEME to create new finishes and fashions in leather,
                  which has been a key element in growing our business. This
                  facility has multiplied its capacity to serve as our hub for
                  leather sourcing and finishing.
                </p>
              </Card.Text>
              <Button className="cardButton">
                <FaDownload className="pdfIcon" />
                Download PDF
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row style={{ textAlign: "center" }}>
        <h1>Our Products</h1>
        <Col md="3" lg="3" sm="4">
          <Image src={leatherbag1} className="Fiberproductcol1" roundedCircle />
          <h1>Bags</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image src={leatherbag2} className="Fiberproductcol2" roundedCircle />
          <h1> Accessories</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image src={leatherbag3} className="Fiberproductcol3" roundedCircle />
          <h1> Jacket</h1>
        </Col>
        <Col md="3" lg="3" sm="12">
          <Image src={leathershoe} className="Fiberproductcol3" roundedCircle />
          <h1> Footwares</h1>
        </Col>
      </Row>
      <br />

      <Row>
        <Col md="12" lg="12" xs={4} sm={8}>
          <Button className="websiteButton">View Website</Button>
        </Col>
      </Row>
      <br />
      <Contactusform />
    </>
  );
}
