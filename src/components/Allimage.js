import React, { Component } from "react";
import Slider from "react-slick";
import "./Components.css";
import asset4 from "../img/ASSET-04.png"
import asset5 from "../img/ASSET-05.png"
import asset6 from "../img/ASSET-06.png"
import sq1 from '../img/sq1.png';
import sq2 from '../img/sq2.png';
import sq3 from '../img/sq3.png';
import sq4 from '../img/sq4.png';
import sq5 from '../img/sq5.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll:2
            }
        }
    
      ]
    }
    return (
      <Slider {...settings}>
          <div>
        <a
              href="http://memefibre.com/home"
              rel="noreferrer"
              target="_blank"
            >
          <img
            className="Sliderpics"
            style={{ borderRadius: "1cm" }}
            src={asset4}
            alt="Firstslide"
          />
          </a>
        </div>
        <div>
        <a
              href="http://memefibre.com/home"
              rel="noreferrer"
              target="_blank"
            >
          <img
            className="Sliderpics"
            style={{ borderRadius: "1cm" }}
            src={asset5}
            alt="Firstslide"
          />
          </a>
        </div>
        <div>
        <a
              href="http://memefibre.com/home"
              rel="noreferrer"
              target="_blank"
            >
          <img
            className="Sliderpics"
            style={{ borderRadius: "1cm" }}
            src={asset6}
            alt="Firstslide"
          />
          </a>
        </div>
        <div>
        <a
              href="http://memefibre.com/home"
              rel="noreferrer"
              target="_blank"
            >
          <img
            className="Sliderpics"
            style={{ borderRadius: "1cm" }}
            src={sq1}
            alt="Firstslide"
          />
          </a>
        </div>
        <div>
        <a href="http://memeyarn.com/home" rel="noreferrer" target="_blank">
          <img
            className="Sliderpics"
            style={{ borderRadius: "1cm" }}
            src={sq2}
            alt="Secondslide"
          />
          </a>
        </div>
        <div>
        <a
              href="http://memefabric.com/home"
              rel="noreferrer"
              target="_blank"
            >
          <img
            className="Sliderpics"
            style={{ borderRadius: "1cm" }}
            src={sq3}
            alt="Threadslide"
          />
          </a>
        </div>
        <div>
          <img
            className="Sliderpics"
            style={{ borderRadius: "1cm" }}
            src={sq4}
            alt="Fourthslide"
          />
        </div>
        <div>
          <img
            className="Sliderpics"
            style={{ borderRadius: "1cm" }}
            src={sq5}
            alt="fithslide"
          />
        </div>
        <div>
        <a
              href="http://memefibre.com/home"
              rel="noreferrer"
              target="_blank"
            >
          <img
            className="Sliderpics"
            style={{ borderRadius: "1cm" }}
            src={sq1}
            alt="Firstslide"
          />
          </a>
        </div>
        <div>
        <a
              href="http://memefabric.com/home"
              rel="noreferrer"
              target="_blank"
            >

          <img
            className="Sliderpics"
            style={{ borderRadius: "1cm" }}
            src={sq3}
            alt="Firstslide"
          />
          </a>
        </div>
        <div>
          <img
            className="Sliderpics"
            style={{ borderRadius: "1cm" }}
            src={sq4}
            alt="Firstslide"
          />
        </div>
        <div>
          <img
            className="Sliderpics"
            style={{ borderRadius: "1cm" }}
            src={sq5}
            alt="Firstslide"
          />
        </div>
      </Slider>
    );
  }
}
