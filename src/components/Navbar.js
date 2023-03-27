import { React } from "react";
import mainLogo from "../resources/logo.png";
import dropDownArrow from "../resources/drop-down-arrow.svg";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useState } from "react";
import "../App.scss";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
	const { t, i18n } = useTranslation();

	const handleChangeLanguage = (e) => {
		i18n.changeLanguage(e.target.value);
	};
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
					<select className="dropdown-content" onChange={handleChangeLanguage}>
						<option value="en" className="choosen-language">
							English
						</option>
						<a className="language-option" href="#">
							Polski
						</a>
						<option className="language-option" value="de">
							Deutsch
						</option>
					</select>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
