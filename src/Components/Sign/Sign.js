import './_Sign.scss';
import Speech from "react-speech";
import React from "react";

function Sign(props) {

    return (
        <div className="signs__item" key={props.title}>
            <div className="signs__item__inner">
                <h2>{props.title}</h2>
                <img src={props.image} alt={props.title} height='200'/>
                <Speech text={props.title} textAsButton />
            </div>
        </div>
    )

}

export default Sign;