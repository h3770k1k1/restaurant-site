import React, { useEffect, useRef } from "react";
import "./Contact.css";

function Contact() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  
  const initMap = () => {
    const location = { lat: 52.2298, lng: 21.0118 };
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 14,
      center: location,
    });
    const marker = new window.google.maps.Marker({
      position: location,
      map: map
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    const API_KEY = 'key.js';
    script.src = `https://maps.googleapis.com/maps/api/js?key=&{API_KEY}&callback=initMap`;
    script.async = true;
    window.initMap = initMap;
    document.body.appendChild(script);})


  return (
    <div>
      <div id="map-ref" ref={mapRef}></div>
    </div>
  );
}

export default Contact;
