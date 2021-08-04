
import React, { Component } from "react";
import { Row, Col, Form, FormControl } from "react-bootstrap";
import Logo from "./img/logo.png";
import "./Components.css";

export default class Searchbar extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col>
            <div className="logo">
              <img
                src={Logo}
                height="70px"
                width="250px"
                alt="MeMe-Global logo"
              />
            </div>
          </Col>
          <Col>
            <Form className="searchForm">
              <FormControl
                type="search"
                placeholder="Search"
                className="search"
              />
              <span class="glyphicon glyphicon-search btn"></span>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
