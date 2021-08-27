import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Logo from "../img/logo.png";
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
      <div>
       
          <Row>
            <Col >
              <div className="logo">
                <img
                  src={Logo}
                  height="70px"
                  width="250px"
                  alt="MeMe-Global logo"
                />
              </div>
            </Col>
            <Col  >
              <div >
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
            </Col>
          </Row>
      </div>
    );
  }
}
