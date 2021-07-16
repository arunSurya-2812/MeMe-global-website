/**
 * @description      :
 * @author           : surya12
 * @group            :
 * @created          : 26/06/2021 - 13:15:37
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 26/06/2021
 * - Author          : surya12
 * - Modification    :
 **/

import React, { Component } from 'react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Sweety from './img/Sweety.png';
import Mighty from './img/Mighty.png';
import Jack from './img/Jack.png';
import Fastlane from './img/Fastlane.png';
import Golden from './img/Golden.png';
import asokha from './img/asokha.png';
import { Row, Col, Image, Carousel, Figure } from 'react-bootstrap';
import './Components.css';
import itgrap from './img/itgrap.jpg';
import datasecure from './img/datasecure.jpg';
import handandlaptop from './img/handandlaptop.jpg';
import FigureCaption from 'react-bootstrap/esm/FigureCaption';

export default class ITsolution extends Component {
	render() {
		return (
			<div >
				<div className="container-fluid">
					<div className="Knits">
						<span>
							<a href="http://localhost:3000/" title="ITsolution">
								Home
							</a>
						</span>
						<ArrowForwardIosIcon />
						<span>IT Solution</span>
						<h1>IT Solution</h1>
					</div>
				</div>
				<div>
					<h2>
						<b>MeMe IT Division</b>
					</h2>

					<Carousel className="ITSolution-slideshow">
						<Figure>
							<Carousel.Item interval={700}>
								<img className="d-block w-100" src={handandlaptop} alt="Second slide" />
							</Carousel.Item>
						</Figure>
						<Carousel.Item interval={700}>
							<img className="d-block w-100" src={itgrap} alt="Second slide" />
							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100" src={datasecure} alt="Third slide" />
							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
				<div>
					<h4>
						<span style={{ color: '#333399' }}>
							<strong>Development of Technology:</strong>
						</span>
					</h4>
					<p>
						In correspondance, that MeMe Group is a product based firm, MeMe develops it’s own solutions for
						the requirement of business industry to outweigh it’s competitors in the Business field.
					</p>
					<p>
						{' '}
						In correspondance, that MeMe Group is a product based firm, MeMe develops it’s own solutions for
						the requirement of business industry to outweigh it’s competitors in the Business field.{' '}
					</p>
					<p>
						It concentrates on the development of E-Commerce platforms and E-Learning and Electric Vehicle
						Innovation & Strategic businesses build up, seeking to create a revolution in the field of
						Information Technology.
					</p>
					<p>
						The tag line goes – <strong>“Everyone is Invited</strong> , MeMe IT Division invites everyone ,
						to share their thoughts with freedom of mankind to think, execute and excel any innovative ideas
						and thoughts that can be brought into IT development.
					</p>
					<p>
						<em>
							<strong>“What you think? You become.What you execute? You Develop. </strong>
						</em>
					</p>
					<p>
						Join Us, Let’s make the World grow with{' '}
						<span style={{ color: '#3366ff' }}>
							<strong>MeMe WorldWide</strong>
						</span>
					</p>
				</div>
				<div>
					<p>
						Have a glimpse of MeMe IT’s work in the development of E-Commerce Web applications and Mobile
						applications for our own Brands and other innovative sectors of Technology with great business
						development and enhancement of creative thinking through E-Learning platforms.
					</p>
					<h4 align="center">
						<strong>
							<span style={{ color: 'red' }}>NAZCA</span>
						</strong>
					</h4>
				</div>
				<div>
					<p>
						Nazca, is a typical E-Commerce website in Clothing, which provides varied options for the
						customers and vendors to enrich their clothing style and business respectively through trendy
						products manufactured by MeMe in Tirupur, Tamil Nadu, said to be a cotton house of MeMe ‘s
						clothing industry. It provides a Pre-Orders option to the end user to get the maximum offers
						within a limited time for the benefits of the end user. Subscription plans of the brand- helps
						the vendor and user gets them profited in a wide way. Click here to visit NAZCA :
						https://nazca.in/
					</p>
				</div>
				<div>
					<h4 align="center">
						<span style={{ color: '#e3b44d' }}>
							<strong>HOMECRAFT </strong>
						</span>
					</h4>
				</div>
				<div>
					<p>
						Homecraft, is also an E-Commerce platform, unlike NAZCA it is visioned to preseve the cultural
						heritage of the land. Hence, offers the mates with products of such kind. It encomprises of
						number towns as divisions within the Homecraft viz.,
						<br />
						Leather town, Rugs town, Ceramic town, Sweater town, Furniture town, Tea town, Silk town
						<br />
						etc., Every town enriches the products to store and retrieve the value of the self and handmade
						goods. Homecrafts makes it possible to all people to engage with us and sell their products, at
						minimum vendor expenditure, thereby helping them be profited. Click here to visit Homecraft:
						https://homecraft.tv/
					</p>
				</div>
				<div>
					<h4 align="center">
						<span style={{ color: '#cc99ff' }}>
							<strong>OPHELIA MOON </strong>
						</span>
					</h4>
				</div>
				<div>
					<p>
						Ophelia Moon – A versatile brand
						<br />
						Here you can explore all artistic handmade, homecrafts products with us.
						<br />
						Ophelia Moon presents the culture, modernization, elegance, tenderness with you.
						<br />
						We are a company which have faith in culture and tribes.
					</p>
					<p>
						We people are going to acclaim India with aesthetic, beauteous quintessential product to the
						world.
					</p>
				</div>
				<div>
					<h4 align="center">
						<span style={{ color: '#0000ff' }}>
							<strong>MeMe Yacht </strong>
						</span>
					</h4>
				</div>
				<div>
					<h4 align="center">
						<span style={{ color: '#00ccff' }}>
							<strong>MeMe Bike </strong>
						</span>
					</h4>
				</div>
				<div>
					<p>
						MeMe steps into the Electric Vehicles sector by Ride sharing business. Here, a rider can
						register by self by downloading MeMeBike mobile Applications from Google Play Store and App
						Store for Android and IOS versions respectively. They can deposit and start a ride by scanning
						QR code on the bike through the installed MMB mobile application, where a rider pays the
						estimated amount to start the ride and by entering the ORIGIN and DESTINATION location. MMB
						admin tracks the activity of the rider during the ride, and provides the rider the necessary
						information to the Mobile application as Rider data. MMB promotes or enhances the usage of
						Electric Vehicles, thereby, helping the environment to be pollution free by
						<span style={{ color: '#00ff00' }}>
							<strong> GO GREEN.</strong>
						</span>
					</p>
				</div>
				<div>
					<h4 align="center">
						<span style={{ color: '#993366' }}>
							<strong>MeMe VR Gaming </strong>
						</span>
					</h4>
				</div>
				<div>
					<span style={{ color: '#000000' }}>
						<p>
							MeMe also marks a step into Virtual Reality Gaming project. This is a gaming platform with
							GOOGLE cardboard and OCULUS supported, which provides the game RIDERS to ride the bike in a
							most adventurous way, by giving the options of choosing day/night time and weather changing
							option during the ride. Additionally, the MMB VR helps the game riders t connect within
							themselves during the ride for it to be more interactive. Gamer has the choice of musics to
							be played during the ride. Data of kilometers of ride, time taken, calories burnt and much
							more user health data is shared to the user for self assessment. Its developed to bring in a
							revolutionary impact in the field of VR gaming by its drastic features and gamer experience.
						</p>
					</span>
					<h3>
						<strong>Upcoming Projects:</strong>
					</h3>
					<ul>
						<li>
							<strong>Da Vinci E-Learning application</strong>
						</li>
						<li>
							<strong>MeMe Ride</strong>
						</li>
						<li>
							<strong>Da Vinci E-Learning application</strong>
						</li>
						<li>
							<strong>MeMe Ride</strong>
						</li>
						<li>
							<strong>MeMe Move</strong>
						</li>
						<li>
							<strong>MeMe Fashion </strong>
						</li>
					</ul>
					<p>
						And lots more in E-Commerce and other domains to make a revolutionary impact in the field of
						Information Technology including security solutions in future.
					</p>
					<p>Join Us build a world of version 2.0 in technology.</p>
				
					</div>
				<div className="container-fluid">
					<Row className="Sponsers">
						<Col className="spon">
							<Image src={Golden} />
						</Col>
						<Col className="spon">
							<Image src={Sweety} />
						</Col>
						<Col className="spon">
							<Image src={Fastlane} />
						</Col>
						<Col className="spon">
							<Image src={Mighty} />
						</Col>
						<Col className="spon">
							<Image src={Jack} />
						</Col>
					</Row>
				</div>
				<div className="pholex"></div>
				<div className="policy"></div>
				
			</div>
		);
	}
}
