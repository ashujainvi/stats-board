import React from 'react';
import './Hero.scss';
import Canvas from 'components/Canvas/Canvas';

class Hero extends React.Component {
    render() {
        return (
            <div className="hero-container">
                <Canvas/>
                <h1>All your data available in one central hub</h1>
                <p>Our tool allows you to put all your data at your fingertips within a single central hub.   
                     <span className="color-blue">Stats Board</span> improves the quality of your data by harmonizing all datasets into a consistent format.
                </p>
                <button className="button button-primary">Get Started</button>
            </div>
        )
    }
}

export default Hero;