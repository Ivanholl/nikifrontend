import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import ContactForm from '../components/ContactForm';
import MapComponent from '../components/MapComponent';

export default function FifthSlide(props) {
    const [adress] = useState(dummyAdress)

    return (
        <Container id="contacts" className="fifthSlide content-slide">
            <div className="contact-title">
                <h2>КОНТАКТИ</h2>
            </div>
            <div className="contact-info">
                <div className="contact-map">
                        <div className="left-side ">
                            <div className="adress">
                                <p>{`${adress.city} ${adress.zip}`}</p>
                                <p>{`${adress.str} ${adress.number}`}</p>
                                <p>{`${adress.building} ${adress.floor}`}</p>
                            </div>
                            <div className="phones">
                                <h3>{"\u00a0"}</h3>
                                <p>{adress.phoneOne}</p>
                                <p>{adress.phoneTwo}</p>
                                <p>{adress.phoneThree}</p>
                            </div>
                        </div>
                    <div className="map-component">
                    <p>ПОКАЖИ НА КАРТАТА</p>
                    <MapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%`, width: '100%' }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        />
                        </div>
                    </div>
                    <div className="right-side">
                        <ContactForm />
                    </div>
            </div>
        </Container >
    );
}

const dummyAdress = {
    city: 'София',
    zip: 1421,
    str: 'ул. Крум Попов',
    number: 44,
    building: '',
    floor: 'етаж 1',
    phoneOne: '+359 2 963 08 81',
    phoneTwo: '+359 896 720 616',
    phoneThree: '',
}
