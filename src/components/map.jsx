import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import userMarker from "../resources/marker.png"
function Map() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const initMap = () => {
    const location = { lat: 52.2298, lng: 21.0118 };
    const officeLocation = { lat: 52.2331, lng: 20.9911 }; 
  
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 14,
      center: location,
    });
  
    const marker = new window.google.maps.Marker({
      position: location,
      map: map,
      draggable: true,
      icon: userMarker,
    });
  
    const officeMarker = new window.google.maps.Marker({
      position: officeLocation,
      map: map,
      draggable: false,
    });
  
    markerRef.current = marker;
  
    window.google.maps.event.addListener(marker, "dragend", () => {
      const newPosition = marker.getPosition();
      setSelectedLocation({
        lat: newPosition.lat(),
        lng: newPosition.lng(),
      });
    });
  
    window.google.maps.event.addListener(officeMarker, "dragend", () => {
      const newPosition = officeMarker.getPosition();
    });
  };
  

  useEffect(() => {
    const script = document.createElement("script");
    const API_KEY = "key.js";
    script.src = `https://maps.googleapis.com/maps/api/js?key=&{API_KEY}&callback=initMap`;
    script.async = true;
    window.initMap = initMap;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div id="map-ref" ref={mapRef}></div>
      {selectedLocation && (
        <div>
          <p>Zaznaczony punkt:</p>
          <p>Latitude: {selectedLocation.lat}</p>
          <p>Longitude: {selectedLocation.lng}</p>
        </div>
      )}
    </div>
  );
}

export default Map;
