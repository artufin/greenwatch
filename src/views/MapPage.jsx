import React, { useState } from "react";
import CustomMap from "../components/CustomMap";
import CustomMarker from "../components/RedMarker";
import InfoWindowContent from "../components/TreeInfo";

const pins = [
  { 
    id: 1, 
    x: 200,
    y: 150,
    info: "This is the first pin." 
  },

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