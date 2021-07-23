/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 05/07/2021 - 20:07:55
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 05/07/2021
 * - Author          : surya12
 * - Modification    :
 **/

import { FaArrowCircleRight } from "react-icons/fa";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Components.css";
import Fibre11 from "./img/Fibre11.png";
import Yarn22 from "./img/Yarn22.png";
import Fabrics33 from "./img/Fabrics33.png";
import Leather44 from "./img/Leather44.png";
import Knits55 from "./img/Knits55.png";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000
     

    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="Sliderpics"
              style={{ borderRadius: "1cm" }}
              src={Fibre11}
              alt="Firstslide"
            />

            <button className="Browsebutn1">
              Browse
              <FaArrowCircleRight className="icondnwld1" />
            </button>
          </div>
          <div>
            <img
              className="Sliderpics"
              style={{ borderRadius: "1cm" }}
              src={Yarn22}
              alt="Secondslide"
            />

            <button className="Browsebutn1">
              Browse
              <FaArrowCircleRight className="icondnwld1" />
            </button>
          </div>
          <div>
            <img
              className="Sliderpics"
              style={{ borderRadius: "1cm" }}
              src={Fabrics33}
              alt="Threadslide"
            />
            <button className="Browsebutn1">
              Browse
              <FaArrowCircleRight className="icondnwld1" />
            </button>
          </div>
          <div>
            <img
              className="Sliderpics"
              style={{ borderRadius: "1cm" }}
              src={Leather44}
              alt="Fourthslide"
            />
            <button className="Browsebutn1">
              Browse
              <FaArrowCircleRight className="icondnwld1" />
            </button>{" "}
          </div>
          <div>
            <img
              className="Sliderpics"
              style={{ borderRadius: "1cm" }}
              src={Knits55}
              alt="fithslide"
            />
            <button className="Browsebutn1">
              Browse
              <FaArrowCircleRight className="icondnwld1" />
            </button>
          </div>
          <div>
            <img
              className="Sliderpics"
              style={{ borderRadius: "1cm" }}
              src={Fibre11}
              alt="Firstslide"
            />
            <button className="Browsebutn1">
              Browse
              <FaArrowCircleRight className="icondnwld1" />
            </button>
          </div>
          <div>
            <img
              className="Sliderpics"
              style={{ borderRadius: "1cm" }}
              src={Yarn22}
              alt="Firstslide"
            />

            <button className="Browsebutn1">
              Browse
              <FaArrowCircleRight className="icondnwld1" />
            </button>
          </div>
          <div>
            <img
              className="Sliderpics"
              style={{ borderRadius: "1cm" }}
              src={Knits55}
              alt="Firstslide"
            />

            <button className="Browsebutn1">
              Browse
              <FaArrowCircleRight className="icondnwld1" />
            </button>
          </div>
          <div>
            <img
              className="Sliderpics"
              style={{ borderRadius: "1cm" }}
              src={Fabrics33}
              alt="Firstslide"
            />
            <button className="Browsebutn1">
              Browse
              <FaArrowCircleRight className="icondnwld1" />
            </button>
          </div>
        </Slider>
      </div>
    );
  }
}
