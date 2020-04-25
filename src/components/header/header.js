import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "assets/images/stats-board-logo.svg";
import LoginButton from "components/LoginButton/LoginButton.js";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="stats board logo" />
          <h3 to="/">Stats Board</h3>
        </Link>
        <LoginButton authenticated={this.props.authenticated} />
      </header>
    );
  }
}

export default Header;
