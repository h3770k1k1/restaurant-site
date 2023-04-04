import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import "./Contact.css";

const Contact = () => {
	return (
		<div className="MainContainer">
			<Navbar />
			<div className="contact-data-container">
				<div className="contact-info"></div>
				<div className="map-block">
					<div className="e-mail-container">
						<div className="contact-form">
							<div className="text-block"></div>
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
