import React from 'react';
import {Container} from 'react-bootstrap';
import { useSelector } from "react-redux";
import parseHtml from 'html-react-parser';

export default function FourthSlide() {
    const menu = useSelector((state) => state.contentReducer.menus.menuThree);
    const content = useSelector((state) => state.contentReducer.fourthPaga);
    const background = useSelector((state) => state.contentReducer.fourthPaga.background);

    return (
        <div id="jobs" className="fourthSlide content-slide animated bounceIn" style={{backgroundImage: `url(${require(`../images/${background}`)}`}} >
            <Container>
                <h2>{menu}</h2>
                {/*}<p>{content.partOne} <a href={content.link}>{content.linkText}</a> <a href="#contacts">{content.partTwo} </a></p>*/}

                {parseHtml(content.text || "")}
            </Container>
        </div>
    );
}
