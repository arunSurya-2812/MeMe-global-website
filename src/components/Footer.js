



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
                  <Row style={{padding:"0px"}}>
                    <Col xs={1}  md={1} >
                      <a href="https://www.instagram.com/">
                        <FaInstagram className="Socialicon"  />
                      </a>
                      </Col>
                      
                      <Col xs={1} l md={1}>
                      <a href="https://twitter.com/login">
                        <FaTwitter  className="Socialicon" />
                      </a>
                      </Col>
                      <Col xs={1} lg={1} md={1}>
                      <a href="https://www.facebook.com/login/web/">
                        <FaFacebook   className="Socialicon" />
                      </a>
                      </Col>
                      <Col xs={1} lg={1} md={1}>
                      <a href="https://www.linkedin.com/">
                        <FaLinkedinIn className="Socialicon"  />
                      </a>
                      </Col></Row>
               </Container>
            
               
               <Container>
                 <Row  className="HomeRow" style={{position:"relative",left:"7cm",bottom:"5cm"}} md ={6}lg={5} xs={1}sm={5}>
                   <Col>
                 <h1>
                  Quick Links
                </h1>
                </Col>
                </Row>
               </Container>
               
              <Container >
                <Row className="HomeRow" style={{position:"relative",left:"7cm",bottom:"5cm" }} md ={6}lg={5} xs={5}sm={5}>
      <Col lg={1} md={1}>
                    <p >
                      <a href="http://localhost:3000" >
                        Home
                    </a>
                    </p>
                    <p>
                      <a href="http://localhost:3000" >
                        About
                      </a>
                    </p>
                    <p>
                      <a href="http://localhost:3000" >
                        Contact
                      </a>
                    </p>
                    <p>
                      <a href="http://localhost:3000" >
                        Shop
                      </a>
                    </p>
                
           </Col>
                </Row>
                  </Container>
                  <Container>
                  
                  <Image src={Ashoka} className="Asokha" style={{position:"relative",borderRadius:"150px",Bottom:"510px",align:"center"}}/>
                 
                  </Container>
     <Container> 
       <Row className="HomeRow" style={{position:"relative",left:"5cm",bottom:"9cm" }}>
         <Col lg={12} md={12} xs={5} sm={5}>             
                    <h1 >Contact</h1>
                    </Col>
                    </Row>
                    </Container>
               <Container>
                 <Row className="HomeRow" style={{position:"relative",left:"18cm",bottom:"9cm" }} lg={1}>
                   <Col lg={2} md={2} xs={8} sm={5}>
         
                    <p >
                      +99 (0) 101 0000 888 Patricia C. Amedee 4401 Waldeck Street
                      Grapevine Nashville, Tx 76051
                    </p>
                    </Col>
                    </Row>
                  </Container>
                  <Container>
                    <Row className="HomeRow" style={{position:"relative",left:"24cm",bottom:"13cm" }} lg={1}>
                      <Col lg={2} md={2} xs={8} sm={5}>
<h3>Subscribe us on our Email</h3>
</Col>
</Row>
<Row className="HomeRow" style={{position:"relative",left:"24cm",bottom:"12cm" }} lg={1}>
                      <Col  lg={2} md={2} xs={8} sm={5}>
<h1>For Latest News & Updates</h1>
                  </Col>
                  </Row>
                   
                    </Container>
                    
                    </footer>
 
            </>
    )
  } 
}    