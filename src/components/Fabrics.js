/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 10/07/2021 - 20:37:54
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 10/07/2021
 * - Author          : surya12
 * - Modification    :
 **/

 
import Contactusform from './Contactusform'
 import "./Components.css";

 import Footer from './Footer'
 import { FaDownload } from "react-icons/fa";
import React, { Component } from "react";
import fab from "./img/fab.png";
import fabproduct1 from "./img/fabproduct1.png";
import fabproduct2 from "./img/fabproduct2.png";
import fabproduct3 from "./img/fabproduct3.jpg";
import fabproduct4 from "./img/fabproduct4.png";
import { Image } from "react-bootstrap";

export default class Fabrics extends Component {
  render() {
    return (
      <div>
        {/* <> */}
          <img src={fab} className="fabimage" alt="Fabrics-main" />
          <div className="facbricdiscription">
            <h1
              style={{
                fontFamily: "Poppins,Bold",
                fontSize: "26px",
                textAlign: "center",
              }}
            >
              ABOUT US
            </h1>
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                textAlign: "center",
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
          </div>
          <button className="Fabricpdfbtn">
            <FaDownload className="pdficon" />
            Download pdf
          </button>
        {/* </> */}
        <div>
          <h1 className="Fabricproducts">Our Products</h1>
          <Image src={fabproduct1} className="Fabproductcol1" />
          <h1 className="Fabourproduct1"> FABRICS</h1>
          <Image src={fabproduct2} className="Fabproductcol2" />
          <h1 className="Fabourproduct">SUSTAINABLE </h1>
          <h1 className="Fabourproduct"> FABRICS </h1>
          <Image src={fabproduct3} className="Fabproductcol3" />
          <h1 className="Fabourproduct2">ARTISAN</h1>
          <h1 className="Fabourproduct2">MADE</h1>
          <Image src={fabproduct4} className="Fabproductcol4" />
          <h1 className="Fabourproduct3">FABRICS</h1>
          <h1 className="Fabourproduct3"> CRAFTSME</h1>
        </div>
        <button className="Fabricwebsitebtn">View Website</button>
        
        <div>
        <Contactusform/>
        </div>
        <div>
          <Footer/>
        </div> 
        
      </div>
    );
  }
}
