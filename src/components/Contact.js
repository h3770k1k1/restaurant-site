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
									<div className="peronal-data name"></div>
									<div className="peronal-data e-mail"></div>
								</div>
								<div className="submit-button"></div>
							</div>
						</div>
					</div>
					<div className="map-container"></div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
