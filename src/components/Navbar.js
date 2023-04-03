import React, { useState } from "react";
import mainLogo from "../resources/logo.png";
import "../App.scss";
import dropDownArrow from "../resources/drop-down-arrow.svg";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

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
			<div className="logo-container">
				<img className="logo-img" src={mainLogo} alt="logo" />
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
				<select
					onfocus="this.size = 3;"
					onblur="this.size=0;"
					onchange="this.size=1;this.blur()"
					className="dropdown-button"
					onChange={handleChangeLanguage}
					onClick={handleArrowClick}
				>
					<option
						selected="selected"
						value="en"
						className="language-option choosen-language"
					>
						English
					</option>
					<option className="language-option" value="pl">
						Polski
					</option>
					<option className="language-option" value="de">
						Deutsch
					</option>
				</select>
				<div className="dropdown-arrow">
					<span
						style={{
							webkitTransform: isRotated
								? "rotate(-180deg) translateZ(0)"
								: "none",
							transition: "0.4s ease",
						}}
					>
						<img src={dropDownArrow}></img>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
