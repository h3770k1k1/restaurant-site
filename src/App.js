import { React, Suspense } from "react";
import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import "./App.scss";
import { Footer } from "./components/Footer";
import mainPhoto from "./resources/main-photo.png";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

const translationEn = {
	welcome: "Welcome to our restaurant!",
	orderOnline: "ORDER ON-LINE",
	callAndOrder: "CALL AND ORDER",
	contact: "CONTACT",
	menu: "MENU",
	gallery: "GALLERY",
	signIn: "SIGN IN",
	visitProfile: "Visit our profile",
	contactHeading: "Contact",
	aboutHeading: "About us",
	ourCompanyParagraph: "OUR COMPANY",
	menuParagraph: "MENU",
	deliveryAreaParagraph: "DELIVERY AREA",
	informationHeading: "Information",
	howToOrderParagraph: "HOW TO ORDER",
	privacyPolicyParagraph: "PRIVACY POLICY",
	orderRegulationsParagraph: "ORDER REGULATIONS",
};
const translationDe = {
	welcome: "Willkommen in unserem Restaurant!",
	orderOnline: "ONLINE BESTELLEN",
	callAndOrder: "ANRUFEN UND BESTELLEN",
	contact: "KONTAKT",
	menu: "MENU",
	gallery: "GALLERY",
	signIn: "EINLOGGEN",
	visitProfile: "Besuchen Sie unser Profil",
	contactHeading: "KONTAKT",
	aboutHeading: "ÜBER UNS",
	ourCompanyParagraph: "UNSER UNTERNEHMEN",
	menuParagraph: "MENU",
	deliveryAreaParagraph: "LIEFERGEBIET",
	informationHeading: "Information",
	howToOrderParagraph: "WIE BESTELLE ICH",
	privacyPolicyParagraph: "DATENSCHUTZERKLÄRUNG",
	orderRegulationsParagraph: "BESTELLVORSCHRIFTEN",
};

i18n.init({
	resources: {
		en: { translation: translationEn },
		de: { translation: translationDe },
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false },
});

function App() {
	const { t } = useTranslation();
	const [count, setCount] = useState(0);

	const onChange = (event) => {
		i18n.changeLanguage(event.target.value);
		setCount((previousCount) => previousCount + 1);
	};

	return (
		<div className="MainContainer">
			<Navbar />

			<div className="interactions-container">
				<div className="text-container">
					<div className="title">KEBUG KEBAB</div>
					<Suspense fallback="Loading...">
						<div className="greeting">{t("welcome")}</div>
					</Suspense>
				</div>
				<div className="order-buttons-container">
					<div className="order-button">{t("orderOnline")}</div>
					<div className="order-button">{t("callAndOrder")}</div>
				</div>
			</div>
			<img className="main-photo-img" src={mainPhoto} />

			<Footer />
		</div>
	);
}
export default App;
