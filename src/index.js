import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<I18nextProvider i18n={i18n}>
				<Routes>
					<Route path="/restaurant-site" element={<App />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</I18nextProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
