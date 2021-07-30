/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 30/06/2021 - 15:14:21
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 30/06/2021
 * - Author          : surya12
 * - Modification    :
 **/
import React, {
  Component
} from "react";
import Eco1 from "./img/Eco1.jpg";
import Linen from "./img/Linen.jpg";
import cotton1 from "./img/cotton1.jpg";
import bananafibre from "./img/bananafibre.jpg";
import fabproduct4 from "./img/fabproduct4.png";
import fabproduct1 from "./img/fabproduct1.png";

import {FaDownload} from "react-icons/fa";
import Contactusform from "./Contactusform";

import { Image, Row, Col, Card, Button } from "react-bootstrap";


export default function Ecofriendly() {
  return (
    <>
      <Row>
        <Col md="12" lg="12">
          <Card className="imgCard">
            <Card.Img src={Eco1} alt="Fiber-main" className="bgImg"></Card.Img>
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
        <Col md="4" lg="2"sm-xs="3">
          <Image src={cotton1} className="Fiberproductcol1" roundedCircle />
          <h1>FABRICS</h1>
        </Col>
        <Col md="4" lg="4" sm-xs="2">
          <Image src={Linen} className="Fiberproductcol2" roundedCircle />
          <h1> SUSTAINABLE FABRICS</h1>
        </Col>
        <Col md="4" lg="2" sm-xs="3">
          <Image src={fabproduct4} className="Fiberproductcol3" roundedCircle />
          <h1> ARTISAN MADE</h1>
        </Col>
        <Col md="12" lg="4" sm-xs="2">
          <Image src={bananafibre} className="Fiberproductcol3" roundedCircle />
          <h1>FABRICS  </h1><h1> CRAFTSME</h1>
        </Col>
      </Row>
      <br />
      
      
     
      <Row>
        <Col md="12" lg="12">
          <Button className="websiteButton">View Website</Button>
        </Col>
      </Row>
    <br/>
      <Contactusform />
    </>
  );
}
