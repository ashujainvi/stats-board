import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "assets/images/logo.svg";
import LoginControl from "components/LoginControl/LoginControl.js";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="stats board logo" />
        </Link>
        <LoginControl />
      </header>
    );
  }
}

export default Header;
