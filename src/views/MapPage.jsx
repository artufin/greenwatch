import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow  } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: -33.42961549886816,
  lng: -70.61107393685293,
};

const pins = [
    {id: 1, lat: -33.42961549886816, lng: -70.61107393685293}
];

const mapStyle = [
  { featureType: "all", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
];

function MapPage() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA8Tp4yGfL9J1CxM6sDDDeWckUuRR9wmnw",
  });

  const [selectedPin, setSelectedPin] = useState(null);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={{ 
        styles: mapStyle,
        mapTypeControl: false,
        streetViewControl: false}}
    >
      {/* Render Markers */}
      
      {/* Render InfoWindow for the selected pin */}
      
    </GoogleMap>
  );
}

export default React.memo(MapPage);