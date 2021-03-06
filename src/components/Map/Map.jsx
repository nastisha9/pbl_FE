import React, {useState, useEffect} from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';

import { getMarkers } from '../../selectors/map';
import { getMarkersRequest, createMarkerRequest } from '../../actions/map';
import MapControls from '../MapControls';
import Marker from '../Marker';

const mapAccess = {
    mapboxApiAccessToken: 'pk.eyJ1IjoidmFkaW1jaGVybmV2IiwiYSI6ImNrdWcydmhrdzIwM2UzMW1veHhtNDR5ZHIifQ.yhhaEjpTZwWywlgfBLHL4A'
}

const MAPBOX_TOKEN = 'pk.eyJ1IjoidmFkaW1jaGVybmV2IiwiYSI6ImNrdWcydmhrdzIwM2UzMW1veHhtNDR5ZHIifQ.yhhaEjpTZwWywlgfBLHL4A';

const queryParams = {
    country: 'md'
}

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const Map = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // console.log(storeMarkers);
   useEffect(() => {
    fetch("http://localhost:3000/marker/all")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const [viewport, setViewport] = useState({
    latitude: 47.0202,
    longitude: 28.8387,
    zoom: 15.40,
    bearing: 0,
    pitch: 0
  });

  // const [markers, setMarkers] = useState([]);
  const [isMarkerCreationAvailable, setMarkerCreation] = useState(false);

  const [marker, setMarker] = useState(null);

  const onViewPortChange = (newViewport) => {
    setViewport(newViewport);
  };

  const onSelected = (viewport, item) => {
    onViewPortChange(viewport);
    console.log(item)

    setMarker({
      id: item.id,
      name: item.place_name,
      longitude: item.center[0],
      latitude: item.center[1],
      type: {},
    })
    setMarker(null);
  }

  const onSaveMarker = (marker) => {
    console.log('HERE')
    console.log(marker);
    // (createMarkerRequest(marker));
    setMarker(null);
    setItems([...items, marker])
  }

  const onCancel = (e) => {
    setMarker(null);
  }

  const addMarker = (e) => {
    const [longitude, latitude] = e.lngLat;

    if (isMarkerCreationAvailable) {
      setMarker({
        longitude,
        latitude,
        isNewMarker: true,
        type: {},
      })
    }
  }

  return (
    <div className="map-container">
      <MapControls
        {...mapAccess}
        onSelected={onSelected}
        viewport={viewport}
        hideOnSelect={true}
        queryParams={queryParams}
        isMarkerCreationAvailable={isMarkerCreationAvailable}
        onChange={setMarkerCreation}
      />
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onClick={addMarker}
        onViewportChange={onViewPortChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {marker && <Marker marker={marker} onSave={onSaveMarker} onCancel={onCancel} />}
        {items.map((marker, index) => (
          <Marker index={index} marker={marker} onSave={onSaveMarker} />
        ))}
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
      </MapGL>
    </div>
  )
}

export default Map;
