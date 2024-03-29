import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import userMarker from "../resources/marker.png";
import { API_KEY } from "../key";

const officeLocation = { lat: 52.2331, lng: 20.9911 };

function Map() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(
              "User location:",
              position.coords.latitude,
              position.coords.longitude
            );
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            initMap(userLocation);
          },
          (error) => {
            console.error("Error retrieving location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by the browser.");
      }
    };

    getLocation();
    logLocations();
  }, []);

  const initMap = (userLocation) => {
    const location = { lat: 52.2298, lng: 21.0118 };

    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 6,
      center: location,
    });

    const marker = new window.google.maps.Marker({
      position: userLocation,
      map: map,
      draggable: false,
      icon: userMarker,
    });

    const officeMarker = new window.google.maps.Marker({
      position: officeLocation,
      map: map,
      draggable: false,
    });

    markerRef.current = marker;
    logLocations();
    calculateDistance(marker.getPosition(), officeLocation);
  };

  const calculateDistance = (point1, point2) => {
    const lat1 = point1.lat();
    const lon1 = point1.lng();
    const lat2 = point2.lat;
    const lon2 = point2.lng;

    const R = 6371; // Earth's radius in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    setDistance(distance);
    checkDistance(distance);
  };

  const toRad = (value) => {
    return (value * Math.PI) / 180;
  };

  const checkDistance = (distance) => {
    if (distance > 10) {
      window.alert("Jesteś od nas dalej niż 10 km! Dowóz niemożliwy");
    } else if (distance < 10) {
      window.alert("Jesteś bliżej niż 10 km! Dowóz możliwy");
    }
  };

  const logLocations = () => {
    if (markerRef.current) {
      console.log("Selected");
      console.log("Selected Location:");
      console.log("Latitude:", markerRef.current.getPosition().lat());
      console.log("Longitude:", markerRef.current.getPosition().lng());
    }
    console.log("Office Location:");
    console.log("Latitude:", officeLocation.lat);
    console.log("Longitude:", officeLocation.lng);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = initMap;
    document.body.appendChild(script);

    return () => {
      // Clean up the script tag when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="map-ref" ref={mapRef}></div>
    </div>
  );
}

export default Map;
