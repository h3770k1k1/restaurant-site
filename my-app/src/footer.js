import { React } from "react";

export const Footer = () => {
	return (
		<div className="footer">
			<div className="info-column">
				<div className="footer-logo-container"></div>
				<div className="sm-container">
					<p>Visit our profile</p>
					<div className="sm-icons-container"></div>
				</div>
			</div>
			<div className="info-column">
				<h3>Contact</h3>
				<p>KEBUG KEBAB</p>
				<p>
					12-345 Warszawa,<br></br> ul. Waszyngtona
				</p>
				<p>17-853-87-97</p>
				<p>kontakt@darakebab.pl</p>
			</div>
			<div className="info-column">
				<h3>About us</h3>
				<p>OUR COMPANY</p>
				<p>MENU</p>
				<p>DELIVERY AREA</p>
			</div>
			<div className="info-column">
				<h3>Informaion</h3>
				<p>HOW TO ORDER</p>
				<p>PRIVACY POLICY</p>
				<p>ORDER REGULATIONS</p>
			</div>
		</div>
	);
};
