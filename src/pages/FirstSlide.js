import React from 'react';
import InfoBox from '../components/InfoBox.js';
import { useSelector } from 'react-redux';

export default function FirstSlide() {
    const title = useSelector((state) => state.contentReducer.firstPage.title);
    const infos = useSelector((state) => state.contentReducer.firstPage.cardsArr);
    const background = useSelector((state) => state.contentReducer.firstPage.background);
    // from '../images/slide-1-background.png';

    // <div id="firstSlide" className='firstSlide content-slide' style={{backgroundImage: `url(/static/media/slide1-background.03aff0f7.png);`}}>
    return (
        <div id="firstSlide" className='firstSlide content-slide' style={{backgroundImage: `url(${require(`../images/${background}`)}`}}>
            <h1>{title}</h1>
            <div className="box-contents">
            {
                infos.map((item, index) => {
                    return (<InfoBox key={index} image={item.image} text={item.text} title={item.title} timer={(index + 1) * 100} />)
                })
            }
            </div>
        </div>
    );
}
