import React from "react";
import { Link, NavLink } from "react-router-dom";
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
};

export default Sidebar;
