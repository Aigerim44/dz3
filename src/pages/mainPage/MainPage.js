import React from 'react';
import Description from "../../components/description/Description";
import {findAllByDisplayValue} from "@testing-library/react";
import style from './main.module.css'

function MainPage  ()  {
    return (
        <div className={style.descriptionInMain}>
            <Description title={"Title"} description={'Description'}/>
        </div>
    )
}

export default MainPage;