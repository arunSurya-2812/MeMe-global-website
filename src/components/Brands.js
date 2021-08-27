import React from "react";
import { Image, Row, Col, Card, Button, Container } from "react-bootstrap";
import axios from "axios";

import OM from "../img/OM.jpg";
// import Contactusform from "./Contactusform";
// import { FaDownload } from "react-icons/fa";
// import Linen from "../img/Linen.jpg";
// import cotton1 from "../img/cotton1.jpg";
// import bananafibre from "../img/bananafibre.jpg";
// import fabproduct4 from "../img/fabproduct4.png";
// import fabproduct1 from "../img/fabproduct1.png";
import Nazca from "../img/Nazca.svg";
import Ophelia from "../img/Ophelia.png";

export default class Brands extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: "",
  //     suggestions: [],
  //     items: [],
  //   };
  // }

  // componentDidMount = () => {
  //   let config = {
  //     url: "https://api.nazca.in:8443/ophelia/ophelia/mainproducts",
  //     method: "GET",
  //   };
  //   axios(config)
  //     .then((res) => {
  //       let data = res.data,
  //         arrItems = [];
  //       data.forEach((element) => {
  //         arrItems.push(element.mainCatName);
  //       });
  //       this.setState({ items: arrItems }, () => {});
  //     })
  //     .catch((err) => console.log(err));
  // };

  // handleTextChange = (e) => {
  //   const value = e.target.value;
  //   let suggestions = [];
  //   if (value.length > 0) {
  //     const regex = new RegExp(`^${value}`, "i");
  //     suggestions = this.state.items.sort().filter((v) => regex.test(v));
  //   }
  //   this.setState(() => ({
  //     suggestions,
  //     text: value,
  //   }));
  // };

  // suggestionSelected(value) {
  //   this.setState(() => ({
  //     text: value,
  //     suggestions: [],
  //   }));
  // }

  // renderSuggestions() {
  //   const { suggestions } = this.state;
  //   if (suggestions.length === 0) {
  //     return null;
  //   }
  //   return (
  //     <div className="srchList">
  //       <ul>
  //         {suggestions.map((item) => (
  //           <li onClick={() => this.suggestionSelected(item)}>{item}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div>
        <Container>
          {/* <div className="flex-container">
            <div className="search">
              <div className="searchBar">
                <input
                  type="text"
                  value={this.state.text}
                  placeholder="Looking for..."
                  className="searchInput"
                  onChange={(e) => this.handleTextChange(e)}
                />
                <button type="button" className="searchButton">
                  SEARCH
                </button>
              </div>
            </div>
          </div> */}
          {/* <div>
            <p>{this.renderSuggestions()}</p>
          </div> */}
          {/* <Row>
            <Col md="12" lg="12">
              <Card className="imgBrandsCard">
                <Card className="contentCard">
                  <Card.Body>
                    <h1 className="cardTitle" style={{fontWeight:"800"}}>ABOUT US</h1>
                    <Card.Text className="cardContent">
                      <p>
                        We are India’s leading manufacturers of leather goods
                        expertise in export of high end quality of finished
                        Leather Bags, footwear and various leather accessories.
                        To gain our Customer’s trust, expectations and
                        requirements and build a long term relationship with
                        them is our main Objective.
                        <br />
                        We
                        <br /> are located in CHENNAI RANIPET INDIA
                        <br /> MEME INDIA.
                        <br /> We offer leather goods that are both fashionable
                        and sustainable. We as leather and leather goods
                        exporter in India, ship to overseas destinations like
                        Canada, Germany, France, Australia, Russia, USA and
                        other European Countries. We deal in Leather bags, Belts
                        ,wallets and all kinds of small leather goods for both
                        Men & Women segment. <br /> MEME Leather has a dedicated
                        leather tannery in the southern Indian city of Chennai,
                        which can process 15,000 skins each day. This backward
                        integration enables MEME to create new finishes and
                        fashions in leather, which has been a key element in
                        growing our business. This facility has multiplied its
                        capacity to serve as our hub for leather sourcing and
                        finishing.
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
              <Image src={cotton1} className="Fiberproductcol1" roundedCircle />
              <h1>Cotton</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image src={Linen} className="Fiberproductcol2" roundedCircle />
              <h1> Linen</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image
                src={fabproduct4}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> Fibre</h1>
            </Col>
            <Col md="3" lg="3" sm="12">
              <Image
                src={bananafibre}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> Fibre</h1>
            </Col>
          </Row>
          <br />

          <Row style={{ textAlign: "center" }}>
            <Col md="12" lg="12" sm="12">
              <Image
                src={fabproduct1}
                className="Fiberproductcol4"
                roundedCircle
              />
              <h1> Silk</h1>
            </Col>
          </Row> */}
          <br />
          <Row>
            <Col md="12" lg="12">
              <Card className="imgYarnCard">
                <Card.Img src={OM}/>
                </Card>
             
            </Col>
          </Row>
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
                <h5>Nazca</h5>
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
                <h5>Ophelia Moon</h5>
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
          {/* <Row style={{ textAlign: "center" }}>
            <Button className="websiteButton">View Website</Button>
          </Row>
          <br /> */}
          <br />
          <br />

          {/* <Contactusform /> */}
        </Container>
      </div>
    );
  }
}
