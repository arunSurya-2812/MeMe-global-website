/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 23/07/2021 - 13:33:22
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 23/07/2021
 * - Author          : surya12
 * - Modification    :
 **/
import React, { Component } from "react";
import Ashoka from "./img/Ashoka.jpg";
import logo from "./img/logo.png";
import { Row, Col } from "react-bootstrap";

import { FaInstagram } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";
export default class Footer extends Component {
  render() {
    return (
      <div class="d-flex flex-column">
        <footer class="footer">
          <Row>
            <Col>
              <img src={logo} className="MeMeFooter" />
            </Col>
            <Col>
              <p className="Footertext1">
                Lorem ipsum, in graphical and textual context, refers to filler
                text that is placed in a document or visual presentation.
              </p>
            </Col>
          </Row>

          <div>
            <Row>
              <Col>
                <a href="https://www.instagram.com/">
                  <FaInstagram className="Socialicon" />
                </a>

                <a href="https://twitter.com/login">
                  <FaTwitter className="Socialicon" />
                </a>
                <a href="https://www.facebook.com/login/web/">
                  <FaFacebook className="Socialicon" />
                </a>
                <a href="https://www.linkedin.com/">
                  <FaLinkedinIn className="Socialicon" />
                </a>
              </Col>
            </Row>
          </div>

          <div>
            <Row>
              <img src={Ashoka} className="AsokhaFooter" />
            </Row>
          </div>

          <h1 className="FooterLink">
            <Row>Quick Links</Row>
          </h1>

          <div className="FooterLinkdown">
            {" "}
            <Row>
              <p>
                <a href="#" className="FooterLinkdrop">
                  Home
                </a>
              </p>
            </Row>
            <Row>
              <p>
                <a href="#" className="FooterLinkdrop">
                  About
                </a>
              </p>
            </Row>
            <Row>
              <p>
                <a href="#" className="FooterLinkdrop">
                  Contact
                </a>
              </p>
            </Row>
            <Row>
              <p>
                <a href="#" className="FooterLinkdrop">
                  Shop
                </a>
              </p>
            </Row>
          </div>
          <div>
            <Row>
              <h1 className="Contact">Contact</h1>
            </Row>
            <Row>
              <p className="Contacttext">
                +99 (0) 101 0000 888 Patricia C. Amedee 4401 Waldeck Street
                Grapevine Nashville, Tx 76051
              </p>
            </Row>
          </div>
          <div>
            <Row>
              <h3 className="Contact1">Subscribe us on our Email</h3>
              <h1 className="Contacttext1">For Latest News & Updates</h1>
            </Row>
          </div>
        </footer>
      </div>
    );
  }
}
