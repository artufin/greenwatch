import React, { useState } from "react";
import CustomMap from "../components/CustomMap";
import CustomMarker from "../components/Marker";
import InfoWindowContent from "../components/TreeInfo";

const pins = [
  { 
    id: 1, 
    x: 200,  // pixel coordinates instead of lat/lng
    y: 150,
    info: "This is the first pin." 
  },
  // Add more pins as needed
];

function MapPage() {
  const [selectedPin, setSelectedPin] = useState(null);

  return (
    <CustomMap>
      {pins.map(pin => (
        <CustomMarker
          key={pin.id}
          pin={pin}
          onClick={setSelectedPin}
        />
      ))}
      
      {selectedPin && (
        <InfoWindowContent
          info={selectedPin.info}
          onClose={() => setSelectedPin(null)}
          style={{
            position: 'absolute',
            left: selectedPin.x,
            top: selectedPin.y,
          }}
        />
      )}
    </CustomMap>
  );
}

export default MapPage;