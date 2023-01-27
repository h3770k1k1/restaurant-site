import { React } from "react";
import "./App.scss";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import mainPhoto from "./resources/main-photo.png";

function App() {
	return (
		<div className="MainContainer">
			<Navbar />
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
			<Footer />
		</div>
	);
}
export default App;
