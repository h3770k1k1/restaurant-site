import { React } from "react";
import "./StickyButtons.css";
import UpArrowIcon from "../resources/up-arrow.svg";
import ShoppingCart from "../resources/shopping-cart.svg";


const Buttons = () => {
    detectScrollUp();
	detectScrollDown();
	return (
        <div id="ButtonsContainer">
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
    </div></div>
    )}

    
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

export default Buttons;