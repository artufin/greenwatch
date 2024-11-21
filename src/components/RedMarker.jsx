import React from 'react';

const RedMarker = ({ x, y, onClick}) => (
  <img
    src={"https://www.svgrepo.com/show/362123/map-marker.svg"}
    alt="Tree marker"
    onClick={onClick}
    style={{
      position: 'absolute',
      left: x,
      top: y,
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

export default RedMarker;
