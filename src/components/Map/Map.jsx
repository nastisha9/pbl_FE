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
  const { items: markers } = useSelector(getMarkers);
  // console.log(storeMarkers);

  useEffect(() => {
    dispatch(getMarkersRequest());
  }, [dispatch]);

  const [viewport, setViewport] = useState({
    latitude: 47.0202,
    longitude: 28.8387,
    zoom: 15.40,
    bearing: 0,
    pitch: 0
  });

  // const [markers, setMarkers] = useState([]);
  const [isMarkerCreationAvailable, setMarketCreation] = useState(false);

  const [marker, setMarker] = useState(null);

  const onViewPortChange = (newViewport) => {
    setViewport(newViewport);
  };

  const onSelected = (viewport, item) => {
    onViewPortChange(viewport);

    setMarker({
      name: item.place_name,
      longitude: item.center[0],
      latitude: item.center[1]
    })
  }

  const onSaveMarker = (marker) => {
    dispatch(createMarkerRequest(marker));
    setMarker(null);
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
        onChange={setMarketCreation}
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
        {markers.map((marker, index) => (
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
