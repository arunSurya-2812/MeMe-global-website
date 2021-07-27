/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 10/07/2021 - 11:11:04
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 10/07/2021
 * - Author          : surya12
 * - Modification    :
 **/

import "./Components.css";
import { FaDownload } from "react-icons/fa";
import Contactusform from "./Contactusform";
import React, { Component } from "react";
import colorthreds from "./img/colorthreds.jpg";
import Linen from "./img/Linen.jpg";
import cotton1 from "./img/cotton1.jpg";
import bananafibre from "./img/bananafibre.jpg";
import fabproduct4 from "./img/fabproduct4.png";
import fabproduct1 from "./img/fabproduct1.png";
import { Image } from "react-bootstrap";

import Footer from './Footer'
export default class Yarn extends Component {
  render() {
    return (
      <div className="container-fluid">
        <img src={colorthreds} className="fabimage" alt="Yarn-main" />
        <>
          <div className="facbricdiscription">
            <h1
              style={{
                fontFamily: "Poppins,Bold",
                fontSize: "26px",
                textAlign: "center",
                color: "white",
              }}
            >
              ABOUT US
            </h1>

            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                textAlign: "center",
                color: "white",
              }}
            >
              We are India’s leading manufacturers of leather goods expertise in
              export of high end quality of finished Leather Bags, footwear and
              various leather accessories To gain our Customer’s trust,
              expectations and requirements and build a long term relationship
              with them is our main Objective We are located in CHENNAI RANIPET
              INDIA MEME INDIA We offer leather goods that are both fashionable
              and sustainable. We as leather and leather goods exporter in
              India, ship to overseas destinations like Canada, Germany, France,
              Australia, Russia, USA and other European Countries. We deal in
              Leather bags, Belts ,wallets and all kinds of small leather goods
              for both Men & Women segment. MEME Leather has a dedicated leather
              tannery in the southern Indian city of Chennai, which can process
              15,000 skins each day. This backward integration enables MEME to
              create new finishes and fashions in leather, which has been a key
              element in growing our business. This facility has multiplied its
              capacity to serve as our hub for leather sourcing and finishing.
            </p>
            <button className="Yarnpdfbtn">
              <FaDownload className="pdficon" />
              Download pdf
            </button>
          </div>
        </>
        <div>
          <h1 className="Fabricproducts">Our Products</h1>

          <Image src={cotton1} className="Yarnproductcol2" />
          <h1 className="Yarnourproduct">Cotton</h1>

          <Image src={bananafibre} className="Yarnproductcol3" />
          <h1 className="Yarnourproduct1"> Poly Cotton</h1>

          <Image src={Linen} className="Yarnproductcol1" />
          <h1 className="Yarnourproduct2"> Tencel & Modal</h1>

          <Image src={fabproduct4} className="Yarnproductcol4" />
          <h1 className="Yarnourproduct3"> Lyocell</h1>

          <Image src={fabproduct1} className="Yarnproductcol5" />
          <h1 className="Yarnourproduct4"> Lotus</h1>
<<<<<<< HEAD
                  </div>
        <button className="Yarnwebsitebtn">View Website</button>
        
        <div className="ContactusformYarn">
        <Contactusform/>
        </div>
        <div>
          <Footer/>
        </div> 
=======
>>>>>>> 6094c8b71b9ff59c39729fd2b8e5e3c5d363cf89
        </div>
        <button className="Yarnwebsitebtn">View Website</button>
        <Contactusform />
      </div>
    );
  }
}
