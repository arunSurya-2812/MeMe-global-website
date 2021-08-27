import React from "react";
import { Image, Row, Col, Card, Button, Container } from "react-bootstrap";

import "./Components.css";
import Linen from "../img/Linen.jpg";
import cotton1 from "../img/cotton1.jpg";
import bananafibre from "../img/bananafibre.jpg";
import fabproduct4 from "../img/fabproduct4.png";
import Contactusform from "./Contactusform";
import { FaDownload } from "react-icons/fa";
import axios from "axios";

export default class Knits extends React.Component {
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
              <Card className="imgKnitsCard">
                <Card className="contentCard">
                  <Card.Body>
                    <h1 className="cardTitle">ABOUT US</h1>
                    <Card.Text className="cardContent">
                      <p>
                        Knitting your own clothes is not only satisfying, it
                        gives you more freedom when we create each piece exactly
                        as you like. Knitting is strongly recommended for
                        everyone, as it dramatically improves skills and
                        stimulates the brain. It helps to stay active and work
                        passively. Our artisans love working the wool and
                        needles that create a magical moment. Our soft, fluffy,
                        and durable yarn is a fantastic value for money and is
                        perfect for knitting. Choose from our website MEME
                        INDIA, you'll be sure to find your perfect beauty. Make
                        room in your wardrobe for the new fiber that will take
                        your breath away. It will surprise you with both its
                        softness and its warmth.
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
              <h1> T-SHIRT</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image src={Linen} className="Fiberproductcol2" roundedCircle />
              <h1> POLO</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image
                src={fabproduct4}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> SHIRTS</h1>
            </Col>
            <Col md="3" lg="3" sm="2">
              <Image
                src={bananafibre}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> 
            PANTS & TROUSERS</h1>
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>
          <Row  style={{textAlign:"center"}}>
            <Col md="3" lg="3" sm="4">
              <Image src={cotton1} className="Fiberproductcol1" roundedCircle />
              <h1>JEANS</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image src={Linen} className="Fiberproductcol2" roundedCircle />
              <h1> SWEATS & HOODIES</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image
                src={fabproduct4}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> TRACKS & JOGGER </h1>
            </Col>
            <Col md="3" lg="3" sm="2">
              <Image
                src={bananafibre}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> INNERWEAR </h1>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row  style={{textAlign:"center"}}>
            <Col md="3" lg="8" sm="4">
              <Image
                src={fabproduct4}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> SPORTS WEAR</h1>
            </Col>
            <Col md="2" lg="2" sm="4">
              <Image
                src={bananafibre}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> RELAX & SLEEPWEAR</h1>
            </Col>
          </Row>
          
         
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
