import React from 'react';
import c from '../../assets/img/c-hero.png'
const Hero = () => {
    return (
        <div id='hero'>
            <div className="container">
                <div className="hero">
                    <img src={c} alt="img" />
                    <h1>Движение. Творчество. Рост.</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;