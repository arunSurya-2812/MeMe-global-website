import React, { Component } from "react";
import ContactUs1 from "../img/ContactUs1.png";
import { Card, Row, Col, Form, Container, Button } from "react-bootstrap";

export default class Contactform extends Component {
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
          <Card.Title>
            <h3>Contact Us </h3>
          </Card.Title>
          <Card.Body>
            <Container>
              <Row>
                {/* <Col xs="12" sm="12" md="6" lg="6"> */}
                <Col lg={4} md={4} sm={7} xs={12}>
                  <img src={ContactUs1} alt="contactUs" className="contactImg" />
                </Col>
                {/* <Col xs="12" sm="12" md="6" lg="6"> */}
                <Col lg={2} md={2} xs={12} sm={7}>
                  <Form className="contactForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        value={this.state.name}
                        onchange={this.onNameChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email Id"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.onMessageChange}
                      />
                    </div>
                    <Button
                      className="Contactusbtn"
                      onChange={this.handleSubmit}
                    >
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = (event) => {};
}