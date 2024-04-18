import React from 'react';
import Description from "../../components/description/Description";
import style from './about.module.css'

function AboutPage() {
    return (
        <div className={style.descriptionInAbout}>
            <Description title="Title 2" description="description 2"/>
        </div>
    );
}

export default AboutPage;