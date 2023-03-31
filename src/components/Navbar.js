import { React } from "react";
import mainLogo from "../resources/logo.png";
import dropDownArrow from "../resources/drop-down-arrow.svg";
import { Suspense } from "react";
import { useState } from "react";
import "../App.scss";
import { useTranslation } from "react-i18next";
import { Link, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";

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
				<div className="nav-button">{t("menu")}</div>
				<div className="nav-button">{t("gallery")}</div>
				<NavLink to="/contact" className="nav-button">
					{t("contact")}
				</NavLink>
			</div>
			<div className="nav-button login-button">{t("signIn")}</div>
			<div className="language-change-button">
				<select className="dropdown-button" onChange={handleChangeLanguage}>
					<img className="dropdown-arrow-img" src={dropDownArrow} />
					<option value="en" className="language-option choosen-language">
						English
					</option>
					<option className="language-option" href="#">
						Polski
					</option>
					<option className="language-option" value="de">
						Deutsch
					</option>
				</select>
			</div>
		</div>
	);
};
export default Navbar;
