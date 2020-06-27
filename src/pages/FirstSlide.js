import React from 'react';
import InfoBox from '../components/InfoBox.js';
import { useSelector } from 'react-redux';

export default function FirstSlide() {
    const title = useSelector((state) => state.contentReducer.firstPage.title);
    const infos = useSelector((state) => state.contentReducer.firstPage.inforArr);

    return (
        <div id="firstSlide" className='firstSlide content-slide' >
            <h1>{title}</h1>
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