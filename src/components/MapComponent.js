import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAT4kHt2HK_79T905kN9FgqsT-7WB3F-OU'
})(MapComponent);

// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// const MapComponent = withScriptjs(withGoogleMap(props =>
//     <GoogleMap defaultZoom={16} defaultCenter={{ lat: 42.6812, lng: 23.3240 }}>
//         <Marker position={{ lat: 42.6812, lng: 23.3240 }} />
//     </GoogleMap>
// ));


function MapComponent (props) {
    return (
        <Map
        google={props.google}
        zoom={16}
        style={{ width: '100%', height: '100%', }}
        initialCenter={{ lat: 42.6812, lng: 23.3240 }}
      >
        <Marker position={{ lat: 42.6812, lng: 23.3240 }} />
      </Map>
    )
};
