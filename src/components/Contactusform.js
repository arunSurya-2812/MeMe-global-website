/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 22/07/2021 - 16:09:56
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/07/2021
 * - Author          : surya12
 * - Modification    :
 **/
import React, { Component } from "react";
import Contactusgroup from "./img/Contactusgroup.png";
import { Card, Row, Col } from "react-bootstrap";

export default class Leathers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <div>
        <Card className="contactCard">
          <Card.Title className="contactTitle">Contact Us</Card.Title>
          <Card.Body>
            <Row>
              <Col md="6" lg="6">
                <img
                  src={Contactusgroup}
                  alt="contactUs"
                  className="contactImg"
                />
              </Col>
              <Col md="6" lg="6">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.onNameChange.bind(this)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Contact mailId"
                      className="form-control"
                      // aria-describedby="emailHelp"
                      value={this.state.email}
                      onChange={this.onEmailChange.bind(this)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      value={this.state.message}
                      onChange={this.onMessageChange.bind(this)}
                    />
                  </div>
                  <button className="Contactusbtn">Submit</button>
                </form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}
}
