import React from 'react';
import BackToTop from "react-back-to-top-button";
import BackToTopBtnImg from '../images/back-to-top-btn.png';

export default function BackToTopBtn(props) {
    function handleClick() {
        props.setBoxToShow(0)
    }
    return (
        <BackToTop
            showOnScrollUp={false}
            showAt={700}
            speed={1200}
            easing="easeInOutQuint"
            onClick={() => handleClick()}
        >
            <img src={BackToTopBtnImg} alt="back to top"/>
        </BackToTop>
    )
}
