import React from 'react';
import { useSelector } from "react-redux";

import InfoBox from '../components/InfoBox.js';
import {Container} from 'react-bootstrap';


export default function ThirdSlide() {
        const infos = useSelector((state) => state.contentReducer.thirdPage.infosArr);

    return (
        <div id="services" className="thirdSlide content-slide" >
          <Container>
            <h2>УСЛУГИ</h2>
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

}

// const InfosArr = [{
//     image: 'Accounting _icon1.png',
//     text: 'Счетоводно обслужване'
// }, {
//     image: 'Accounting _icon2.png',
//     text: 'Изготвяне на заплати'
// }, {
//     image: 'Accounting _icon3.png',
//     text: 'Управленска отчетност и бюджети'
// }, {
//     image: 'Accounting _icon4.png',
//     text: 'Финансов и данъчен анализ'
// }, {
//     image: 'Accounting _icon5.png',
//     text: 'Управление на активи'
// }, {
//     image: 'Accounting _icon6.png',
//     text: 'Корпоративен растеж'
// }]
