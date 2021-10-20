import React, { useCallback, useState } from 'react';
import{ Marker as GLMarker } from 'react-map-gl';

import MarkerForm from './MarkerForm';

const Marker = ({ index, marker: { latitude, longitude, isNewMarker }, onSave, onCancel }) => {
  const [marker, setMarker] = useState({
    latitude: latitude,
    longitude: longitude,
  });

  const onMarkerDragStart = useCallback(event => {
    // logEvents(_events => ({..._events, onDragStart: event.lngLat}));
  }, []);

  const onMarkerDrag = useCallback(event => {
    // logEvents(_events => ({..._events, onDrag: event.lngLat}));
  }, []);

  const onMarkerDragEnd = useCallback(event => {
    // logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    });
  }, []);

  return (
    <GLMarker
      longitude={marker.longitude}
      latitude={marker.latitude}
      offsetTop={-20}
      offsetLeft={-10}
      draggable
      onDragStart={onMarkerDragStart}
      onDrag={onMarkerDrag}
      onDragEnd={onMarkerDragEnd}
    >
      <div className="marker">
        <span className="marker-pin-point"><b>{index + 1}</b></span>
        {isNewMarker ? (
          <div className="marker-form-container" onClick={e => e.stopPropagation()}>
            <MarkerForm onSubmit={onSave} onCancel={onCancel} marker={marker} onClick={e => e.stopPropagation()} />
          </div>
        ) : null}
      </div>
    </GLMarker>
  )
};

export default Marker;
