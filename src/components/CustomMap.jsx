import React, { useState } from 'react';
import mapImage from '../assets/map.png';
import GreenMarker from './GreenMarker';
import RedMarker from './RedMarker';
import TreeInfo from './TreeInfo';

const CustomMap = () => {
  const [selectedTree, setSelectedTree] = useState(null);

  const greenmarkers = [
    { id: 1, x: 200, y: 150, info: "Oak Tree - 100 years old" },
    { id: 2, x: 350, y: 250, info: "Pine Tree - 50 years old" },
    { id: 3, x: 500, y: 400, info: "Maple Tree - 75 years old" },
    { id: 4, x: 700, y: 300, info: "Birch Tree - 60 years old" },
    { id: 5, x: 900, y: 200, info: "Willow Tree - 80 years old" },
  ];

  const redmarkers = [
    { id: 6, x: 100, y: 300, info: "Cherry Tree - 70 years old" },
    { id: 7, x: 300, y: 400, info: "Apple Tree - 40 years old" },
    { id: 8, x: 600, y: 200, info: "Peach Tree - 30 years old" },
    { id: 9, x: 800, y: 400, info: "Plum Tree - 45 years old" },
    { id: 10, x: 1000, y: 300, info: "Pear Tree - 55 years old" },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <img 
        src={mapImage} 
        alt="Map" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      
      {greenmarkers.map(marker => (
        <GreenMarker
          key={marker.id}
          x={marker.x}
          y={marker.y}
          onClick={() => setSelectedTree(marker)}
        />
      ))}

      {redmarkers.map(marker => (
        <RedMarker
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