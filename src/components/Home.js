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
import Allimage from "./Allimage";
import Mighty from "./img/Mighty.png";
import Jack from "./img/Jack.png";
import Fastlane from "./img/Fastlane.png";
import { Row, Col, Carousel, Image, Card } from "react-bootstrap";


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
                  <i
                    className="fa fa-arrow-circle-right"
                    style={{ left: "0.2cm" }}
                    aria-hidden="true"
                  ></i>
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
                  <i
                    className="fa fa-arrow-circle-right"
                    style={{ left: "0.2cm" }}
                    aria-hidden="true"
                  ></i>
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
                  <i
                    className="fa fa-arrow-circle-right"
                    style={{ left: "0.2cm" }}
                    aria-hidden="true"
                  ></i>
                </button>
              </Carousel.Item>
            </Carousel>

            <Allimage />

            <div className="container-fluid">
              <Row className="Sponsers">
                <Col className="spon">
                  <Image src={Fastlane} />
                </Col>
                <Col className="spon">
                  <Image src={Jack} />
                </Col>
                <Col className="spon">
                  <Image src={Mighty} />
                </Col>
              </Row>
            </div>
          </div>

          <h1 style={{ fontFamily: "Poppins,Bold", fontSize: "38px" }}>
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
                        fontSize: "28px",
                        fontWeight: "400",
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
                        fontSize: "28px",
                        fontWeight: "400",
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
                        fontFamily: "Poppins,Bold",
                        fontSize: "28px",
                        fontWeight: "400",
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
                        fontSize: "28px",
                        fontWeight: "400",
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
          <h1 style={{ fontFamily: "Poppins,Bold", fontSize: "38px" }}>
            Our Products
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
                        fontFamily: "Poppins",
                        fontSize: "28px",
                        fontWeight: "400",
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
                  src={Casualproduct}
                  className="Productcardimage"
                />
                <Card.Body>
                  <Card.Text>
                    <h1
                      style={{
                        fontFamily: "Poppins,Bold",
                        fontSize: "28px",
                        fontWeight: "400",
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
                  src={Womenproduct}
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
                  src={Menproduct}
                  className="Productcardimage"
                />
                <Card.Body>
                  <Card.Text>
                    <h1
                      style={{
                        fontFamily: "Poppins,Bold",
                        fontSize: "28px",
                        fontWeight: "600",
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
            <i
              className="fa fa-arrow-circle-right"
              style={{ left: "0.6cm" }}
              aria-hidden="true"
            ></i>
          </button>
          <div className="Leatherdiscription">
            <h1
              style={{
                fontFamily: "Poppins,Bold",
                fontSize: "34px",
                color: "white",
              }}
            >
              Premium Quality
            </h1>
            <h1
              style={{
                fontFamily: "Poppins,Bold",
                fontSize: "34px",
                color: "white",
              }}
            >
              Meme Leather
            </h1>
          </div>
          <h1 style={{ fontFamily: "Poppins,Bold", fontSize: "38px" }}>
            Eco - Friendly Products
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
                        fontSize: "38px",
                        fontWeight: "bold",
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
                  src={Casualproduct}
                  className="Productcardimage"
                />
                <Card.Body>
                  <Card.Text>
                    <h1
                      style={{
                        fontFamily: "Poppins,Bold",
                        fontSize: "38px",
                        fontWeight: "bold",
                        color: "black",
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
                  src={Womenproduct}
                  className="Productcardimage"
                />

                <Card.Body>
                  <Card.Text>
                    <h1
                      style={{
                        fontFamily: "Poppins,Bold",
                        fontSize: "38px",
                        fontWeight: "bold",
                        color: "black",
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
                  src={Menproduct}
                  className="Productcardimage"
                />
                <Card.Body>
                  <Card.Text>
                    <h1
                      style={{
                        fontFamily: "Poppins,Bold",
                        fontSize: "38px",
                        fontWeight: "bold",
                        color: "black",
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
                  src={Kidsproduct}
                  className="Productcardimage"
                />
                <Card.Body>
                  <Card.Text>
                    <h1
                      style={{
                        fontFamily: "Poppins,Bold",
                        fontSize: "38px",
                        fontWeight: "bold",
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
                  src={Casualproduct}
                  className="Productcardimage"
                />
                <Card.Body>
                  <Card.Text>
                    <h1
                      style={{
                        fontFamily: "Poppins,Bold",
                        fontSize: "38px",
                        fontWeight: "bold",
                        color: "black",
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
                  src={Womenproduct}
                  className="Productcardimage"
                />

                <Card.Body>
                  <Card.Text>
                    <h1
                      style={{
                        fontFamily: "Poppins,Bold",
                        fontSize: "38px",
                        fontWeight: "bold",
                        color: "black",
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
                  src={Menproduct}
                  className="Productcardimage"
                />
                <Card.Body>
                  <Card.Text>
                    <h1
                      style={{
                        fontFamily: "Poppins,Bold",
                        fontSize: "38px",
                        fontWeight: "bold",
                        color: "black",
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
      </div>
    );
  }
}
