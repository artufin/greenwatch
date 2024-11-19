import React from 'react';

const GreenMarker = ({ x, y, onClick}) => (
  <img
    src={"https://upload.wikimedia.org/wikipedia/commons/f/fb/Map_pin_icon_green.svg"}
    alt="Tree marker"
    onClick={onClick}
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: '30px',
      height: '40px',
      transform: 'translate(-50%, -50%)',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translate(-50%, -50%) scale(1.1)',
      }
    }}
  />
);

export default GreenMarker;
