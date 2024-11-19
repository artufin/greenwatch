const Marker = ({ x, y, onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 20,
      height: 20,
      backgroundColor: 'green',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      cursor: 'pointer',
    }}
  />
);

export default Marker;