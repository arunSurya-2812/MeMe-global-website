import Contactusform from "./Contactusform";
import React from "react";
import { Image, Row, Col, Card, Button, Container } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";

import axios from "axios";

import leather from "../img/leather.png";
import leatherbag1 from "../img/leatherbag1.jpeg";
import leatherbag2 from "../img/leatherbag2.jpeg";
import leatherbag3 from "../img/leatherbag3.jpeg";
import leathershoe from "../img/leathershoe.jpeg";
import "./Components.css";

export default class Leathers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      suggestions: [],
      items: [],
    };
  }

  componentDidMount = () => {
    let config = {
      url: "https://api.nazca.in:8443/ophelia/ophelia/mainproducts",
      method: "GET",
    };
    axios(config)
      .then((res) => {
        let data = res.data,
          arrItems = [];
        data.forEach((element) => {
          arrItems.push(element.mainCatName);
        });
        this.setState({ items: arrItems }, () => {});
      })
      .catch((err) => console.log(err));
  };

  handleTextChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.state.items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({
      suggestions,
      text: value,
    }));
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <div className="srchList">
        <ul>
          {suggestions.map((item) => (
            <li onClick={() => this.suggestionSelected(item)}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Container>
          <div className="flex-container">
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
          </div>
          <div>
            <p>{this.renderSuggestions()}</p>
          </div>
          <Row>
            <Col md="12" lg="12">
              <Card className="imgLeathersCard">
                <Card className="contentCard">
                  <Card.Body>
                    <h1 className="cardTitle" style={{ color: "white" }}>
                      ABOUT US
                    </h1>
                    <Card.Text className="cardContent">
                      <p style={{ color: "white", fontWeight: "500" }}>
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
              <Image
                src={leatherbag1}
                className="Fiberproductcol1"
                roundedCircle
              />
              <h1>Bags</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image
                src={leatherbag2}
                className="Fiberproductcol2"
                roundedCircle
              />
              <h1> Accessories</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image
                src={leatherbag3}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> Jacket</h1>
            </Col>
            <Col md="3" lg="3" sm="12">
              <Image
                src={leathershoe}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> Footwares</h1>
            </Col>
          </Row>
          <br />

          <Row style={{ textAlign: "center" }}>
            <Button className="websiteButton">View Website</Button>
          </Row>
          <br />
          <Contactusform />
        </Container>
      </div>
    );
  }
}
