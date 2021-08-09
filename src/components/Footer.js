import logo from "../img/logo.png";
import GoogleStore from '../img/GoogleStore.png'
import AppleStore from '../img/AppleStore.png' 
import Twitter from '../img/Twitter.png' 
import Original from '../img/Original.png'
import Days from '../img/Days.png'
import Youtube from '../img/Youtube.png' 
import { Component } from "react";
import { Image } from "react-bootstrap";
export default class Footer extends Component {
  render() {
    return (
      <div class="container">
        <footer class="footer">
    
          <div class="row">
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
              <a href="#">Gift Card</a>
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

            <div class="col col-lg-5">

              <h5 >Experinece MeMe App your Phone</h5>
              <Image src={AppleStore} style={{width:"140px",height:"42px",paddingRight:"10px"}}/>
              <Image src={GoogleStore} style={{width:"140px",height:"42px",paddingRight:"10px"}}/>

              
              <div class="w-100"></div>
              <h5>KEEP IN TOUCH</h5>
<Image src={Youtube} style={{width:"20px",height:"20px", paddingRight:"5px"}}/>
           
<Image src={Twitter} style={{width:"20px",height:"20px", paddingRight:"5px"}}/>
<Image src={Youtube} style={{width:"20px",height:"20px", paddingRight:"5px"}}/>
           
           <Image src={Twitter} style={{width:"20px",height:"20px", paddingRight:"5px"}}/>
            </div>

            <div class="col col-lg-3">
          
             
<Image src={Days} style={{width:"48px",height:"40px"}}/>
<br/>
<Image src={Original} style={{width:"48px",height:"49px"}}/>
            </div>
          </div>
        
        </footer>
      </div>
    );
  }
}
