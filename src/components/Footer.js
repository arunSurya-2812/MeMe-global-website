import React, { Component } from "react";
import Ashoka from "./img/Ashoka.jpg";
import logo from "./img/logo.png";
import { Image } from "react-bootstrap";

import { FaInstagram } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-1 col-xs-11">
                <Image src={logo} className="MeMeFooter" />
              </div>

              <div class="w-100"></div>

              <div class="row row-lg-5 ">
                <div class="lorem">
                  <div class="col-md-3 col-sm-5 col-xs-8">
                    <p>
                      Lorem ipsum, in graphical and textual context, refers to
                      filler text that is placed in a document or visual
                      presentation.
                    </p>
                  </div>
                  <div class="row">
                    <div class="col">
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

                    <div class="col col-lg-4 ">
                      <h3>Contact</h3>
                      <p>
                        +99 (0) 101 0000 888 Patricia C. Amedee 4401 Waldeck
                        Street Grapevine Nashville, Tx 76051
                      </p>
                    </div>
                    <div class="col col-lg-4 col-xs-5">
                      <p style={{ fontWeight: "800" }}>
                        Subscribe us on our Email
                      </p>
                      <h1 style={{ fontWeight: "800" }}>
                        For Latest News & Updates
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
