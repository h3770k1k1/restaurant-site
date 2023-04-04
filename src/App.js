import React, { Suspense, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import mainPhoto from "./resources/main-photo.jpeg";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { translationEn, translationDe, translationPl } from "./translations";

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

export default App;
