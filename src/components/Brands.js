/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 21/07/2021 - 19:30:13
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 21/07/2021
 * - Author          : surya12
 * - Modification    :
 **/

import "./Components.css";
import Contactusform from "./Contactusform";
import { FaDownload } from "react-icons/fa";
import React, { Component } from "react";
import Linen from "./img/Linen.jpg";
import cotton1 from "./img/cotton1.jpg";
import bananafibre from "./img/bananafibre.jpg";
import fabproduct4 from "./img/fabproduct4.png";
import fabproduct1 from "./img/fabproduct1.png";
import { Image } from "react-bootstrap";
import yarncopy from "./img/yarncopy.jpg";

export default class Brands extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <>
            <img src={yarncopy} className="fabimage" alt="Knits-main" />
            <div className="facbricdiscription">
              <h1
                style={{
                  fontFamily: "Poppins,Bold",
                  fontSize: "26px",
                  textAlign: "center",
                  color: "black",
                }}
              >
                ABOUT US
              </h1>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  textAlign: "center",
                  color: "black",
                }}
              >
                We are India’s leading manufacturers of leather goods expertise
                in export of high end quality of finished Leather Bags, footwear
                and various leather accessories To gain our Customer’s trust,
                expectations and requirements and build a long term relationship
                with them is our main Objective We are located in CHENNAI
                RANIPET INDIA MEME INDIA We offer leather goods that are both
                fashionable and sustainable. We as leather and leather goods
                exporter in India, ship to overseas destinations like Canada,
                Germany, France, Australia, Russia, USA and other European
                Countries. We deal in Leather bags, Belts ,wallets and all kinds
                of small leather goods for both Men & Women segment. MEME
                Leather has a dedicated leather tannery in the southern Indian
                city of Chennai, which can process 15,000 skins each day. This
                backward integration enables MEME to create new finishes and
                fashions in leather, which has been a key element in growing our
                business. This facility has multiplied its capacity to serve as
                our hub for leather sourcing and finishing.
              </p>
            </div>
            <button className="Knitspdfbtn">
              <FaDownload /> Download pdf
            </button>
          </>
          <div>
            <h1 className="Knitsproducts">Our Products</h1>

            <Image src={cotton1} className="Knitsproductcol2" />
            <h1 className="Knitsourproduct">Cotton</h1>

            <Image src={bananafibre} className="Knitsproductcol3" />
            <h1 className="Knitsourproduct1"> Poly Cotton</h1>

            <Image src={Linen} className="Knitsproductcol1" />
            <h1 className="Knitsourproduct2"> Tencel & Modal</h1>

            <Image src={fabproduct4} className="Knitsproductcol4" />
            <h1 className="Knitsourproduct3"> Lyocell</h1>

            <Image src={fabproduct1} className="Knitsproductcol5" />
            <h1 className="Knitsourproduct4"> Lotus</h1>
          </div>
          <button className="Knitswebsitebtn">Visit Website</button>

          <div>
            <Contactusform />
          </div>
         
        </div>
      </div>
    );
  }
}
