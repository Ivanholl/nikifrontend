import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapComponent);

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
