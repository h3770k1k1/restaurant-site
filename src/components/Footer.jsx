import { React } from "react";
import footerLogo from "../resources/footer-logo.png";
import "./footer2.css";
import InstagramLogo from "../resources/instagram.svg";
import FacebookLogo from "../resources/facebook.svg";
import UpArrowIcon from "../resources/up-arrow.svg";
import ShoppingCart from "../resources/shopping-cart.svg";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

const Footer = () => {
	detectScrollUp();
	detectScrollDown();
	const { t, i18n } = useTranslation();

	return (
		<div className="footer">
			<div className="info-column logo-column">
				<div className="footer-logo-container">
					<img className="footer-logo-img" src={footerLogo} />
				</div>
				<div className="sm-container">
					<p>{t("visitProfile")}</p>
					<div className="sm-icons-container">
						<img src={InstagramLogo}></img>
						<img src={FacebookLogo}></img>
					</div>
				</div>
			</div>
			<div className="info-column">
				<h3>{t("contactHeading")}</h3>
				<p>KEBUG KEBAB</p>
				<p>
					12-345 Warszawa,<br></br> ul. Waszyngtona
				</p>
				<p>17-853-87-97</p>
				<p>amagdarass@gmail.com</p>
			</div>
			<div className="info-column">
				<h3>{t("aboutHeading")}</h3>
				<p>{t("ourCompanyParagraph")}</p>
				<p>{t("menuParagraph")}</p>
				<p>{t("deliveryAreaParagraph")}</p>
			</div>
			<div className="info-column">
				<h3>{t("informationHeading")}</h3>
				<p>{t("howToOrderParagraph")}</p>
				<p>{t("privacyPolicyParagraph")}</p>
				<p>{t("orderRegulationsParagraph")}</p>
			</div>
			<div className="bottom-button shopping-button">
				<img src={ShoppingCart} />
			</div>
			<div
				className="bottom-button scroll-to-top-button  non-visible"
				onClick="window.scroll(0,0);"
			>
				<a href="#top">
					<img className="up-arrow-icon" src={UpArrowIcon} />
				</a>
			</div>
		</div>
	);
};

function detectScrollDown() {
	let prevScrollTop = 0;
	window.addEventListener("scroll", () => {
		const currentScrollTop =
			window.pageYOffset || document.documentElement.scrollTop;
		if (currentScrollTop > prevScrollTop) {
			showButton();
		}
		prevScrollTop = currentScrollTop;
	});
}

function detectScrollUp() {
	let prevScrollTop = window.pageYOffset || document.documentElement.scrollTop;
	window.addEventListener("scroll", () => {
		const currentScrollTop =
			window.pageYOffset || document.documentElement.scrollTop;
		if (prevScrollTop > currentScrollTop) {
			hideButton();
		}
		prevScrollTop = currentScrollTop;
	});
}

function showButton() {
	const scrollToTopButton = document.getElementsByClassName(
		"scroll-to-top-button"
	)[0];
	scrollToTopButton.classList.remove("non-visible");
}

function hideButton() {
	const scrollToTopButton = document.getElementsByClassName(
		"scroll-to-top-button"
	)[0];
	scrollToTopButton.classList.add("non-visible");
}
export default Footer;
