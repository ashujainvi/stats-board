import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import SidebarToggleButton from "../Sidebar/SidebarToggleButton/SidebarToggleButton";
import logo from "assets/images/logo.svg";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} className="app-logo" alt="stats board logo" />
      </Link>
      <div className="spacer"></div>

      <div className="nav-items"></div>
      <SidebarToggleButton click={props.sidenavToggleHandler} />
    </nav>
  );
};

export default Navbar;
