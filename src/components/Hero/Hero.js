import React from 'react';
import './Hero.css';
import Background from './../../img/1189627.png';

export default function Hero() {
    return (
        <div className="hero">
            <div className="heroBackground">
                <img src={Background} alt="Quentin de Andrade" className="heroImg" />
            </div>
            <div className="heroText">
                <h2 className="SubTitle">Front-End</h2>
                <h1 className="MainTitle">WEB DEVELOPER</h1>
                <p className="heroDescription">
                    ‟I design and code beautifully simple things, and I love what I do.”
                </p>
            </div>
        </div>
    );
}
