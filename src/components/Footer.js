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
import Pholex from "./img/Pholex.png";

import { FaInstagram } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div class="d-flex flex-column">
          <footer class="footer">
            <img src={Pholex} className="PholexFooter" />
            <p className="Footertext1">
              Lorem ipsum, in graphical and textual context, refers to filler
              text that is placed in a document or visual presentation.
            </p>
            <div>
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
            </div>

            <div>
              <img src={Ashoka} className="AsokhaFooter" />
              
            </div>

            <h1 className="FooterLink">Quick Links</h1>
           
            <div className="FooterLinkdown"> <p><a href="#" className="FooterLinkdrop">Home</a></p>
            
            <p><a href="#"className="FooterLinkdrop">About</a></p>
            
            <p><a href="#"className="FooterLinkdrop">Contact</a></p>
            
            <p><a href="#" className="FooterLinkdrop">Shop</a></p>
            </div>
            <div>
            <h1 className="Contact">Contact</h1>
            <p className="Contacttext">
            +99 (0) 101 0000 888 Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051
            </p>
            </div>
            <div>
            <h3 className="Contact1">Subscribe us on our Email</h3>
            <h1 className="Contacttext1">
            For Latest News & Updates
            </h1>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
