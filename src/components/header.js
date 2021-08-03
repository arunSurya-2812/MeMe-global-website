/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 16/07/2021 - 13:19:44
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/07/2021
 * - Author          : surya12
 * - Modification    :
 **/
import React, { Component } from "react";
import { Row, Col, Form, FormControl } from "react-bootstrap";
import Logo from "./img/logo.png";
import "./Components.css";

export default class Header extends Component {
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
          <Col></Col>
        </Row>
      </div>
    );
  }
}
