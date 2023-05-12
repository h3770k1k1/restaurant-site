import React from "react";
import Navbar from "../components/Navbar";
import "./Contact.css";
import Map from "./map.jsx";
import Letter from "../resources/letter.svg";
import Phone from "../resources/phone.svg";
import Place from "../resources/place.svg";
import Footer from "../components/Footer.jsx";
import { useState, useEffect, useRef } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { translationEn, translationDe, translationPl } from "../translations";

const Contact = () => {
	const { t } = useTranslation();

	const [count, setCount] = useState(0);

	const onChange = (event) => {
		i18n.changeLanguage(event.target.value);
		setCount((previousCount) => previousCount + 1);
	};
	const [mapContainer, setMapContainer] = useState(null);
	return (
		<div className="main-container">
			<Navbar />
			<div className="contact-data-container">
				<div className="contact-info">
					<div className="heading">{t("contactUs")}</div>
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
					<div className="contact-way">
						<div className="contact-pic">
							<img src={Place}></img>
						</div>
						<div className="contact-data">
							<div className="contact-way-name">{t("office")}</div>
							<div className="data">{t("adress")}</div>
							<div className="data">{t("country")}</div>
						</div>
					</div>
					<div className="contact-way">
						<div className="contact-pic">
							<img src={Phone}></img>
						</div>
						<div className="contact-data">
							<div className="contact-way-name">{t("callUs")}</div>
							<div className="data">(+48) 123 456 789</div>
							<div className="data">(+12) 98 765 437</div>
						</div>
					</div>
					<div className="contact-way">
						<div className="contact-pic">
							<img src={Letter}></img>
						</div>
						<div className="contact-data">
							<div className="contact-way-name">{t("sendUs")}</div>
							<div className="data">mailmail@support.com</div>
							<div className="data">mailmail@bussines.com</div>
						</div>
					</div>
				</div>
				<div className="map-block">
					<div className="e-mail-container">
						<div className="contact-form">
							<div className="text-block">
								<div className="heading">{t("messageEncourage")}</div>
								<div className="description-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</div>
							</div>
							<form>
								<textarea className="message-box textbox"></textarea>
							</form>
							<div className="signature ">
								<div className="personal-details">
									<input
										className="peronal-data name textbox"
										placeholder={t("namePlaceholder")}
									></input>
									<input
										className="peronal-data e-mail textbox"
										placeholder={t("mailPlaceholder")}
									></input>
								</div>
								<div className="submit-button">{t("submit")}</div>
							</div>
						</div>
					</div>
					<div className="map-container">
						<Map />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
i18n.use(initReactI18next).init({
	resources: {
		en: { translation: translationEn },
		de: { translation: translationDe },
		pl: { translation: translationPl },
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false },
});
export default Contact;
