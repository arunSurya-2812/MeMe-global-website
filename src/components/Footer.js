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
<>      
        <footer class="footer">
   
              <img src={logo} className="MeMeFooter" />
          
            <br/>
           <Row  md="7"sm="7" xs="2">
             <Col sm="11">
             <p >
                Lorem ipsum, in graphical and textual context, refers to filler
                text that is placed in a document or visual presentation.
              </p>
          </Col>
          </Row>
             

          
            <Row  md="11"sm="5"xs="3">
              <Col  sm="5"xs="5" >
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
            <Row>
              <img src={Ashoka} className="AsokhaFooter" />
            </Row>
          
          <h1 className="FooterLink">
            <Row>Quick Links</Row>
          </h1>

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
            <Row>
              <h1 className="Contact">Contact</h1>
            </Row>
            <Row>
              <p className="Contacttext">
                +99 (0) 101 0000 888 Patricia C. Amedee 4401 Waldeck Street
                Grapevine Nashville, Tx 76051
              </p>
            </Row>
            <Row>
              <h3 className="Contact1">Subscribe us on our Email</h3>
              <h1 className="Contacttext1">For Latest News & Updates</h1>
            </Row>
           </footer>
      </>
    );
  }
}
