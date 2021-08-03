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
import { Row, Col,Image,Container } from "react-bootstrap";

import { FaInstagram } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";
export default class Footer extends Component {
  render() {
    return (



      <>      
              <footer class="footer">
                <Container fluid="md">
         <Row>
      <Col xs={12} sm={3}>
                    <Image  src={logo} className="MeMeFooter" />
                    </Col>
              </Row>  
              </Container>
                  <br/>
                  <Container fluid="sm">
                 <Row >
                   <Col xs={11} sm={6} md ={4}lg={3}>
                   <p  className="FooterLorem">
                      Lorem ipsum, in graphical and textual context, refers to filler
                      text that is placed in a document or visual presentation.
                    </p>
                </Col>
                </Row>
                </Container>
                   
      
                <Container>
                  <Row  >
                    <Col   md={11}sm={6}xs={8} >
                      <a href="https://www.instagram.com/">
                        <FaInstagram className="Socialicon"  />
                      </a>
                      <a href="https://twitter.com/login">
                        <FaTwitter  className="Socialicon" />
                      </a>
                      <a href="https://www.facebook.com/login/web/">
                        <FaFacebook   className="Socialicon" />
                      </a>
                      <a href="https://www.linkedin.com/">
                        <FaLinkedinIn className="Socialicon"  />
                      </a>
                    </Col>
                  </Row>
               </Container>
               <Container >
                 <Row style={{left:"430px",position:"relative",bottom:"60px"}}>
               <Col md={11}>
                  <Image src={Ashoka} className="AsokhaFooter" />   
               </Col>
               </Row>
               </Container>
               
               <Container>
                <Row   lg={1} md={1}>
                  <Col md={3} md={3} lg={8}> <h1>
                  Quick Links
                </h1>
                </Col>
               </Row>
               </Container>
               
              <Container >
      
                  <Row  style={{left:"130px",position:"relative"}}lg={1} md={1} >
                    
                    <p >
                      <a href="#" >
                        Home
                    </a>
                    </p>
                    <p>
                      <a href="#" >
                        About
                      </a>
                    </p>
                    <p>
                      <a href="#" >
                        Contact
                      </a>
                    </p>
                    <p>
                      <a href="#" >
                        Shop
                      </a>
                    </p>
                  
                  </Row>
                  </Container>
                   <Row lg={11}>
                    <h1 >Contact</h1>
               </Row>
               <Container>
                  <Row >
                   <Col  xs={11} sm={6} md ={4}lg={2}>
                    <p >
                      +99 (0) 101 0000 888 Patricia C. Amedee 4401 Waldeck Street
                      Grapevine Nashville, Tx 76051
                    </p>
                    </Col>
                  </Row>
                  </Container>
                  <Row >
                    <Col  xs={11} sm={6} md ={4}lg={3}>
                    <h3 >Subscribe us on our Email</h3>
                    <h1 >For Latest News & Updates</h1>
                    </Col>
                  </Row>
                 </footer>
 
            </>
    )
  } 
}      