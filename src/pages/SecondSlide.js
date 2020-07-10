import React from 'react';
import {Container} from 'react-bootstrap';
import { useSelector } from "react-redux";

export default function SecondSlide() {
    const small = useSelector((state) => state.contentReducer.secondPage.small);
    const main = useSelector((state) => state.contentReducer.secondPage.main);
    const Bold = useSelector((state) => state.contentReducer.secondPage.Bold);
    const First = useSelector((state) => state.contentReducer.secondPage.First);
    const Second = useSelector((state) => state.contentReducer.secondPage.Second);
    const Tirth = useSelector((state) => state.contentReducer.secondPage.Tirth);
    const menu = useSelector((state) => state.contentReducer.menus.menuOne);
    const background = useSelector((state) => state.contentReducer.secondPage.background); 
    
    return (<div id="about" className="secondSlide content-slide"  style={{backgroundImage: `url(${require(`../images/${background}`)}`}}>
        <Container>
            <h2>
                {menu}
                {/* <span> НАС</span> */}
            </h2>
        </Container>
        <Container className="second-container">
            <div className="about-text">
                <div className="left-side animated bounceInRight">
                    <p>
                        {small}
                        <span>{main}</span>
                    </p>
                </div>
                <div className={`right-side animated bounceInLeft  `}>
                    <p>
                        <strong>{Bold}</strong>
                        {First}</p>
                    <p>{Second}</p>
                    <p>{Tirth}</p>
                </div>
            </div>
        </Container>
    </div>);

}
