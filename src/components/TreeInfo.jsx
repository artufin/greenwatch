import React from 'react';
import PropTypes from 'prop-types';

const TreeInfo = ({ tree, onClose }) => {
  const getAlertColor = (alertState) => {
    switch (alertState) {
      case 'critical': return '#ff4444';
      case 'warning': return '#ffbb33';
      case 'good': return '#00C851';
      default: return '#2BBBAD';
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '25px',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      zIndex: 1000,
      width: '300px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        position: 'absolute',
        right: '15px',
        top: '15px',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: getAlertColor(tree.alertState)
      }} />
      <button 
        onClick={onClose}
        style={{ 
          position: 'absolute',
          right: '15px',
          top: '40px',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          fontSize: '20px'
        }}
      >
        ×
      </button>

      <h2 style={{ 
        margin: '0 0 20px 0',
        color: '#2c3e50',
        fontSize: '1.5em'
      }}>
        {tree.species}
      </h2>

      <div style={{ marginBottom: '10px' }}>
        {Object.entries({
          'Location': `${tree.coordinates.x}, ${tree.coordinates.y}`,
          'Age': `${tree.age} years`,
          'Planted': new Date(tree.datePlanted).toLocaleDateString(),
          'Last Maintenance': new Date(tree.lastMaintenance).toLocaleDateString(),
          'Status': tree.alertState.charAt(0).toUpperCase() + tree.alertState.slice(1)
        }).map(([label, value]) => (
          <div key={label} style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: '1px solid #eee'
          }}>
            <span style={{ color: '#7f8c8d', fontWeight: 'bold' }}>{label}:</span>
            <span style={{ color: '#2c3e50' }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

TreeInfo.propTypes = {
  tree: PropTypes.shape({
    species: PropTypes.string.isRequired,
    coordinates: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired,
    age: PropTypes.number.isRequired,
    datePlanted: PropTypes.string.isRequired,
    lastMaintenance: PropTypes.string.isRequired,
    alertState: PropTypes.oneOf(['critical', 'warning', 'good', 'normal']).isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired
};

export default TreeInfo;