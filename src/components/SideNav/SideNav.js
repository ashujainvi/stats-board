import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.scss";
import logo from "assets/images/logo.svg";
import LoginControl from "components/LoginControl/LoginControl.js";

class SideNav extends React.Component {
  render() {
    return (
      <nav className="side-nav">
        <Link to="/">
          <img src={logo} className="app-logo" alt="stats board logo" />
        </Link>

        <div className="nav-item-container">
          <Link to="/dashboard" className="nav-item">
            Overview
          </Link>
          <Link to="/dashboard/analytics" className="nav-item">
            Analytics
          </Link>
          <Link to="/dashboard/pagespeed" className="nav-item">
            Page Speed
          </Link>
        </div>
        <LoginControl />
      </nav>
    );
  }
}

export default SideNav;
