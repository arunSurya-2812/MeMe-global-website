import React from "react";
import { Image, Row, Col, Card, Button, Container } from "react-bootstrap";

import axios from "axios";
import "./Components.css";
import Linen from "../img/Linen.jpg";
import cotton1 from "../img/cotton1.jpg";
// import bananafibre from "../img/bananafibre.jpg";
import fabproduct4 from "../img/fabproduct4.png";
import fabproduct1 from "../img/fabproduct1.png";

import Cotton22 from "../img/Cotton22.png";
import recycledpoly from "../img/recycledpoly.png";
import bananafibre from "../img/bananafibre.png";

import { FaDownload } from "react-icons/fa";
import Contactusform from "./Contactusform";

export default class Fiber extends React.Component {
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
              <Card className="imgfiberCard">
                <Card className="contentCard">
                  <Card.Body>
                    <h1 className="cardTitle" style={{ fontWeight: "800" }}>
                      ABOUT US
                    </h1>
                    <Card.Text className="cardContent">
                      MEME INDIA has a whole section to buy fibers online at
                      great prices. Natural fibers are creating a new trend in
                      the fashion industry. MEME INDIA is also engaged in
                      supplying beautiful embroidered clothing materials with
                      perfect finish and texture, prints are available on
                      cotton, silk, wool, rayon, and many more fabrics.
                      <br /> Natural fabrics are in great demand due to their
                      acceptance among all the generations. Lightweight and
                      trendy fabric in multiple colors is also available at our
                      online store.Organic fibers can be a pleasant choice when
                      looking for standard quality and sustainable vouge. While
                      there are plenty of fantastic and innovative sustainable
                      fabric options are available on our website, MEME INDIA.
                      The scale of organic cotton, synthetic, georgette
                      production makes it an affordable option for those looking
                      to make better choices for their wardrobe.
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
          <Row style={{ textAlign: "center" }}>
            <h1>Our Products</h1>
            <Col md="3" lg="2" sm="4">
              <Image
                src={Cotton22}
                className="Fiberproductcol1"
                roundedCircle
              />
              <h1>Cotton</h1>
            </Col>
            <Col md="3" lg="4" sm="4">
              <Image
                src={recycledpoly}
                className="Fiberproductcol2"
                roundedCircle
              />
              <h1> Banana</h1>
              <h1> Fibre</h1>
            </Col>
            <Col md="3" lg="2" sm="4">
              <Image
                src={bananafibre}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> Linen</h1>
            </Col>
            <Col md="3" lg="4" sm="12">
              <Image
                src={bananafibre}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> Silk</h1>
            </Col>
          </Row>
          {/* <Row style={{ textAlign: "center" }}>
            <Col md="12" lg="12" sm="12">
              <Image
                src={fabproduct1}
                className="Fiberproductcol4"
                roundedCircle
              />
              <h1> Lotus</h1>
            </Col>
          </Row> */}
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
