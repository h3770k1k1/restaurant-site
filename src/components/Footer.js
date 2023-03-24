import { React } from "react";
import footerLogo from "../resources/footer-logo.png";
import "./Footer.css";
import InstagramLogo from "../resources/instagram.svg";
import FacebookLogo from "../resources/facebook.svg";
import UpArrowIcon from "../resources/up-arrow.svg";

export const Footer = () => {
	detectScrollUp();
	detectScrollDown();

	return (
		<div className="footer">
			<div className="info-column logo-column">
				<div className="footer-logo-container">
					<img className="footer-logo-img" src={footerLogo} />
				</div>
				<div className="sm-container">
					<p>Visit our profile</p>
					<div className="sm-icons-container">
						<img src={InstagramLogo}></img>
						<img src={FacebookLogo}></img>
					</div>
				</div>
			</div>
			<div className="info-column">
				<h3>Contact</h3>
				<p>KEBUG KEBAB</p>
				<p>
					12-345 Warszawa,<br></br> ul. Waszyngtona
				</p>
				<p>17-853-87-97</p>
				<p>amagdarass@gmail.com</p>
			</div>
			<div className="info-column">
				<h3>About us</h3>
				<p>OUR COMPANY</p>
				<p>MENU</p>
				<p>DELIVERY AREA</p>
			</div>
			<div className="info-column">
				<h3>Information</h3>
				<p>HOW TO ORDER</p>
				<p>PRIVACY POLICY</p>
				<p>ORDER REGULATIONS</p>
			</div>
			<div
				className="scroll-to-top-button non-visible"
				onClick="window.scroll(0,0);"
			>
				<a href="#top">
					<img className="up-arrow-icon " src={UpArrowIcon} />
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
			console.log("down");

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
			console.log("up");
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
	console.log("gonwo");
}

function hideButton() {
	const scrollToTopButton = document.getElementsByClassName(
		"scroll-to-top-button"
	)[0];
	scrollToTopButton.classList.add("non-visible");
	console.log("papaja");
}
