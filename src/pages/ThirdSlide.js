import React from 'react';
import { useSelector } from "react-redux";

import InfoBox from '../components/InfoBox.js';
import {Container} from 'react-bootstrap';


export default function ThirdSlide() {
    const infos = useSelector((state) => state.contentReducer.tirthPage.cardsArr);
    const menu = useSelector((state) => state.contentReducer.menus.menuTwo);

    return (
        <div id="services" className="thirdSlide content-slide" >
          <Container>
                <h2>{menu}</h2>
                <div className="box-contents">
                {
                     infos.map((item, index) => {
                         return (<InfoBox key={index} image={item.image} text={item.text}  timer={(index + 1) * 100}/>)
                    })
                 }
               </div>
          </Container>
        </div>
    );
};
