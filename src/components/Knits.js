import React from "react";
import { Image, Row, Col, Card, Button, Container } from "react-bootstrap";

import "./Components.css";
import Linen from "../img/Linen.jpg";
import cotton1 from "../img/cotton1.jpg";
import bananafibre from "../img/bananafibre.jpg";
import fabproduct4 from "../img/fabproduct4.png";
import Contactusform from "./Contactusform";
import { FaDownload } from "react-icons/fa";
import Pant from "../img/Pant.jpg";
import Sportswear from "../img/Sportswear.jpg";
import Sleepwear from "../img/Sleepwear.jpg";
import Innerwear from "../img/Innerwear.jpg";
import Polo from "../img/Polo.jpg";
import Shirt from "../img/Shirt.jpg";
import Joggers from "../img/Joggers.jpg";
import Jeans from "../img/Jeans.jpg";
import Hoodie from "../img/Hoodie.jpg";
import Tshirt from "../img/Tshirt.jpg";

export default class Knits extends React.Component {
 
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="12" lg="12">
              <Card className="imgKnitsCard">
                <Card className="contentCard">
                  <Card.Body>
                    <h1 className="cardTitle">ABOUT US</h1>
                    <Card.Text className="cardContent">
                      <p>
                        Knitting your own clothes is not only satisfying, it
                        gives you more freedom when we create each piece exactly
                        as you like. Knitting is strongly recommended for
                        everyone, as it dramatically improves skills and
                        stimulates the brain. It helps to stay active and work
                        passively. Our artisans love working the wool and
                        needles that create a magical moment. Our soft, fluffy,
                        and durable yarn is a fantastic value for money and is
                        perfect for knitting. Choose from our website MEME
                        INDIA, you'll be sure to find your perfect beauty. Make
                        room in your wardrobe for the new fiber that will take
                        your breath away. It will surprise you with both its
                        softness and its warmth.
                      </p>
                    </Card.Text>
                    <Button className="cardButton">
                      <FaDownload className="pdfIcon" />
                      Download PDF
                    </Button>
                  </Card.Body>
                </Card>
              </Card>
            </Col>
          </Row>
          <br />    
          <Row style={{ textAlign: "center" }}>
            <h1>Our Products</h1>
            <Col md="3" lg="3" sm="4">
              <Image src={Tshirt} className="Fiberproductcol1" roundedCircle />
              <h1> T-SHIRT</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image src={Polo} className="Fiberproductcol2" roundedCircle />
              <h1> POLO</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image
                src={Shirt}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> SHIRTS</h1>
            </Col>
            <Col md="3" lg="3" sm="12">
              <Image
                src={Pant}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> 
            PANTS & TROUSERS</h1>
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>
          <Row  style={{textAlign:"center"}}>
            <Col md="3" lg="3" sm="4">
              <Image src={Jeans} className="Fiberproductcol1" roundedCircle />
              <h1>JEANS</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image src={Hoodie} className="Fiberproductcol2" roundedCircle />
              <h1> SWEATS & HOODIES</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image
                src={Joggers}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> TRACKS & JOGGER </h1>
            </Col>
            <Col md="3" lg="3" sm="12">
              <Image
                src={Innerwear}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> INNERWEAR </h1>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row  style={{textAlign:"center"}}>
            <Col md="3" lg="8" sm="6">
              <Image
                src={Sportswear}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> SPORTS WEAR</h1>
            </Col>
            <Col md="2" lg="2" sm="6">
              <Image
                src={Sleepwear}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> RELAX & SLEEPWEAR</h1>
            </Col>
          </Row>
          
          <br />
          
          <br />
          
          <br />
          <Row style={{ textAlign: "center" }}>
            <Button className="websiteButton">View Website</Button>
          </Row>

          <br />
          
          <br />
          
          <br />
          <Contactusform />
        </Container>
      </div>
    );
  }
}
