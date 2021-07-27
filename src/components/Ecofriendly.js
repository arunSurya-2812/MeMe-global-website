/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 30/06/2021 - 15:14:21
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 30/06/2021
 * - Author          : surya12
 * - Modification    :
 **/
import React, { Component } from "react";
import Eco1 from "./img/Eco1.jpg";
import Linen from "./img/Linen.jpg";
import cotton1 from "./img/cotton1.jpg";
import bananafibre from "./img/bananafibre.jpg";
import fabproduct4 from "./img/fabproduct4.png";
import fabproduct1 from "./img/fabproduct1.png";
import { Image } from 'react-bootstrap';

import Footer from './Footer'
import { FaDownload } from "react-icons/fa";
import Contactusform from "./Contactusform";
import "./Components.css";

export default class Ecofriendly extends Component {
  render() {
    return (
      <div>
        <img src={Eco1} className="fabimage" alt="Ecofriendly-main" />
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
            and sustainable. We as leather and leather goods exporter in India,
            ship to overseas destinations like Canada, Germany, France,
            Australia, Russia, USA and other European Countries. We deal in
            Leather bags, Belts ,wallets and all kinds of small leather goods
            for both Men & Women segment. MEME Leather has a dedicated leather
            tannery in the southern Indian city of Chennai, which can process
            15,000 skins each day. This backward integration enables MEME to
            create new finishes and fashions in leather, which has been a key
            element in growing our business. This facility has multiplied its
            capacity to serve as our hub for leather sourcing and finishing.
          </p>
          <button className="Leatherpdfbtn">
            <FaDownload className="pdficon" />
            Download pdf
          </button>
        </div>
        <div>
          <h1 className="Ecoproducts1">Our Products</h1>

          <Image src={cotton1} className="Ecoproductcol2" />
          <h1 className="Ecoourproduct">Cotton</h1>

          <Image src={bananafibre} className="Ecoproductcol3" />
          <h1 className="Ecoourproduct1"> Fibre</h1>

          <Image src={Linen} className="Ecoproductcol1" />
          <h1 className="Ecoourproduct2"> Linen</h1>

          <Image src={fabproduct4} className="Ecoproductcol4" />
          <h1 className="Ecoourproduct3"> Silk</h1>

          <Image src={fabproduct1} className="Ecoproductcol5" />
          <h1 className="Ecoourproduct4"> Lotus</h1>
        </div>
        <button className="Ecowebsitebtn">View Website</button>
        <div className="ContactusformEcofriendly">
        <Contactusform/>
        </div>
        <div>
          <Footer/>
        </div> 
        <Contactusform />
      </div>
    );
  }
}
