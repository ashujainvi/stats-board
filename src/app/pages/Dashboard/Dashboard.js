import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "./Dashboard.scss";
// components
import PageSpeed from "app/pages/Dashboard/PageSpeed/PageSpeed";
import SideNav from "app/pages/Dashboard/SideNav/SideNav";

class Dashboard extends React.Component {
  render() {
    // use dynamic path from 'withRouter' high order component props
    const { path } = this.props.match;
    return (
      <div className="dashboard">
        <SideNav />
        <Switch>
          <Route exact path={path}>
            {/* overview page is default view for dashboard */}
            <Redirect to={`${path}/overview`} />
          </Route>
          <Route path={`${path}/overview`}>
            <h1>overview</h1>
          </Route>
          <Route path={`${path}/analytics`}>
            <h1>I'm analytics</h1>
          </Route>
          <Route path={`${path}/pagespeed`}>
            <PageSpeed />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Dashboard);
