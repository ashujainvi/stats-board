import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-container">
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
      </div>
    );
  }
}

export default Hero;
