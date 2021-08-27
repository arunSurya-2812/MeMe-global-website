import "./Components.css";
import { FaDownload } from "react-icons/fa";
import Contactusform from "./Contactusform";
import React from "react";
import Yarn22 from "../img/yarn22.jpg";
import { Image, Row, Col, Card, Button, Container } from "react-bootstrap";
// import axios from "axios";
import Linen from "../img/Linen.jpg";
import cotton1 from "../img/cotton1.jpg";
import bananafibre from "../img/bananafibre.jpg";
import fabproduct4 from "../img/fabproduct4.png";
import fabproduct1 from "../img/fabproduct1.png";

export default class Yarn extends React.Component {
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
          <Row>
            <Col>
              <Image
                src={Yarn22}
                style={{ width: "100%", height: "60%", paddingTop:"10%",borderRadius:"50px" }}
              />
            </Col>
          </Row>

          <Row>
            <Col md="12" lg="12">
              <Card className="imgYarnCard">
                <Card className="contentCard">
                  <Card.Body>
                    <h1 className="cardTitle" style={{ color: "white" }}>
                      ABOUT US
                    </h1>
                    <Card.Text className="cardContent">
                      <p style={{ color: "white", fontWeight: "500" }}>
                        Our website, MEME INDIA has this new era of yarn
                        collection. MEME INDIA defines a modern state of mind, a
                        way of looking at things differently. Concentrated by
                        our genius and talented artists, they will surprise you
                        with their sophisticated designs. Our team is always
                        working on how and in what ways we can satisfy all of
                        your concerns, and keep you happy when you invest in new
                        fibers, colors, and designs. For MEME INDIA, it is most
                        important to listen to our shopper opinions, because not
                        only do we succeed in fulfilling your desires, but also,
                        thanks to you, we continue to move all together, in the
                        same direction.
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
              <h1> Poly Cotton</h1>
            </Col>
            <Col md="3" lg="3" sm="4">
              <Image
                src={fabproduct4}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> Tencel& Modal</h1>
            </Col>
            <Col md="3" lg="3" sm="12">
              <Image
                src={bananafibre}
                className="Fiberproductcol3"
                roundedCircle
              />
              <h1> Lyocell</h1>
            </Col>
          </Row>
          <br />

          <Row style={{ textAlign: "center" }}>
            <Col md="12" lg="12" sm="12">
              <Image
                src={fabproduct1}
                className="Fiberproductcol5"
                roundedCircle
              />
              <h1> Recycle</h1>
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
