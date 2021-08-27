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
  
        <footer class="footer">
          <div class="row row justify-content-md-center">
            <div class="col col-lg-3" style={{ marginTop: "15px" }}>
              <strong>GET IN TOUCH</strong>
              <div class="w-100"></div>
              <div class="w-100"></div>
              <strong>Address:</strong>
              <p>
                26-B,BHARATHI VILAS,JAWAHARLAL NEHRU SALAI EKKADUTHANGAL,GUINDY
                INDUSTRIAL ESTATE, CHENNAI,TAMILNADU-600003
              </p>
              <div class="w-100"></div>
              <strong>Phone:</strong>9150041898
              <div class="w-100"></div>
              <strong>Email:</strong>
              <div class="w-100"></div>
              <strong>Open Time:</strong>
              <span>8AM - 6:00PM</span>
              {/* <h5> 
                <strong>ONLINE SHOPPING </strong>
              </h5>
              <a href="/#">Men</a>
              <div class="w-100"></div>
              <a href="/#">Women</a>
              <div class="w-100"></div>
              <a href="/#">Kids</a>
              <div class="w-100"></div>
              <a href="/#">Home & living</a>
              <div class="w-100"></div>
              <a href="/#">Beauty</a>
              <div class="w-100"></div>
              <a href="/#">
                Gift Card <span class="badge bg-danger">New</span>
              </a>
              <div class="w-100"></div>
              <a href="/#">MeMe Insider</a> */}
            </div>

            <div class="col col-lg-2" style={{ marginTop: "15px" }}>
              <strong>ABOUT</strong>
              <div class="w-100"></div>
              <a href="#">Our Story</a>

              <div class="w-100"></div>
              <a href="#">Our Brands</a>

              <div class="w-100"></div>

              <a href="#">Our websites</a>

              {/* <h5>
                <strong>USEFUL LINKS</strong>
              </h5>
              <a href="/#">Men</a>
              <div class="w-100"></div>
              <a href="/#">Women</a>
              <div class="w-100"></div>
              <a href="/#">Kids</a>
              <div class="w-100"></div>
              <a href="/#">Home & living</a>
              <div class="w-100"></div>
              <a href="/#">Beauty</a>
              <div class="w-100"></div>
              <a href="/#">Gift Card</a>
              <div class="w-100"></div>
              <a href="/#"> Insider</a>
              <div class="w-100"></div>
              <a href="/#">Men</a>
              <div class="w-100"></div>
              <a href="/#">Women</a>
              <div class="w-100"></div>
              <a href="/#">Kids</a>
              <div class="w-100"></div>
              <a href="/#">Home & living</a>
              <div class="w-100"></div>
              <a href="/#">Beauty</a>
              <div class="w-100"></div>
              <a href="/#">Gift Card</a>
              <div class="w-100"></div>
              <a href="/#">MeMe Insider</a> */}
            </div>

            <div class="col col-lg-4 " style={{ marginTop: "10px" }}>
              {/* <h5>
                <strong>Experinece MeMe App your Phone</strong>
              </h5>
              <Image
                src={AppleStore}
                style={{ width: "140px", height: "42px", paddingRight: "10px" }}
              />
              <Image
                src={GoogleStore}
                style={{ width: "140px", height: "42px", paddingRight: "10px" }}
              />*/}

              <div class="w-100"></div>
             
              <h5>
                <strong>KEEP IN TOUCH</strong>
              </h5> 
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
            <div class="col col-lg-2" style={{ marginTop: "15px" }}>
              <strong>Company</strong>
              {/* <Image src={Days} style={{ width: "48px", height: "40px", paddingRight: "10px" }} />
              <strong >Return Within 30Days </strong>
              <span >
              Of Receving your Order </span>
              <br />        

              <Image src={Original} style={{ width: "48px", height: "49px",paddingRight: "10px" }} />
              
              <strong>100% ORIGINAL </strong>
              
              <span style={{ width:"20px" }}>guarantee for all products at MeMe Global.com</span>
            */}
            </div>
            <br />
          </div>
        </footer>
    );
  }
}
