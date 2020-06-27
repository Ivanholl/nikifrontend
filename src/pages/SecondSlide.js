import React from 'react';
import {Container} from 'react-bootstrap';
import { useSelector } from "react-redux";

export default function SecondSlide() {
    const title = useSelector((state) => state.contentReducer.secondPage.title);
    const article = useSelector((state) => state.contentReducer.secondPage.article);
    
    return (<div id="about" className="secondSlide content-slide">
        <Container>
            <h2>ЗА
                <span> НАС</span>
            </h2>
        </Container>
        <Container className="second-container">
            <div className="about-text">
                <div className="left-side animated bounceInRight">
                    <p>
                        {title.small}
                        <span>{title.main}</span>
                    </p>
                </div>
                <div className={`right-side animated bounceInLeft  `}>
                    <p>
                        <strong>{article.Bold}</strong>
                        {article.First}</p>
                    <p>{article.Second}</p>
                    <p>{article.Tirth}</p>
                </div>
            </div>
        </Container>
    </div>);

}
