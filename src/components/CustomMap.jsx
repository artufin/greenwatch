import React, { useState } from 'react';
import mapImage from '../assets/map.png';
import GreenMarker from './GreenMarker';
import RedMarker from './RedMarker';
import TreeInfo from './TreeInfo';

const CustomMap = () => {
  const [selectedTree, setSelectedTree] = useState(null);

  const trees = [
    {
      id: 1,
      x: 820,
      y: 220,
      type: 'green',
      species: "Quillay",
      age: 65,
      datePlanted: "1959-03-15",
      lastMaintenance: "2024-03-20",
      alertState: "good",
      coordinates: { x: 820, y: 220 }
    },
    {
      id: 2,
      x: 950,
      y: 340,
      type: 'green',
      species: "Peumo",
      age: 55,
      datePlanted: "1969-06-20",
      lastMaintenance: "2024-02-15",
      alertState: "warning",
      coordinates: { x: 950, y: 340 }
    },
    {
      id: 3,
      x: 1080,
      y: 460,
      type: 'red',
      species: "Maitén",
      age: 45,
      datePlanted: "1979-03-10",
      lastMaintenance: "2024-01-05",
      alertState: "critical",
      coordinates: { x: 1080, y: 460 }
    },
    {
      id: 4,
      x: 890,
      y: 580,
      type: 'green',
      species: "Boldo",
      age: 50,
      datePlanted: "1974-12-25",
      lastMaintenance: "2024-04-10",
      alertState: "normal",
      coordinates: { x: 890, y: 580 }
    },
    {
      id: 5,
      x: 1150,
      y: 280,
      type: 'green',
      species: "Quillay",
      age: 70,
      datePlanted: "1954-09-30",
      lastMaintenance: "2024-02-20",
      alertState: "good",
      coordinates: { x: 1150, y: 280 }
    },
    {
      id: 6,
      x: 920,
      y: 420,
      type: 'red',
      species: "Peumo",
      age: 65,
      datePlanted: "1959-03-15",
      lastMaintenance: "2024-03-01",
      alertState: "warning",
      coordinates: { x: 920, y: 420 }
    },
    {
      id: 7,
      x: 1010,
      y: 650,
      type: 'green',
      species: "Maitén",
      age: 35,
      datePlanted: "1989-05-22",
      lastMaintenance: "2024-02-28",
      alertState: "good",
      coordinates: { x: 1010, y: 650 }
    },
    {
      id: 8,
      x: 1180,
      y: 380,
      type: 'red',
      species: "Boldo",
      age: 45,
      datePlanted: "1979-07-12",
      lastMaintenance: "2024-01-15",
      alertState: "critical",
      coordinates: { x: 1180, y: 380 }
    },
    {
      id: 9,
      x: 850,
      y: 720,
      type: 'green',
      species: "Quillay",
      age: 75,
      datePlanted: "1949-11-05",
      lastMaintenance: "2024-03-10",
      alertState: "good",
      coordinates: { x: 850, y: 720 }
    },
    {
      id: 10,
      x: 980,
      y: 300,
      type: 'red',
      species: "Peumo",
      age: 60,
      datePlanted: "1964-08-30",
      lastMaintenance: "2024-02-05",
      alertState: "warning",
      coordinates: { x: 980, y: 300 }
    },
    {
      id: 11,
      x: 1120,
      y: 540,
      type: 'green',
      species: "Maitén",
      age: 40,
      datePlanted: "1984-04-18",
      lastMaintenance: "2024-03-25",
      alertState: "normal",
      coordinates: { x: 1120, y: 540 }
    },
    {
      id: 12,
      x: 880,
      y: 480,
      type: 'green',
      species: "Boldo",
      age: 55,
      datePlanted: "1969-06-25",
      lastMaintenance: "2024-01-20",
      alertState: "good",
      coordinates: { x: 880, y: 480 }
    },
    {
      id: 13,
      x: 1050,
      y: 750,
      type: 'red',
      species: "Quillay",
      age: 60,
      datePlanted: "1964-10-08",
      lastMaintenance: "2024-02-12",
      alertState: "critical",
      coordinates: { x: 1050, y: 750 }
    },
    {
      id: 14,
      x: 940,
      y: 260,
      type: 'green',
      species: "Peumo",
      age: 52,
      datePlanted: "1972-12-03",
      lastMaintenance: "2024-03-15",
      alertState: "good",
      coordinates: { x: 940, y: 260 }
    },
    {
      id: 15,
      x: 1090,
      y: 620,
      type: 'red',
      species: "Maitén",
      age: 50,
      datePlanted: "1974-02-28",
      lastMaintenance: "2024-03-05",
      alertState: "warning",
      coordinates: { x: 1090, y: 620 }
    },
    {
      id: 16,
      x: 810,
      y: 400,
      type: 'green',
      species: "Boldo",
      age: 48,
      datePlanted: "1976-08-12",
      lastMaintenance: "2024-03-18",
      alertState: "normal",
      coordinates: { x: 810, y: 400 }
    },
    {
      id: 17,
      x: 1200,
      y: 500,
      type: 'red',
      species: "Quillay",
      age: 55,
      datePlanted: "1969-05-20",
      lastMaintenance: "2024-02-25",
      alertState: "critical",
      coordinates: { x: 1200, y: 500 }
    },
    {
      id: 18,
      x: 900,
      y: 680,
      type: 'green',
      species: "Peumo",
      age: 58,
      datePlanted: "1966-09-15",
      lastMaintenance: "2024-01-30",
      alertState: "warning",
      coordinates: { x: 900, y: 680 }
    },
    {
      id: 19,
      x: 1030,
      y: 360,
      type: 'green',
      species: "Maitén",
      age: 42,
      datePlanted: "1982-07-22",
      lastMaintenance: "2024-02-08",
      alertState: "good",
      coordinates: { x: 1030, y: 360 }
    },
    {
      id: 20,
      x: 970,
      y: 800,
      type: 'red',
      species: "Boldo",
      age: 52,
      datePlanted: "1972-11-10",
      lastMaintenance: "2024-03-22",
      alertState: "normal",
      coordinates: { x: 970, y: 800 }
    }
  ];

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      paddingBottom: '56.25%', // 16:9 aspect ratio
      overflow: 'hidden'
    }}>
      <img 
        src={mapImage} 
        alt="Map" 
        style={{ 
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      
      {trees.map(tree => (
        tree.type === 'green' ? (
          <GreenMarker
            key={tree.id}
            x={tree.x}
            y={tree.y}
            onClick={() => setSelectedTree(tree)}
          />
        ) : (
          <RedMarker
            key={tree.id}
            x={tree.x}
            y={tree.y}
            onClick={() => setSelectedTree(tree)}
          />
        )
      ))}

      {selectedTree && (
        <TreeInfo
          tree={selectedTree}
          onClose={() => setSelectedTree(null)}
        />
      )}
    </div>
  );
};

export default CustomMap;