/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 26/06/2021 - 13:06:18
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 26/06/2021
 * - Author          : surya12
 * - Modification    :
 **/
import Contactusform from './Contactusform'
 import React, { Component } from "react";
 import { Image } from "react-bootstrap";
 import leather from "./img/leather.png";
 import leatherbag1 from './img/leatherbag1.jpeg';
 import leatherbag2 from "./img/leatherbag2.jpeg";
 import leatherbag3 from "./img/leatherbag3.jpeg";
 import leathershoe from "./img/leathershoe.jpeg";
 
import Footer from './Footer'
import { FaDownload } from "react-icons/fa";
 
 import "./Components.css";
 export default class Leathers extends Component {
   render() {
     return (
       <div className="container-fluid">
         <img src={leather} className="fabimage" alt="Leather-main"  />
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
             15,000 skins each day. This backard integration enables MEME to
             create new finishes and fashions in leather, which has been a key
             element in growing our business. This facility has multiplied its
             capacity to serve as our hub for leather sourcing and finishing.
           </p>
           <button className="Leatherpdfbtn">
           <FaDownload className="pdficon"/>
             Download pdf
           </button>
         </div>
         <div>
           <h1 className="Fabricproducts">Our Products</h1>
 
           <Image src={leatherbag1} className="Leatherproductcol1" />
           <h1 className="Leatherourproduct1"> Bags</h1>
 
           <Image src={leatherbag2} className="Leatherproductcol2" />
           <h1 className="Leatherourproduct">Accessories </h1>
           
           <Image src={leatherbag3} className="Leatherproductcol3" />
           <h1 className="Leatherourproduct2">Jacket</h1>
 
           <Image src={leathershoe} className="Leatherproductcol4" />
           <h1 className="Leatherourproduct3">Footwares</h1>
         </div>
         <button className="Leatherwebsitebtn">View Website</button>
       
      
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
 