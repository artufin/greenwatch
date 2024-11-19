const TreeInfo = ({ info, onClose }) => (
  <div
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
    }}
  >
    <button 
      onClick={onClose}
      style={{ 
        position: 'absolute', 
        right: 10, 
        top: 10,
        border: 'none',
        background: 'none',
        cursor: 'pointer'
      }}
    >
      ×
    </button>
    <p>{info}</p>
  </div>
);

export default TreeInfo;