import React from 'react';
import {Container} from 'react-bootstrap';
import { useSelector } from "react-redux";

export default function FourthSlide() {
    const menu = useSelector((state) => state.contentReducer.menus.menuThree);
    const content = useSelector((state) => state.contentReducer.fourthPaga);

    return (
        <div id="jobs" className="fourthSlide content-slide animated bounceIn" >
            <Container>
                <h2>{menu}</h2>
                <p>{content.partOne} <a href={content.link}>{content.linkText}</a> <a href="#contacts">{content.partTwo} </a></p>
            </Container>
        </div>
    );
}
