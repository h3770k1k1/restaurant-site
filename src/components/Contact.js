import React from "react";
import Navbar from "../components/Navbar";
import "./Contact.css";
import Map from "./map.jsx";
import Letter from "../resources/letter.svg";
import Phone from "../resources/phone.svg";
import Place from "../resources/place.svg";
import Footer from "../components/Footer";
import { useState, useEffect, useRef } from "react";
const Contact = () => {
	const [mapContainer, setMapContainer] = useState(null);
	return (
		<div className="main-container">
			<Navbar />
			<div className="contact-data-container">
				<div className="contact-info">
					<div className="heading">Contact Us</div>
					<div className="description-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute
						irure dolor in reprehenderit in voluptate velit esse cillum dolore
						eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est
						laborum.
					</div>
				</div>
				<div className="contact-ways">
					<div className="contact-way">
						<div className="contact-pic">
							<img src={Place}></img>
						</div>
						<div className="contact-data">
							<div className="contact-way-name">Office</div>
							<div className="data">1AB, St. 3rd May, Warsaw, </div>
							<div className="data">Poland</div>
						</div>
					</div>
					<div className="contact-way">
						<div className="contact-pic">
							<img src={Phone}></img>
						</div>
						<div className="contact-data">
							<div className="contact-way-name">Call Us</div>
							<div className="data">(+48) 123 456 789</div>
							<div className="data">(+12) 98 765 437</div>
						</div>
					</div>
					<div className="contact-way">
						<div className="contact-pic">
							<img src={Letter}></img>
						</div>
						<div className="contact-data">
							<div className="contact-way-name">Send Us</div>
							<div className="data">mailmail@support.com</div>
							<div className="data">mailmail@bussines.com</div>
						</div>
					</div>
				</div>
				<div className="map-block">
					<div className="e-mail-container">
						<div className="contact-form">
							<div className="text-block">
								<div className="heading">Drop Us A Line</div>
								<div className="description-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</div>
							</div>
							<form>
								<textarea className="message-box textbox"></textarea>
							</form>
							<div className="signature ">
								<div className="personal-details">
									<input
										className="peronal-data name textbox"
										placeholder="Your Name"
									></input>
									<input
										className="peronal-data e-mail textbox"
										placeholder="Your E-mail"
									></input>
								</div>
								<div className="submit-button">SUBMIT</div>
							</div>
						</div>
					</div>
					<div className="map-container">
						<Map />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
