import React, { useCallback, useState } from 'react';
import{ Marker as GLMarker, Popup } from 'react-map-gl';
import DeleteIcon from '@mui/icons-material/Delete';

import { MarkerPin } from '../../elements';
import MarkerForm from './MarkerForm';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, IconButton } from '@mui/material';

const Marker = ({ index, onSave, onCancel, onDelete, ...props }) => {
  const  { latitude, longitude, type, isNewMarker, name } = props.marker;
  
console.log(props)

  const [marker, setMarker] = useState({
    latitude: latitude,
    longitude: longitude,
  });

  console.log(type)
  const { marker_color, label, description } = type ?? {};

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

  const [selectedMarker, setSelectedMarker] = useState(null);

  async function deleteMarker(){
    console.log(props.marker._id)

    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
    };
    const response = await fetch(`http://localhost:3000/marker/${props.marker._id}`, requestOptions);
    window.location.reload(false);


  }

  const handleDelete= (values) => {
    console.log(values);
    deleteMarker();
  }

  const handleEdit = (values)=>{
    console.log(values);
  }

  return (
    <div>
    <GLMarker
      longitude={marker.longitude}
      latitude={marker.latitude}
      offsetTop={-20}
      offsetLeft={-10}
      draggable
      onDragStart={onMarkerDragStart}
      onDrag={onMarkerDrag}
      onDragEnd={onMarkerDragEnd}
      onClick = {(e) => {
        e.preventDefault();
        setSelectedMarker(marker);
      }}
    >
      <MarkerPin color = {marker_color || ''}>
        {isNewMarker ? (
          <div className="marker-form-container" onClick={e => e.stopPropagation()}>
            <MarkerForm onSubmit={onSave} onCancel={onCancel} marker={marker} onClick={e => e.stopPropagation()} />
          </div>
        ) : null}
      </MarkerPin>

    </GLMarker>
   
      {selectedMarker ? (
          <Popup 
          tipSize={5}
          anchor="top"
          latitude = {marker.latitude} 
          longitude = {marker.longitude} 
          onClose = { () => {
            setSelectedMarker(null);
          }}>
            <div>
              <IconButton>
                <DeleteOutlined color="primary" onClick={handleDelete}/>
              </IconButton>
              
              <IconButton>
                <EditOutlined color="primary" onClick={handleEdit}/>
              </IconButton>

            </div>
            <div>
              <h2>{name}</h2>
              <h3>{label}</h3>
              <p>{description}</p>
            </div>
          </Popup>
        ) : null}

    </div>
  )
};

export default Marker;
