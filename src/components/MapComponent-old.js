import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapComponent = withScriptjs(withGoogleMap(props =>
    <GoogleMap defaultZoom={16} defaultCenter={{ lat: 42.6812, lng: 23.3240 }}>
        <Marker position={{ lat: 42.6812, lng: 23.3240 }} />
    </GoogleMap>
));


export default MapComponent;
