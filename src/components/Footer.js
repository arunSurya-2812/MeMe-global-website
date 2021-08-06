import logo from "../img/logo.png";
import Ashoka from "../img/Ashoka.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Component } from "react";
import { Image } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <div class="container">
        <footer class="footer">
          <div class="row">
            <div class="col-1 col-xs-11">
              <Image src={logo} className="MeMeFooter" />
            </div>

            {/* <div class="w-100"></div> */}

            <div class="row row-lg-5 ">
              <div class="lorem">
                <div class="col-md-3 col-sm-5 col-xs-8">
                  <p style={{ textAlign: "justify" }}>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation.
                  </p>
                </div>
                <div class="row ">
                  <div class="col ">
                    <p>
                      <a href="http://localhost:3000">Home</a>
                    </p>
                    <div class="col">
                      <p>
                        <a href="http://localhost:3000">About</a>
                      </p>
                      <div class="col">
                        <p>
                          <a href="http://localhost:3000">Contact</a>
                        </p>
                        <div class="col">
                          <p>
                            <a href="http://localhost:3000">Shop</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col align-self-center">
                    <Image
                      src={Ashoka}
                      style={{
                        borderRadius: "160px",
                        height: "3cm",
                        width: "3cm",
                      }}
                      className="AsokhaFooter"
                    />
                  </div>
                  <div class="col col-lg-4 col-sm-6 col-md-3 col-xs-4">
                    <p style={{ textAlign: "justify" }}>
                      <h3>Contact</h3>
                      +99 (0) 101 0000 888 Patricia C. Amedee 4401 Waldeck
                      Street Grapevine Nashville, Tx 76051
                    </p>
                  </div>
                  <div class="col col-lg-4 col-sm-5 col-xs-5">
                    <p style={{ fontWeight: "800" }}>
                      Subscribe us on our Email
                      <h3 style={{ fontWeight: "500" }}>
                        For Latest News & Updates
                      </h3>
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <a href="https://www.instagram.com/">
                      <FaInstagram />
                    </a>
                    <a href="https://twitter.com/login">
                      <FaTwitter />
                    </a>
                    <a href="https://www.facebook.com/login/web/">
                      <FaFacebook />
                    </a>
                    <a href="https://www.linkedin.com/">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
