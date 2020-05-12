import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Sidebar.scss";
import logo from "assets/images/logo.svg";
import LoginControl from "app/shared/components/LoginControl/LoginControl";

const Sidebar = ({ isActive }) => {
  let sidebarClasses = "sidebar";

  if (isActive) {
    sidebarClasses = "sidebar sidebar-active";
  }
  return (
    <nav className={sidebarClasses}>
      <Link to="/">
        <img src={logo} className="app-logo" alt="stats board logo" />
      </Link>

      <div className="nav-items">
        <NavLink
          to="/dashboard/overview"
          className="nav-item"
          activeClassName="nav-item-active"
        >
          <FontAwesomeIcon className="icon" icon="tachometer-alt" />
          Overview
        </NavLink>
        <NavLink
          to="/dashboard/analytics"
          className="nav-item"
          activeClassName="nav-item-active"
        >
          <FontAwesomeIcon className="icon" icon="chart-line" />
          Analytics
        </NavLink>
        <NavLink
          to="/dashboard/pagespeed"
          className="nav-item"
          activeClassName="nav-item-active"
        >
          <FontAwesomeIcon className="icon" icon="desktop" />
          Page Speed
        </NavLink>
      </div>
      <LoginControl />
    </nav>
  );
};

export default Sidebar;
