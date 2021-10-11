import React from "react";
import { Image, Row, Col, Card, Button } from "react-bootstrap";

import "./Components.css";
import Loungeandsleepwear1 from "../img/Loungeandsleepwear1.jpg";
import Loungeandsleepwear2 from "../img/Loungeandsleepwear2.jpg";
import Loungeandsleepwear3 from "../img/Loungeandsleepwear3.jpg";
import Loungeandsleepwear4 from "../img/Loungeandsleepwear4.jpg";
import Loungeandsleepwear5 from "../img/Loungeandsleepwear5.jpg";
import Loungeandsleepwear6 from "../img/Loungeandsleepwear6.jpg";
import Loungeandsleepwear7 from "../img/Loungeandsleepwear7.jpg";
import Loungeandsleepwear8 from "../img/Loungeandsleepwear8.jpg";
import Loungeandsleepwear9 from "../img/Loungeandsleepwear9.jpg";
import Casualwear1 from "../img/Casualwear1.jpg";
import Casualwear2 from "../img/Casualwear2.jpg";
import Casualwear3 from "../img/Casualwear3.jpg";
import Casualwear4 from "../img/Casualwear4.jpg";
import Casualwear5 from "../img/Casualwear5.jpg";
import Casualwear6 from "../img/Casualwear6.jpg";
import Casualwear7 from "../img/Casualwear7.jpg";
import Casualwear8 from "../img/Casualwear8.jpg";
import Casualwear9 from "../img/Casualwear9.jpg";
import Casualwear10 from "../img/Casualwear10.jpg";
import Casualwear11 from "../img/Casualwear11.jpg";
import ActiveandFitness1 from "../img/ActiveandFitness1.jpg";
import ActiveandFitness2 from "../img/ActiveandFitness2.jpg";
import ActiveandFitness3 from "../img/ActiveandFitness3.jpg";
import ActiveandFitness4 from "../img/ActiveandFitness4.jpg";
import ActiveandFitness5 from "../img/ActiveandFitness5.jpg";
import ActiveandFitness6 from "../img/ActiveandFitness6.jpg";
import ActiveandFitness7 from "../img/ActiveandFitness7.jpg";
import ActiveandFitness8 from "../img/ActiveandFitness8.jpg";
import ActiveandFitness9 from "../img/ActiveandFitness9.jpg";
import ActiveandFitness10 from "../img/ActiveandFitness10.jpg";
import ActiveandFitness11 from "../img/ActiveandFitness11.jpg";
import ActiveandFitness12 from "../img/ActiveandFitness12.jpg";
import ActiveandFitness13 from "../img/ActiveandFitness13.jpg";
import ActiveandFitness14 from "../img/ActiveandFitness14.jpg";
import ActiveandFitness15 from "../img/ActiveandFitness15.jpg";
import ActiveandFitness16 from "../img/ActiveandFitness16.jpg";
import ActiveandFitness17 from "../img/ActiveandFitness17.jpg";
// import Contactusform from "./Contactusform";
import { FaDownload } from "react-icons/fa";
import MiKnits from "../Pdf/MiKnits.pdf";
import { Scroll } from "react-scroll/modules/mixins/Helpers";


export default class Knits extends React.Component{
 
  render(){
    return (
    <div>
    
      <Row>
        <Col md="12" lg="12">
          <Card className="imgKnitsCard">
            <Card className="contentCard">
              <Card.Body>
                <h1 className="cardTitle">ABOUT US</h1>
                <Card.Text className="cardContent">
                  <p>
                    MEME Group was established in 1992, and our Knits division
                    is based at the Knit city of India TIRUPUR, we manufacture
                    and export of All kinds of Knitted products, T-shirt, Polo,
                    Track Pant, Shorts, Pyjamas for Men’s Women’s Kids boys and
                    Kid’s girls. strategically we located to source all kinds of
                    Jersey Knit Products. With our own Sampling and New Product
                    Development facility and partnerships with key vendors for
                    Yarn, Knitting, Embroidery, Printing, Washing, we can handle
                    small and big volume orders from our clients.
                  </p>
                </Card.Text>
                <a
                  href={MiKnits}
                  download="MI Knits"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="cardButton">
                    <FaDownload className="pdfIcon" />
                    Download Pdf
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
        <br />
        <br />
        <h1>Lounge and sleep wear</h1>

        <Col md="3" lg="3" sm="4">
          <Image
            src={Loungeandsleepwear1}
            className="Fiberproductcol1"
            roundedCircle
          />
          <h1> Lounge and sleepwear 1</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={Loungeandsleepwear2}
            className="Fiberproductcol2"
            roundedCircle
          />
          <h1> Lounge and sleepwear 2</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={Loungeandsleepwear3}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Lounge and sleepwear 3</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={Loungeandsleepwear4}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1>Lounge and sleepwear 4</h1>
        </Col>
        <br />
        <br />
        <br />

        <Col md="3" lg="3" sm="4">
          <Image
            src={Loungeandsleepwear5}
            className="Fiberproductcol1"
            roundedCircle
          />
          <h1>Lounge and sleepwear 5</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={Loungeandsleepwear6}
            className="Fiberproductcol2"
            roundedCircle
          />
          <h1> Lounge and sleep wear 6</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={Loungeandsleepwear7}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Lounge and sleepwear 7 </h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={Loungeandsleepwear8}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Lounge and sleepwear 8 </h1>
        </Col>
        <br />
        <br />

        <br />
        <Col md="7" lg="7" sm="4">
          <Image
            src={Loungeandsleepwear9}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Lounge and sleep wear 9</h1>
        </Col>
        <Col md="2" lg="2" sm="12">
          {/* <Image
              src={sleepwear1}
              className="Fiberproductcol3"
              roundedCircle
            /> */}
          {/* <h1> RELAX & SLEEPWEAR</h1> */}
        </Col>
      </Row>

      <br />

      <br />

      <Row style={{ textAlign: "center" }}>
        <br />
        <br />
        <h1>Casual Wear</h1>

        <Col md="3" lg="3" sm="4">
          <Image src={Casualwear1} className="Fiberproductcol1" roundedCircle />
          <h1> Casual wear 1</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image src={Casualwear2} className="Fiberproductcol2" roundedCircle />
          <h1> Casual wear 2</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image src={Casualwear3} className="Fiberproductcol3" roundedCircle />
          <h1> Casual wear 3</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image src={Casualwear4} className="Fiberproductcol3" roundedCircle />
          <h1>Casual wear 4</h1>
        </Col>
        <br />
        <br />
        <br />

        <Col md="3" lg="3" sm="4">
          <Image src={Casualwear5} className="Fiberproductcol1" roundedCircle />
          <h1>Casual wear 5</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image src={Casualwear6} className="Fiberproductcol2" roundedCircle />
          <h1> Casual wear 6</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image src={Casualwear7} className="Fiberproductcol3" roundedCircle />
          <h1> Casual wear 7 </h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image src={Casualwear8} className="Fiberproductcol3" roundedCircle />
          <h1> Casual wear 8 </h1>
        </Col>
        <br />
        <br />

        <br />
        <Col md="4" lg="4" sm="4">
          <Image src={Casualwear9} className="Fiberproductcol3" roundedCircle />
          <h1> Casual wear 9</h1>
        </Col>
        <Col md="4" lg="4" sm="4">
          <Image
            src={Casualwear10}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Casual wear 10</h1>
        </Col>

        <Col md="4" lg="4" sm="4">
          <Image
            src={Casualwear11}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Casual wear 11</h1>
        </Col>
      </Row>
      <br />

      <br />

      <Row style={{ textAlign: "center" }}>
        <br />
        <br />
        <h1>Active and Fitness</h1>

        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness1}
            className="Fiberproductcol1"
            roundedCircle
          />
          <h1> Active and Fitness 1</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness2}
            className="Fiberproductcol2"
            roundedCircle
          />
          <h1> Active and Fitness 2</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness3}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Active and Fitness 3</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness4}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1>Active and Fitness 4</h1>
        </Col>
        <br />
        <br />
        <br />

        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness5}
            className="Fiberproductcol1"
            roundedCircle
          />
          <h1>Active and Fitness 5</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness6}
            className="Fiberproductcol2"
            roundedCircle
          />
          <h1> Active and Fitness 6</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness7}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Active and Fitness 7 </h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness8}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Active and Fitness 8 </h1>
        </Col>

        <br />
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness9}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Active and Fitness 9</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness10}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Active and Fitness 10</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness11}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Active and Fitness 11</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness12}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Active and Fitness 12</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness13}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Active and Fitness 13</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness14}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Active and Fitness 14</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness15}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Active and Fitness 15</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness16}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1>Active and Fitness 16</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image
            src={ActiveandFitness17}
            className="Fiberproductcol3"
            roundedCircle
          />
          <h1> Active and Fitness 17</h1>
        </Col>
      </Row>

      <br />
      <Row style={{ textAlign: "center" }}>
        <Button className="websiteButton" onClick={scroll(0,100)}>View Website</Button>
      </Row>

      <br />

      <br />

      <br />
      {/* <Contactusform /> */}
    </div>
  );
}
}
