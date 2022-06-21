import B1 from "../img/B1.jpg";
import B2 from "../img/B2.jpg";
import B3 from "../img/B3.jpg";
import B4 from "../img/B4.jpg";
import B5 from "../img/B5.jpg";
import asset1 from "../img/ASSET-01.jpg";
import asset2 from "../img/ASSET-02.jpg"
import asset3 from "../img/ASSET-03.jpg"

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
                src={asset1}
                alt="Second slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <a href="https://ophelia-moon.com" rel="noreferrer" target="_blank">
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src={asset2}
                alt="Second slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <a href="https://ophelia-moon.com" rel="noreferrer" target="_blank">
              <img
                className="d-block w-100"
                style={{ borderRadius: "20px" }}
                src={asset3}
                alt="Second slide"
              />
            </a>
          </Carousel.Item>
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
        <Row>
          <Col md="12" lg="12">
           
              <Card className="contentCard">
                <Card.Body>
                  <h1 className="cardTitle">ABOUT US</h1>
                  <Card.Text className="cardContent">
                    <p>
                      We MeMe Group BEGAN our journey in 1992, with the vision
                      of building up our company, to emerge as one of the
                      leading processors, manufacturer and trading of premium
                      products Leather, Textile, Fibre and Yarn in India. From
                      humble beginnings, we have been able to put together as
                      unit of people and technology that functions optimally and
                      allows us to adhere to the strict standards of quality
                      that we pride ourselves on.
                      <br />
                      <br /> Our Leather division is based at Ranipet, we
                      manufacture and export Leather products, bags, Shoes,
                      Jackets and accessories
                      <br />
                      <br /> Our Textile division is based at textile city of
                      India TIRUPUR, we manufacture and export all kinds of
                      Knits, woven and home textiles products.
                      <br /> <br /> We also import and export all type of Fibre,
                      Yarn and Fabric, Products of Natural, Manmade and
                      Artificial Fibres with Dope dyed, eco-friendly and many
                      more. <br />
                      <br />
                      “We offer in-house designing & customized products”
                      <br />
                    </p>
                    <h1 className="cardTitle">STANDARDS</h1>
                    <p>
                      Standards are technical performance benchmarks and
                      frameworks, developed by bodies of experts. There are
                      mandatory (legally required) and voluntary standards;
                      since we’re discussing certifications right now, we’re
                      focused on voluntary standards. Standards exist for every
                      aspect of operations and vary incredibly in effectiveness
                      and reputation. In general, the most important categories
                      will be (with some overlap), quality management, social
                      responsibility & ethical practices, and environmental
                      management & sustainability. Suppliers adopt a voluntary
                      standard by operating in compliance to the standard’s
                      criteria.
                    </p>
                    <h1 className="cardTitle">VISION</h1>
                    <p>
                      Our vision is to develop in the field of manufacturing in
                      a way, that its presence is felt by everyone and to
                      develop products best suited to its customers and to be
                      the most desirable company for its stakeholders.
                    </p>
                    <h1 className="cardTitle">MISSION</h1>
                    <p>
                      To provide comprehensive range of services in the field of
                      manufacturing aimed at quality improvement, cost control,
                      performance enhancement and effective working, environment
                      friendly and utilizing the most of its investment in
                      physical and human assets.
                      <br />
                      <br />
                      "Let's join the movement to reduce plastic use and wastage."
                      <br/>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
           
          </Col>
        </Row>
      </div>
    );
  }
}
