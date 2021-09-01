import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import MIlogo2 from "../img/MIlogo2.png";
import searchButton from "../img/Searchhh.png";
import "./Components.css";
import axios from "axios";
export default class Header extends Component {
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
      <>
        <Row>
          <Col>
            <div className="logo">
              <img
                src={MIlogo2}
                height="80px"
                width="210px"
                alt="MeMe-Global logo"
              />
            </div>
          </Col>
          <Col>
            <div className="search">
              <div className="searchBar">
                <input
                  type="text"
                  value={this.state.text}
                  placeholder="Search for Products"
                  className="searchInput"
                  onChange={(e) => this.handleTextChange(e)}
                />
                <button type="button" className="searchButton">
                  <img src={searchButton} alt="searchButton" width="43px"></img>
                </button>
              </div>
            </div>
            <p>{this.renderSuggestions}</p>
          </Col>
          <Col></Col>
        </Row>
      </>
    );
  }
}

// {
//   this.renderSuggestions();
// }
