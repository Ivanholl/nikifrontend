import React, {useEffect, useState} from 'react';


import ContentModal from './ContentModal';


export default function InfoBox(props) {
    const [showBox, setShowBox] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
		setTimeout(function () {
			setShowBox(true);
		}, props.timer);
	});

    return (
        <>
        <div className={showBox ? 'animated bounceInLeft' : 'animatable'} onClick={() => setShowModal(!showModal)}>
            <div className="box">
                <img src={require(`../images/${props.image}`)} alt="decorative icon"/>
                {!props.textInBottom &&
                    <p>{props.title}</p>
                }
            </div>
            {props.textInBottom &&
                <p>{props.title}</p>
            }
        </div>
        <ContentModal show={showModal} setShow={setShowModal} text={props.text} title={props.title}/>
        </>
    )
}
