import React, { useCallback, useState } from 'react';
import{ Marker as GLMarker } from 'react-map-gl';

import { MarkerPin } from '../../elements';
import MarkerForm from './MarkerForm';

const Marker = ({ index, onSave, onCancel, ...props }) => {
  const  { latitude, longitude, type: {marker_color}, isNewMarker } = props.marker;
  
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
      <MarkerPin color = {marker_color || ''}>
        {isNewMarker ? (
          <div className="marker-form-container" onClick={e => e.stopPropagation()}>
            <MarkerForm onSubmit={onSave} onCancel={onCancel} marker={marker} onClick={e => e.stopPropagation()} />
          </div>
        ) : null}
      </MarkerPin>
    </GLMarker>
  )
};

export default Marker;
