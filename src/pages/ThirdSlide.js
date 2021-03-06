﻿import React from 'react';
import { useSelector } from "react-redux";

import InfoBox from '../components/InfoBox.js';
import {Container} from 'react-bootstrap';


export default function ThirdSlide() {
    const infos = useSelector((state) => state.contentReducer.tirthPage.cardsArr);
    const menu = useSelector((state) => state.contentReducer.menus.menuTwo);
    const background = useSelector((state) => state.contentReducer.tirthPage.background);

    return (
        <div id="services" className="thirdSlide content-slide"  style={{backgroundImage: `url(${require(`../images/${background}`)}`}}>
          <Container>
                <h2>{menu}</h2>
                <div className="box-contents">
                {
                     infos.map((item, index) => {
                         return (<InfoBox key={index} image={item.image} text={item.text} title={item.title} timer={(index + 1) * 100} textInBottom={true}/>)
                    })
                 }
               </div>
          </Container>
        </div>
    );
};
