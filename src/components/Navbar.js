import React, { useState } from "react";
import mainLogo from "../resources/logo.png";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector.jsx";

const Navbar = () => {
	const { t, i18n } = useTranslation();
	const [isRotated, setIsRotated] = useState(false);

	const handleChangeLanguage = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	const handleArrowClick = () => {
		setIsRotated(!isRotated);
	};

	return (
		<div className="Navbar">
			<NavLink to="/restaurant-site">
				<div className="logo-container">
					<img className="logo-img" src={mainLogo} alt="Logo" />
				</div>
			</NavLink>
			<div className="nav-buttons-container">
				<div className="nav-button">{t("menu")}</div>
				<div className="nav-button">{t("gallery")}</div>
				<NavLink to="/contact" className="nav-button">
					{t("contact")}
				</NavLink>
			</div>
			<div className="nav-button login-button">{t("signIn")}</div>
			<LanguageSelector
				isRotated={isRotated}
				handleChangeLanguage={handleChangeLanguage}
				handleArrowClick={handleArrowClick}
			/>
		</div>
	);
};

export default Navbar;
