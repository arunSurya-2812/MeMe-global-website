import React from "react";
import { Image, Row, Col, Card, Button, Container } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import axios from "axios";
import "./Components.css";

import Contactusform from "./Contactusform";
import fabproduct1 from "../img/fabproduct1.png";
import fabproduct2 from "../img/fabproduct2.png";
import fabproduct3 from "../img/fabproduct3.jpg";

export default class Fabrics extends React.Component {
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
          </div>
          <div>
            <p>{this.renderSuggestions()}</p>
          </div> */}

          <Row>
            <Col md="12" lg="12">
              {" "}
              <Card className="imgFabricsCard">
                <Card className="contentCard">
                  <Card.Body>
                    <h1
                      className="cardTitle"
                      style={{ color: "white", fontWeight: "800" }}
                    >
                      ABOUT US
                    </h1>
                    <Card.Text className="cardContent">
                      <p style={{ color: "white", fontWeight: "500" }}>
                        MEME INDIA offers you probably a wide range of the
                        highest quality fabrics made from natural fibers. Our
                        exclusive variety is perfect for making home textiles,
                        furniture, crafts, or clothing materials to create an
                        elegant, versatile wardrobe collection for yourself or
                        as gifts for others. It is also a great way to stand out
                        in the fast-fashion world, especially if you choose
                        sustainable fabrics from our website.
                      </p>
                    </Card.Text>
                    <Button className="cardButton">
                      <FaDownload className="pdfIcon" />
                      Download Pdf
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
                src={fabproduct1}
                className="Fiberproductcol1"
                roundedCircle
              />
              <h1>FABRICS</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image
                src={fabproduct2}
                className="Fiberproductcol2"
                roundedCircle
              />
              <h1> SUSTAINABLE FABRICS</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image
                src={fabproduct3}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> ARTISAN MADE</h1>
            </Col>
            <Col md="3" lg="3" sm="12">
              <Image
                src={fabproduct3}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> FABRICS</h1>
              <h1> CRAFTSME</h1>
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
