class Root extends React.Component {
	render() {
		const mainContainerStyle = {
			color: "white",
			width: "100vw",
			height: "100vh",
			margin: "0",
		};
		const navBarStyle = {
			backgroundColor: "Black",
			width: "100vw",
			height: "10vh",
			margin: "0",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
		};
		const logoContainerStyle = {
			marginLeft: "10%",
			marginRight: "1%",
			cursor: "pointer",
		};
		const navButtonStyle = {
			color: "white",
			cursor: "pointer",
		};
		const navButtonStyle2 = {
			color: "white",
			marginLeft: "50%",
			cursor: "pointer",
		};

		const buttonsContainerStyle = {
			justifyContent: "space-between",
			alignItems: "center",
			height: "100%",
			display: "flex",
			flexDirection: "row",
			width: "15%",
			fontSize: "14px",
		};

		return (
			<div style={mainContainerStyle} className="main-container">
				<div style={navBarStyle} className="navbar">
					<div style={logoContainerStyle} className="logo-container">
						<img className="logo-img" src={"logo.png"} />
					</div>
					<div style={buttonsContainerStyle}>
						<div style={navButtonStyle} className="nav-button">
							MENU
						</div>
						<div style={navButtonStyle} className="nav-button">
							GALLERY
						</div>
						<div style={navButtonStyle} className="nav-button">
							CONTACT
						</div>
					</div>
					<div style={navButtonStyle2} className="nav-button login-button">
						SIGN IN
					</div>
				</div>
				<div className="main-image-container">
					<img src={"main-photo.png"} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Root />, document.querySelector("#root"));
