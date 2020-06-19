import React, { useState} from 'react';
import InfoBox from '../components/InfoBox.js';

export default function FirstSlide() {
    const [infos] = useState(inforArr)

    return (
        <div id="firstSlide" className='firstSlide content-slide' >
                <h1>ВИНАГИ ДАВАЙ НА СВЕТА И ХОРАТА ОКОЛО ТЕБ НАЙ-ДОБРОТО, КОЕТО МОЖЕШ И ИМАШ...ВЪПРЕКИ ВСИЧКО!</h1>
                <div className="box-contents">
                {
                    infos.map((item, index) => {
                        return (<InfoBox key={index} image={item.image} text={item.text} timer={(index + 1) * 100} />)
                    })
                }
                </div>
        </div>
    );

}



const inforArr = [{
    image: 'Accounting _icon1.png',
    text: 'Счетоводно обслужване'
},{
    image: 'Accounting _icon2.png',
    text: 'Изготвяне на заплати'
},{
    image: 'Accounting _icon3.png',
    text: 'Управленска отчетност и бюджети'
},{
    image: 'Accounting _icon4.png',
    text: 'Финансов и данъчен анализ'
},{
    image: 'Accounting _icon5.png',
    text: 'Управление на активи'
},{
    image: 'Accounting _icon6.png',
    text: 'Корпоративен растеж'
}]
