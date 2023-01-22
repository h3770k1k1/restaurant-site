import { React } from "react";
import "./App.css";
import mainLogo from "./logo.png";
import mainPhoto from "./main-photo.png";

function App() {
	return (
		<div className="MainContainer">
			<div className="Navbar">
				<div className="logo-container">
					<img className="logo-img" src={mainLogo} />
				</div>
				<div className="nav-buttons-container">
					<div className="nav-button">MENU</div>
					<div className="nav-button">GALLERY</div>
					<div className="nav-button">CONTACT</div>
				</div>
				<div className="nav-button login-button">SIGN IN</div>
			</div>
			<div className="main-image-container">
				<div className="interactions-container">
					<div className="text-container">
						<div className="title">KEBUG KEBAB</div>
						<div className="greeting">Welcome to our restaurant!</div>
					</div>
					<div className="order-buttons-container">
						<div className="order-button">ORDER ON-LINE</div>
						<div className="order-button">CALL AND ORDER</div>
					</div>
				</div>
				<img className="main-photo-img" src={mainPhoto} />
			</div>
		</div>
	);
}

export default App;
