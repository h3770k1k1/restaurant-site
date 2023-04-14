import React, { useEffect, useRef, useState } from "react";

function Map() {
	const googleMapRef = useRef(null);
	const [googleMap, setGoogleMap] = useState(null);

	useEffect(() => {
		const googleMapScript = document.createElement("script");
		googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
		window.document.body.appendChild(googleMapScript);

		googleMapScript.addEventListener("load", () => {
			const map = new window.google.maps.Map(googleMapRef.current, {
				center: { lat: 37.7749, lng: -122.4194 },
				zoom: 8,
			});
			setGoogleMap(map);
		});
	}, []);

	return (
		<div ref={googleMapRef} style={{ width: "100%", height: "500px" }}></div>
	);
}

export default Map;
