import { React } from "react";
import mainLogo from "../resources/logo.png";
import dropDownArrow from "../resources/drop-down-arrow.svg";

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
			<div className="language-change-button">
				<div className="nav-button language-name">EN</div>
				<div className="dropdown-button">
					<img className="dropdown-arrow-img" src={dropDownArrow} />
					<div className="dropdown-content">
						<a className="choosen-language" href="#">
							English
						</a>
						<a className="language-option" href="#">
							Polski
						</a>
						<a className="language-option" href="#">
							Deutsch
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
