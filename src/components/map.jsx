import React, { useEffect, useRef } from "react";
import "./Contact.css";

function Contact() {
  const mapRef = useRef(null);

  const initMap = () => {
    const location = { lat: 52.2298, lng: 21.0118 };
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 14,
      center: location,
    });
    const marker=new window.google.maps.Marker({
      position:location,
      map:map
    })
  };


  const checkDistance = (userLocation) => {
    const location = { lat: 52.2298, lng: 21.0118 };
    const distance = calculateDistance(userLocation, location);

    if (distance > 10) {
      alert("Jesteś oddalony o ponad 10 km od naszej lokalizacji! Dowóz niemożliwy!");
    }if (distance < 10) {
      alert("Jesteś oddalony o mniej niż 10 km od naszej lokalizacji! Możemy dostarczyć Twoje zamówienie!");
    }
    
  };

  const calculateDistance = (point1, point2) => {
    const earthRadius = 6371; // Promień ziemi
    const lat1 = toRadians(point1.lat);
    const lat2 = toRadians(point2.lat);
    const lon1 = toRadians(point1.lng);
    const lon2 = toRadians(point2.lng);

    const dlat = lat2 - lat1;
    const dlon = lon2 - lon1;

    const a =
      Math.sin(dlat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    return distance;
  };

  const toRadians = (angle) => {
    return (angle * Math.PI) / 180;
  };

  useEffect(() => {
    const script = document.createElement("script");
    const API_KEY = 'key.js';
    script.src = `https://maps.googleapis.com/maps/api/js?key=&{API_KEY}&callback=initMap`;
    script.async = true;
    window.initMap = initMap;
    document.body.appendChild(script);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          checkDistance(userLocation);
        },
        (error) => {
          console.log("Błąd podczas pobierania lokalizacji użytkownika:", error);
        }
      );
    } else {
      console.log("Geolokalizacja nie jest obsługiwana przez przeglądarkę.");
    }
  }, []);

  return (
    <div>
      <div id="map-ref" ref={mapRef} ></div>
    </div>
  );
}

export default Contact;
