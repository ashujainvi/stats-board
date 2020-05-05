import React from "react";
import { Link, NavLink } from "react-router-dom";
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
          <NavLink
            to="/dashboard/overview"
            className="nav-item"
            activeClassName="nav-item-active"
          >
            Overview
          </NavLink>
          <NavLink
            to="/dashboard/analytics"
            className="nav-item"
            activeClassName="nav-item-active"
          >
            Analytics
          </NavLink>
          <NavLink
            to="/dashboard/pagespeed"
            className="nav-item"
            activeClassName="nav-item-active"
          >
            Page Speed
          </NavLink>
        </div>
        <LoginControl />
      </nav>
    );
  }
}

export default SideNav;
