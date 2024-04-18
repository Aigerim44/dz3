import React from 'react';
import MainPage from "../../pages/mainPage/MainPage";

function Description(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
        </div>
    );
}

export default Description;