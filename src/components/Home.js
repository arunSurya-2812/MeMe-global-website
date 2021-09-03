import Bags from "../img/Bags.png";
import shoes from "../img/shoes.png";
import B1 from "../img/B1.jpg";
import B2 from "../img/B2.jpg";
import B3 from "../img/B3.jpg";
import B4 from "../img/B4.jpg";
import B5 from "../img/B5.jpg";
import Bags22 from "../img/Bags22.jpg"
import Belt22 from '../img/Belt22.jpg'
import Shoes22 from '../img/Shoes22.jpg'
import accessories from "../img/accessories.jpg";
import Leather1 from "../img/Leather1.jpg";
import Jacket from "../img/Jacket.png";
import Menproduct from "../img/Menproduct.jpg";
import Womenproduct from "../img/Womenproduct.jpg";
import Kidsproduct from "../img/Kidsproduct.jpg";
import Casualproduct from "../img/Casualproduct.png";
import React, { Component } from "react";
import "./Components.css";
import Nazca from "../img/Nazca.svg";
import opheliamoon1 from "../img/opheliamoon1.png";
import { Row, Col, Carousel, Image, Card } from "react-bootstrap";
import Allimage from "./Allimage";

export default class Home extends Component {
  render() {
    return (
      <div>
       
        <Carousel style={{ textAlign: "center" }}>
          <Carousel.Item interval={3000}>
            <a href="https://ophelia-moon.com" rel="noreferrer" target="_blank">
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src={B1}
                alt="Second slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <a href="http://memeyarn.com/home" rel="noreferrer" target="_blank">
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src={B2}
                alt="Second slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <a
              href="http://memefabric.com/home"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src={B3}
                alt="Third slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <a
              href="http://memefibre.com/home"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src={B4}
                alt="Third slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <a href="https://nazca.in/home" rel="noreferrer" target="_blank">
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src={B5}
                alt="Third slide"
              />
            </a>
          </Carousel.Item>
        </Carousel>

        <Allimage />
        <Row className="Sponsers">
          <Col className="spon" xs={6}>
            <a href="https://nazca.in/home" rel="noreferrer" target="_blank">
              <Image src={Nazca} className="sponsers1" />
            </a>
          </Col>
          <Col className="spon" xs={6}>
            <a href="https://ophelia-moon.com" rel="noreferrer" target="_blank">
              <Image src={opheliamoon1} className="sponsers2" />
            </a>
          </Col>
        </Row>
        <h1
          style={{
            fontFamily: "Poppins,Bold",
            fontSize: "33px",
            position: "relative",
            left: "1cm",
            fontWeight: "600",
          }}
        >
          Our Products
        </h1>
        <Row>
          <Col xs="12" sm="6" md="3">
            <Card>
              <Card.Img
                variant="top"
                src={Kidsproduct}
                className="Productcardimage"
              />

              <Card.Body>
                <Card.Text>
                  <h1
                    style={{
                      fontFamily: "Poppins,Bold",
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "black",
                    }}
                  >
                    Kids
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="3">
            <Card>
              <Card.Img
                variant="top"
                src={Casualproduct}
                className="Productcardimage"
              />
              <Card.Body>
                <Card.Text>
                  <h1
                    style={{
                      fontFamily: "Poppins,Bold",
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "black",
                    }}
                  >
                    Casual
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="3">
            <Card>
              <Card.Img
                variant="top"
                src={Womenproduct}
                className="Productcardimage"
              />
              <Card.Body>
                <Card.Text>
                  <h1
                    style={{
                      top: "5cm",
                      fontFamily: "Poppins,Bold",
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "black",
                    }}
                  >
                    Women
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="3">
            <Card>
              <Card.Img
                variant="top"
                src={Menproduct}
                className="Productcardimage"
              />
              <Card.Body>
                <Card.Text>
                  <h1
                    style={{
                      fontFamily: "Poppins,Bold",
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "black",
                    }}
                  >
                    Men
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h1
          style={{
            fontFamily: "Poppins,Bold",
            fontSize: "33px",
            position: "relative",
            left: "1cm",
            fontWeight: "600",
          }}
        ></h1>
        <Row>
          <Col xs="12" sm="6" md="3">
            <Card>
              <Card.Img variant="top" src={Bags22} className="Productcardimage" />
              <Card.Body>
                <Card.Text>
                  <h1
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "black",
                    }}
                  >
                    Bags
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="3">
            <Card>
              <Card.Img
                variant="top"
                src={Shoes22}
                className="Productcardimage"
              />
              <Card.Body>
                <Card.Text>
                  <h1
                    style={{
                      fontFamily: "Poppins,Bold",
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "black",
                    }}
                  >
                    Shoes
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="3">
            <Card>
              <Card.Img
                variant="top"
                src={Belt22}
                className="Productcardimage"
              />
              <Card.Body>
                <Card.Text>
                  <h1
                    style={{
                      fontFamily: "Poppins,Bold",
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "black",
                      letterSpacing: "0",
                    }}
                  >
                    Accessories
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="3">
            <Card>
              <Card.Img
                variant="top"
                src={Jacket}
                className="Productcardimage"
              />
              <Card.Body>
                <Card.Text>
                  <h1
                    style={{
                      fontFamily: "Poppins,Bold",
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "black",
                    }}
                  >
                    Jackets
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <img
            src={Leather1}
            className="CobblerLeather"
            alt="cobbler-working-with-leather"
            style={{ textAlign: "center",objectFit:"cover" }}
          />
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
