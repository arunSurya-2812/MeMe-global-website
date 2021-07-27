/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 05/07/2021 - 16:08:05
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 05/07/2021
 * - Author          : surya12
 * - Modification    :
 **/
import Essential from "./img/Essential.jpg";
import woodenplate from "./img/woodenplate.png";
import Bags from "./img/Bags.png";
import cups from "./img/cups.png";
import shoes from "./img/shoes.png";
import accessories from "./img/accessories.jpg";
import jacket from "./img/jacket.png";
import Leather1 from "./img/Leather1.jpg";
import Menproduct from "./img/Menproduct.jpg";
import Womenproduct from "./img/Womenproduct.jpg";
import Kidsproduct from "./img/Kidsproduct.jpg";
import Casualproduct from "./img/Casualproduct.png";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import React, { Component } from "react";
import "./Components.css";
import Nazca from './img/Nazca.svg'
import Ophelia from './img/Ophelia.png'
import { Row, Col, Carousel, Image, Card } from "react-bootstrap";
import Allimage from './Allimage';
import { FaArrowCircleRight } from "react-icons/fa";

import Footer from './Footer'


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div>
            <Carousel>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  style={{ borderRadius: "1cm" }}
                  src={img1}
                  alt="Second slide"
                />
                <button className="Browsebutn">
                  Browse
                  <FaArrowCircleRight className="icondnwld" />
                </button>
              </Carousel.Item>

              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  style={{ borderRadius: "1cm" }}
                  src={img2}
                  alt="Second slide"
                />
                <button className="Browsebutn">
                  Browse
                  <FaArrowCircleRight className="icondnwld" />
                </button>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  style={{ borderRadius: "1cm" }}
                  src={img3}
                  alt="Third slide"
                />
                <button className="Browsebutn">
                  Browse
                  <FaArrowCircleRight className="icondnwld" />
                </button>
              </Carousel.Item>
            </Carousel>
          </div>
          <div>
            <Allimage />
          </div>
          <div className="container-fluid">
            <Row className="Sponsers">
              <Col className="spon">
                <Image src={Nazca} className="sponsers1" />
              </Col>
              <Col className="spon">
                <Image src={Ophelia} className="sponsers2" />
              </Col>
            </Row>
          </div>

          <h1 style={{ fontFamily: "Poppins,Bold", fontSize: "33px",left:"0.5cm",position:"relative",fontWeight:"600" }}>
            Recent Discounts
          </h1>
        </div>

        <div className="container">
          <Row>
            <Col>
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
            <Col>
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
            <Col>
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
            <Col>
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
          <h1 style={{ fontFamily: "Poppins,Bold", fontSize: "33px",left:"0.5cm",position:"relative",fontWeight:"600" }}>
            Our Products
          </h1>
        </div>

        <div className="container">
          <Row>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={Bags}
                  className="Productcardimage"
                />
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
            <Col>
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
            <Col>
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
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={jacket}
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
        </div>
        <div className="container">
          <img
            src={Leather1}
            className="CobblerLeather"
            alt="cobbler-working-with-leather"
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
                position:"relative",
                top:"5.2cm",
                fontWeight:"600"
              }}
            >
              Premium Quality
            </h1>
            <h1
              style={{
                fontFamily: "Poppins,Bold",
                fontSize: "34px",
                color: "white",
                fontSize: "33px",
                fontWeight:"600",
                top:"5cm",
                position:"relative",
              }}
            >
              Meme Leather
            </h1>
          </div>
          <h1 style={{ fontFamily: "Poppins,Bold", fontSize: "38px",fontSize: "33px",left:"0.5cm",position:"relative",fontWeight:"600" }}>
            Eco - Friendly Products
          </h1>
        </div>

        <div className="container">
          <Row>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={Bags}
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
                      Bags
                    </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={woodenplate}
                  className="Productcardimage1"
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
                      Plates
                    </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={cups}
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
                      Cups
                    </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
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

        <div className="container">
          <Row>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={Bags}
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
                      Bags
                    </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={woodenplate}
                  className="Productcardimage1"
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
                      Plates
                    </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={cups}
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
                      Cups
                    </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
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
        <div className="HomeFooter">
          <Footer/>
        </div> 
      </div>
    );
  }
}
