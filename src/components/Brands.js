import React from "react";
import { Image, Row, Col, Card, Button, Container } from "react-bootstrap";

import Nazca from "../img/Nazca.svg";
import Ophelia from "../img/Ophelia.png";

export default class Brands extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <br />
        
          <Row className="Sponsers">
            <Col className="spon" xs={6}>
              <a href="https://nazca.in/home" rel="noreferrer" target="_blank">
                <Image src={Nazca} className="sponsers1" />
              </a>
            </Col>
            <Col className="spon" Col-xs={6}>
              <a
                href="https://ophelia-moon.com"
                rel="noreferrer"
                target="_blank"
              >
                <Image src={Ophelia} className="sponsers2" />
              </a>
            </Col>
          </Row>

          <br />

          <br />

          <Row>
            <Col>
              <header>
                <h1>Nazca</h1>
              </header>
              <p>
                Our point of view on fashion is quite different from the rest of
                the world. Our Nazca brands, created by our India-based design
                team, aim to bring you fashionable and contemporary clothes.
                <br />
                <br />
                We believe in a world where you have the total freedom to be
                yourself without the slightest judgment. Our customer (that is,
                you) is wonderfully unique to us. And we go out of our way to
                help you find your suitable size, as our Nazca Brands are
                available in all sizes. So you can be sure that we have the
                perfect garment for you. We also promote a healthy body image.
                Because we don't stand to any stereotypes to represent our
                audience.
                <br />
                <br /> We believe that fashion shouldn't come with compromises,
                be it in terms of style, price or impact. We have set ourselves
                ambitious goals to reduce the impact of our products,
                operations, and logistics, and we are always looking for new
                ways to advance sustainability.
              </p>
            </Col>

            <Col>
              <header>
                <h1>Ophelia Moon</h1>
              </header>{" "}
              <p>
                Jewellery has the power to be the one little thing that makes
                you feel unique.” Our jewelry is a picture of elegance, beauty,
                and culture that shows timeless, classic, and unique beauty.
                <br />
                <br /> Every piece is handcrafted with passion, dedication,
                precision, and full of tenderness by our talented artisans that
                add sophistication and royalty. Ophelia Moon is designing
                elegant pieces of jewellery and casual classy Indo western comfy
                clothes with the richness of Indian incense and a perfect blend
                of modern and classy designs. Our collection is a reflection of
                royalty testament to modern-day elegance.
              </p>
            </Col>
          </Row>
         
          <br />
          <br />

       
        </Container>
      </div>
    );
  }
}
