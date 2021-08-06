import React from "react";
import { Image, Row, Col, Card, Button,Container } from "react-bootstrap";

import "./Components.css";
import Linen from "../img/Linen.jpg";
import cotton1 from "../img/cotton1.jpg";
import bananafibre from "../img/bananafibre.jpg";
import fabproduct4 from "../img/fabproduct4.png";
import yarncopy from "../img/yarncopy.jpg";
import Contactusform from "./Contactusform";
import { FaDownload } from "react-icons/fa";
import axios from "axios";

export default class Knits extends React.Component  {
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

render(){
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
          <Card className="imgCard">
            <Card.Img
              src={yarncopy}
              alt="Fiber-main"
              className="bgImg"
            ></Card.Img>
          </Card>
          <Card className="contentCard">
            <Card.Body>
              <h1 className="cardTitle">ABOUT US</h1>
              <Card.Text className="cardContent">
                <p>
                  We are India’s leading manufacturers of leather goods
                  expertise in export of high end quality of finished Leather
                  Bags, footwear and various leather accessories. To gain our
                  Customer’s trust, expectations and requirements and build a
                  long term relationship with them is our main Objective.<br/>
                  We<br/> are
                  located in CHENNAI RANIPET INDIA<br/> MEME INDIA.<br/>  We offer leather
                  goods that are both fashionable and sustainable. We as leather
                  and leather goods exporter in India, ship to overseas
                  destinations like Canada, Germany, France, Australia, Russia,
                  USA and other European Countries. We deal in Leather bags,
                  Belts ,wallets and all kinds of small leather goods for both
                  Men & Women segment. <br /> MEME Leather has a dedicated
                  leather tannery in the southern Indian city of Chennai, which
                  can process 15,000 skins each day. This backward integration
                  enables MEME to create new finishes and fashions in leather,
                  which has been a key element in growing our business. This
                  facility has multiplied its capacity to serve as our hub for
                  leather sourcing and finishing.
                </p>
              </Card.Text>
              <Button className="cardButton">
                <FaDownload className="pdfIcon" />
                Download PDF
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row style={{ textAlign: "center" }}>
        <h1>Our Products</h1>
        <Col md="3" lg="3" sm="4">
          <Image src={cotton1} className="Fiberproductcol1" roundedCircle />
          <h1>Knits</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image src={Linen} className="Fiberproductcol2" roundedCircle />
          <h1> Weave</h1>
        </Col>
        <Col md="3" lg="3" sm="4">
          <Image src={fabproduct4} className="Fiberproductcol3" roundedCircle />
          <h1> Artisan</h1>
        </Col>
        <Col md="3" lg="3" sm="12">
          <Image src={bananafibre} className="Fiberproductcol3" roundedCircle />
          <h1> Eco friendly</h1>
        </Col>
      </Row>
      <br />

<<<<<<< HEAD
      <Row>
        
      <Col md="12" lg="12" sm="10" xs={1}>
          <Button className="websiteButton">View Website</Button>
        </Col>
=======
      <Row style={{ textAlign: "center" }}>
        <Button className="websiteButton">View Website</Button>
>>>>>>> b0e1727b5f6f4312a858eb6dfc3eba4002cd2b43
      </Row>

      <br />
          <Contactusform />
        </Container>
      </div>
    );
  }
}