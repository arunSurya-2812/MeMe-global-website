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
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";
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
                // className="Navlogo"
                src={Logo}
                height="70px"
                width="250px"
                alt="MeMe-Global logo"
              />
            </div>
          </Col>
          <Col>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="search"
                aria-label="Search"
              />
              <button class="btn searchbutton" type="button">
                <span class="glyphicon glyphicon-search"></span>
              </button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
