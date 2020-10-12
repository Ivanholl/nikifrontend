import React from 'react';
import {Container} from 'react-bootstrap';
import { useSelector } from "react-redux";
import parseHtml from 'html-react-parser';

export default function SecondSlide() {
    const small = useSelector((state) => state.contentReducer.secondPage.small);
    const main = useSelector((state) => state.contentReducer.secondPage.main);
    const content = useSelector((state) => state.contentReducer.secondPage.content);

    const menu = useSelector((state) => state.contentReducer.menus.menuOne);
    const background = useSelector((state) => state.contentReducer.secondPage.background);

    return (<div id="about" className="secondSlide content-slide"  style={{backgroundImage: `url(${require(`../images/${background}`)}`}}>
        <Container>
            <h2>
                {menu}
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
                <div className="right-side animated bounceInLeft">
                    {parseHtml(content || "")}
                </div>
            </div>
        </Container>
    </div>);

}
