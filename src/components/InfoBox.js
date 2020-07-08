import React, {useEffect, useState} from 'react';


export default function InfoBox(props) {
    const [showBox, setShowBox] = useState(false)

    useEffect(() => {
		setTimeout(function () {
			setShowBox(true);
		}, props.timer);
	});

    return (
        <div className={showBox ? 'animated bounceInLeft' : 'animatable'}>
            <div className="box">
                <img src={require(`../images/${props.image}`)} alt="decorative icon"/>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
