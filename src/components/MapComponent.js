import React from 'react';
import { useSelector } from "react-redux";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapComponent);

function MapComponent (props) {
    const lat = useSelector((state) => Number(state.contentReducer.fifthPage.mapCoordinatesLat));
    const lng = useSelector((state) => Number(state.contentReducer.fifthPage.mapCoordinatesLong));
    
    return (
        <Map
            google={props.google}
            zoom={16}
            style={{ width: '100%', height: '100%', }}
            initialCenter={{ lat, lng }}
        >
            <Marker position={{ lat, lng }} />
      </Map>
    )
};
