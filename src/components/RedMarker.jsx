import React from 'react';

const RedMarker = ({ x, y, onClick }) => {
  const calculatePosition = () => {
    const container = document.querySelector('img[alt="Map"]');
    
    const percentX = (x / 1920) * 100; // assuming 1920 is your base width
    const percentY = (y / 1080) * 100; // assuming 1080 is your base height

    return {
      left: `${percentX}%`,
      top: `${percentY}%`
    };
  };

  return (
    <img
      src={"https://www.svgrepo.com/show/362123/map-marker.svg"}
      alt="Tree marker"
      onClick={onClick}
      style={{
        position: 'absolute',
        ...calculatePosition(),
        width: '50px',
        height: '42px',
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translate(-50%, -50%) scale(1.1)',
        }
      }}
    />
  );
};

export default RedMarker;
