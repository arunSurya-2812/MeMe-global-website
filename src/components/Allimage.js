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

import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Components.css';
import headphoneno1 from './img/headphoneno1.jpg';
import headphoneno2 from './img/headphoneno2.jpg';
import headphoneno3 from './img/headphoneno3.png';
import headphoneno4 from './img/headphoneno4.jpg';
import headphoneno5 from './img/headphoneno5.jpg';
export default class MultipleItems extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 3,
			slidesToScroll: 3,
			
			
		};
		return (
			<div>
				<Slider {...settings}>
					<div>
						<img
							className="Sliderpics"
							style={{ borderRadius: '1cm' }}
							src={headphoneno1}
							alt="Firstslide"
						/>

						<button className="Browsebutn">
							Browse
							<i className="fa fa-arrow-circle-right" style={{ left: '0.2cm' }} aria-hidden="true"></i>
						</button>
						<h1 className="Slidebtndis" style={{ fontFamily: 'Poppins' }}>Meme </h1>
						<h1  className="Slidebtndis2" style={{ fontFamily: 'Poppins' }}> YARN</h1>
					</div>
					<div>
						<img
							className="Sliderpics"
							style={{ borderRadius: '1cm' }}
							src={headphoneno2}
							alt="Secondslide"
						/>

						<button className="Browsebutn">
							Browse
							<i className="fa fa-arrow-circle-right" style={{ left: '0.2cm' }} aria-hidden="true"></i>
						</button>
						<h1  className="Slidebtndis" style={{ fontFamily: 'Poppins' }}>Meme </h1>
						<h1  className="Slidebtndis2" style={{ fontFamily: 'Poppins' }}> FIBRE</h1>
					</div>
					<div>
						<img
							className="Sliderpics"
							style={{ borderRadius: '1cm' }}
							src={headphoneno3}
							alt="Threadslide"
						/>
						<button className="Browsebutn">
							Browse
							<i className="fa fa-arrow-circle-right" style={{ left: '0.2cm' }} aria-hidden="true"></i>
						</button>
						<h1  className="Slidebtndis" style={{ fontFamily: 'Poppins' }}>Meme </h1>
						<h1  className="Slidebtndis2"  style={{ fontFamily: 'Poppins' }}>FIBRE</h1>
					</div>
					<div>
						<img
							className="Sliderpics"
							style={{ borderRadius: '1cm' }}
							src={headphoneno4}
							alt="Fourthslide"
						/>

						<button className="Browsebutn">
							Browse
							<i className="fa fa-arrow-circle-right" style={{ left: '0.2cm' }} aria-hidden="true"></i>
						</button>
						<h1  className="Slidebtndis" style={{ fontFamily: 'Poppins' }}>Meme </h1>
						<h1  className="Slidebtndis2" style={{ fontFamily: 'Poppins' }}>FIBRE</h1>
					</div>
					<div>
						<img
							className="Sliderpics"
							style={{ borderRadius: '1cm' }}
							src={headphoneno5}
							alt="fithslide"
						/>
						<button className="Browsebutn">
							Browse
							<i className="fa fa-arrow-circle-right" style={{ left: '0.2cm' }} aria-hidden="true"></i>
						</button>
						<h1  className="Slidebtndis" style={{ fontFamily: 'Poppins' }}>Meme </h1>
						<h1 className="Slidebtndis2" style={{ fontFamily: 'Poppins' }}>FIBRE</h1>
					</div>
					<div>
						<img
							className="Sliderpics"
							style={{ borderRadius: '1cm' }}
							src={headphoneno1}
							alt="Firstslide"
						/>
						<button className="Browsebutn">
							Browse
							<i className="fa fa-arrow-circle-right" style={{ left: '0.2cm' }} aria-hidden="true"></i>
						</button>
						<h1  className="Slidebtndis2" style={{ fontFamily: 'Poppins' }}>Meme </h1>
						<h1  className="Slidebtndis2" style={{ fontFamily: 'Poppins' }}>FIBRE</h1>
					</div>
					<div>
						<img
							className="Sliderpics"
							style={{ borderRadius: '1cm' }}
							src={headphoneno1}
							alt="Firstslide"
						/>

						
						<button className="Browsebutn">
							Browse
							<i className="fa fa-arrow-circle-right" style={{ left: '0.2cm' }} aria-hidden="true"></i>
						</button>
            <h1  className="Slidebtndis" style={{fontFamily:"Poppins"}}>Meme </h1>
                 <h1  className="Slidebtndis2" style={{fontFamily:"Poppins"}}>FIBRE</h1>
					</div>
					<div>
						<img
							className="Sliderpics"
							style={{ borderRadius: '1cm' }}
							src={headphoneno1}
							alt="Firstslide"
						/>

						<button className="Browsebutn">
							Browse
							<i className="fa fa-arrow-circle-right" style={{ left: '0.2cm' }} aria-hidden="true"></i>
						</button>
            <h1 className="Slidebtndis" style={{fontFamily:"Poppins"}}>Meme </h1>
                 <h1 className="Slidebtndis2" style={{fontFamily:"Poppins"}}>FIBRE</h1>
					</div>
					<div>
						<img
							className="Sliderpics"
							style={{ borderRadius: '1cm' }}
							src={headphoneno1}
							alt="Firstslide"
						/>
						<button className="Browsebutn">
							Browse
							<i className="fa fa-arrow-circle-right" style={{ left: '0.2cm' }} aria-hidden="true"></i>
						</button>
            <h1 className="Slidebtndis" style={{fontFamily:"Poppins"}}>Meme </h1>
                 <h1 className="Slidebtndis2" style={{fontFamily:"Poppins"}}>FIBRE</h1>
					</div>
				</Slider>
			</div>
		);
	}
}
