import { React } from "react";
import "./styles.css";

function App() {
	return (
		<div className="MainContainer">
			<div className="Navbar">
				<div className="logo-container">
					<img className="logo-img" src={"logo.png"} />
				</div>
				<div>
					<div className="nav-button">MENU</div>
					<div className="nav-button">GALLERY</div>
					<div className="nav-button">CONTACT</div>
				</div>
				<div className="nav-button login-button">SIGN IN</div>
			</div>
			<div className="main-image-container">
				<img src={"main-photo.png"} />
			</div>
		</div>
	);
}

export default App;
