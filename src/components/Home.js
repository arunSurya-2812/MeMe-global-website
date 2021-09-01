import Essential from "../img/Essential.jpg";
import Bags from "../img/Bags.png";
import cups from "../img/cups.png";
import shoes from "../img/shoes.png";
import B1 from "../img/B1.jpg";

import B2 from "../img/B2.jpg";
import B3 from "../img/B3.jpg";
import B4 from "../img/B4.jpg";
import B5 from "../img/B5.jpg";
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
import { FaArrowCircleRight } from "react-icons/fa";

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
            <img
              className="d-block w-100"
              style={{ borderRadius: "20px" }}
              src={B2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              style={{ borderRadius: "20px" }}
              src={B3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              style={{ borderRadius: "20px" }}
              src={B4}
              alt="Third slide"
            />
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
          <Col className="spon" Col-xs={12}>
            <a href="https://nazca.in/home" rel="noreferrer" target="_blank">
              <Image src={Nazca} className="sponsers1" />
            </a>
          </Col>
          <Col className="spon" Col-xs={12}>
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
          <Col xs="6" sm="3" md="3">
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

          <Col xs="6" sm="3" md="3">
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

          <Col xs="6" sm="3" md="3">
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

          <Col xs="6" sm="3" md="3">
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
          <Col xs="6" sm="3" md="3">
            <Card>
              <Card.Img variant="top" src={Bags} className="Productcardimage" />
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

          <Col xs="6" sm="3" md="3">
            <Card>
              <Card.Img
                variant="top"
                src={shoes}
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

          <Col xs="6" sm="3" md="3">
            <Card>
              <Card.Img
                variant="top"
                src={accessories}
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

          <Col xs="6" sm="3" md="3">
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
        <img
          src={Leather1}
          className="CobblerLeather"
          alt="cobbler-working-with-leather"
          style={{ textAlign: "center" }}
        />
        <button className="Leatherbtn">
          Browse
          <FaArrowCircleRight className="icondnwld1" />
        </button>
        <div className="Leatherdiscription">
          <h1
            style={{
              fontFamily: "Poppins,Bold",
              fontSize: "34px",
              color: "white",
              position: "relative",
              top: "5cm",
              fontWeight: "600",
            }}
          >
            Premium Quality
          </h1>
          <h1
            style={{
              fontFamily: "Poppins,Bold",
              fontSize: "34px",
              color: "white",
              position: "relative",
              top: "5cm",
              fontWeight: "600",
            }}
          >
            Meme Leather
          </h1>
        </div>
        <h1
          style={{
            fontFamily: "Poppins,Bold",
            fontSize: "33px",
            position: "relative",
            left: "1cm",
            fontWeight: "600",
          }}
        >
          Eco - Friendly Products
        </h1>
        <Row>
          <Col xs="6" sm="3" md="3">
            <Card>
              <Card.Img variant="top" src={Bags} className="Productcardimage" />
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
                    Bags
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="6" sm="3" md="3">
            <Card>
              <Card.Img variant="top" src={Bags} className="Productcardimage" />
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
                    Plates
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="6" sm="3" md="3">
            <Card>
              <Card.Img variant="top" src={cups} className="Productcardimage" />
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
                    Cups
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="6" sm="3" md="3">
            <Card>
              <Card.Img
                variant="top"
                src={Essential}
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
                    Essentials
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
