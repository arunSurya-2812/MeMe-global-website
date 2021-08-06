import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Logo from "../img/logo.png";
import "./Components.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Container>
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
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
