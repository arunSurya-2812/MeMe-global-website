import logo from "../img/logo.png";
import GoogleStore from "../img/GoogleStore.png";
import AppleStore from "../img/AppleStore.png";
import Twitter from "../img/Twitter.png";
import Original from "../img/Original.png";

import Instagram from "../img/Instagram.png";
import Facebook from "../img/Facebook.png";
import Days from "../img/Days.png";
import Youtube from "../img/Youtube.png";
import { Component } from "react";
import { Image } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <div class="container">
        <footer class="footer">
        
          <div class="row row justify-content-md-center">
            <div class="col col-lg-2">
              <h5>ONLINE SHOPPING</h5>
              <a href="#">Men</a>
              <div class="w-100"></div>
              <a href="#">Women</a>
              <div class="w-100"></div>
              <a href="#">Kids</a>
              <div class="w-100"></div>
              <a href="#">Home & living</a>
              <div class="w-100"></div>
              <a href="#">Beauty</a>
              <div class="w-100"></div>
              <a href="#">Gift Card<span class="badge bg-danger">New</span></a>
              <div class="w-100"></div>
              <a href="#">Mytra Insider</a>
            </div>

            <div class="col col-lg-2">
              <h5>USEFUL LINKS</h5>
              <a href="#">Men</a>
              <div class="w-100"></div>
              <a href="#">Women</a>
              <div class="w-100"></div>
              <a href="#">Kids</a>
              <div class="w-100"></div>
              <a href="#">Home & living</a>
              <div class="w-100"></div>
              <a href="#">Beauty</a>
              <div class="w-100"></div>
              <a href="#">Gift Card</a>
              <div class="w-100"></div>
              <a href="#">Mytra Insider</a>
              <a href="#">Men</a>
              <div class="w-100"></div>
              <a href="#">Women</a>
              <div class="w-100"></div>
              <a href="#">Kids</a>
              <div class="w-100"></div>
              <a href="#">Home & living</a>
              <div class="w-100"></div>
              <a href="#">Beauty</a>
              <div class="w-100"></div>
              <a href="#">Gift Card</a>
              <div class="w-100"></div>
              <a href="#">Mytra Insider</a>
            </div>

            <div class="col col-lg-4">
              <h5>Experinece MeMe App your Phone</h5>
              <Image
                src={AppleStore}
                style={{ width: "140px", height: "42px", paddingRight: "10px" }}
              />
              <Image
                src={GoogleStore}
                style={{ width: "140px", height: "42px", paddingRight: "10px" }}
              />

              <div class="w-100"></div>
              <h5>KEEP IN TOUCH</h5>
              <Image
                src={Facebook}
                style={{ width: "25px", height: "20px", paddingRight: "5px" }}
              />

              <Image
                src={Instagram}
                style={{ width: "25px", height: "20px", paddingRight: "5px" }}
              />
              <Image
                src={Youtube}
                style={{ width: "25px", height: "20px", paddingRight: "5px" }}
              />

              <Image
                src={Twitter}
                style={{ width: "25px", height: "20px", paddingRight: "5px" }}
              />
            </div>
            <div class="col col-lg-3">
              <Image src={Days} style={{ width: "48px", height: "40px" }} />
              <strong>100% ORIGINAL </strong>
              <h5>
              guarantee for all products at myntra.com </h5>
              <br />
              <Image src={Original} style={{ width: "48px", height: "49px" }} />
              <strong>100% ORIGINAL </strong><h5>
              guarantee for all products at myntra.com
              </h5> 
              
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
