import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
// components
import CircleCanvas from "app/shared/components/Canvas/CirclesCanvas/CircleCanvas";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-container">
        <CircleCanvas />
        <div className="hero-background"></div>
        <span className="hero-intro color-red">Introducing Statsboard</span>
        <h1>All your data available in one central hub</h1>
        <p>
          Our tool allows you to put all your data at your fingertips within a
          single central hub. Statsboard improves the quality of your data by
          harmonizing all datasets into a consistent format.
        </p>
        <Link to="/signup">
          <button className="button button-primary">Get Started</button>
        </Link>
        <a
          className="attribution font-muted"
          href="https://www.freepik.com/free-photos-vectors/Background"
        >
          Background vector created by brgfx - www.freepik.com
        </a>
      </div>
    );
  }
}

export default Hero;
