import "./Components.css";
import { FaDownload } from "react-icons/fa";
import Contactusform from "./Contactusform";
import React from "react";
import { Image, Row, Col, Card, Button, Container } from "react-bootstrap";

import Kyorene from '../img/Kyorene.png'
import White from '../img/White.jpg'
import Continuous from '../img/Continuous.jpeg'
import stapleblend from '../img/stapleblend.jpg'
import Miyarn from '../Pdf/Miyarn.pdf'
export default class Yarn extends React.Component {
 
  render() {
    return (
      <div>
        <Container>
      


          <Row>
            <Col md="12" lg="12">
              <Card className="imgYarnCard">
                <Card className="contentCard">
                  <Card.Body>
                    <h1 className="cardTitle" style={{ color: "white" }}>
                      ABOUT US
                    </h1>
                    <Card.Text className="cardContent">
                      <p style={{ color: "white", fontWeight: "500" }}>
                        Our website, MEME INDIA has this new era of yarn
                        collection. MEME INDIA defines a modern state of mind, a
                        way of looking at things differently. Concentrated by
                        our genius and talented artists, they will surprise you
                        with their sophisticated designs. Our team is always
                        working on how and in what ways we can satisfy all of
                        your concerns, and keep you happy when you invest in new
                        fibers, colors, and designs. For MEME INDIA, it is most
                        important to listen to our shopper opinions, because not
                        only do we succeed in fulfilling your desires, but also,
                        thanks to you, we continue to move all together, in the
                        same direction.
                      </p>
                    </Card.Text>
                    <a href={Miyarn} download="MI Yarn" target="_blank" rel="noreferrer">
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
            <br/>
            <br/>
            <Col md="3" lg="3" sm="4">
              <Image src={Kyorene} className="Fiberproductcol1" roundedCircle />
              <h1>Kyorene Polymide Filament</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image src={stapleblend} className="Fiberproductcol2" roundedCircle />
              <h1> Staple Blend Cotton</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image
                src={Continuous}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1>Continuous Filament</h1>
            </Col>
            <Col md="3" lg="3" sm="12">
              <Image
                src={White}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> Kyorene White Polyamide</h1>
            </Col>
          </Row>
          <br />

       
          <br />
          <Row style={{ textAlign: "center" }}>
          <a href="http://memeyarn.com/home" rel="noreferrer" target="_blank">
            <Button className="websiteButton">View Website</Button>
            </a>
          </Row>
          <br />
          <Contactusform />
        </Container>
      </div>
    );
  }
}
