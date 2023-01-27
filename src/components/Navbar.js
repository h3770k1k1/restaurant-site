import { React } from "react";
import mainLogo from "../resources/logo.png";

export const Navbar = () => {
	return (
		<div className="Navbar">
			<div className="logo-container">
				<img className="logo-img" src={mainLogo} />
			</div>
			<div className="nav-buttons-container">
				<div className="nav-button">MENU</div>
				<div className="nav-button">GALLERY</div>
				<div className="nav-button">CONTACT</div>
			</div>
			<div className="nav-button login-button">SIGN IN</div>
		</div>
	);
};
