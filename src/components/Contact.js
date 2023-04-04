import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
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
					<div className="contact-way"></div>
					<div className="contact-way"></div>
					<div className="contact-way"></div>
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
							<input className="message-box" placeholder="Your Message"></input>
							<div className="signature">
								<div className="personal-details">
									<input
										className="peronal-data name"
										placeholder="Your Name"
									></input>
									<input
										className="peronal-data e-mail"
										placeholder="Your E-mail"
									></input>
								</div>
								<div className="submit-button">SUBMIT</div>
							</div>
						</div>
					</div>
					<div className="map-container"></div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
