import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./dashboard.scss";
// components
import Login from "pages/login/login";
import PageSpeed from "pages/dashboard/page-speed/PageSpeed";
import SideNav from "components/SideNav/SideNav";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <SideNav />
        <Switch>
          <Route exact path="/dashboard">
            <Login />
          </Route>
          <Route path="/dashboard/analytics">
            <h1>I'm analytics</h1>
          </Route>
          <Route path="/dashboard/pagespeed">
            <PageSpeed />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
