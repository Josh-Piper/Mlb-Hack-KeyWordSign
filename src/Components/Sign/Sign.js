import './_Sign.scss';
import Speech from "react-speech";
import React from "react";

function Sign(props) {

    return (
        <div className="sign" key={props.title}>
            <div className="sign__inner">
                <h2>{props.title}</h2>
                <img src={props.image} alt={props.title} height='200'/>
                <Speech text={props.title} textAsButton />
            </div>
        </div>
    )

}

export default Sign;