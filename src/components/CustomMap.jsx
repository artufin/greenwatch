import React, { useState } from 'react';
import mapImage from '../assets/map.png';
import Marker from './Marker';
import TreeInfo from './TreeInfo';

const CustomMap = () => {
  const [selectedTree, setSelectedTree] = useState(null);

  const markers = [
    { id: 1, x: 200, y: 150, info: "Oak Tree - 100 years old" },
    { id: 2, x: 350, y: 250, info: "Pine Tree - 50 years old" },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <img 
        src={mapImage} 
        alt="Map" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      
      {markers.map(marker => (
        <Marker
          key={marker.id}
          x={marker.x}
          y={marker.y}
          onClick={() => setSelectedTree(marker)}
        />
      ))}

      {selectedTree && (
        <TreeInfo
          info={selectedTree.info}
          onClose={() => setSelectedTree(null)}
        />
      )}
    </div>
  );
};

export default CustomMap;