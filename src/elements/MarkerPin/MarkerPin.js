import React from 'react';

const MarkerPin = ({ children, label, color }) => {
  return (
    <div className="marker" >
      <span className="marker-pin-point" style={color ? { backgroundColor: color } : {}}><b>{label}</b></span>
      {children}
    </div>
  )
}
export default MarkerPin;

// {isNewMarker ? (
//   <div className="marker-form-container">
//     <MarkerForm onSubmit={onSave} onCancel={onCancel} marker={marker} />
//   </div>
