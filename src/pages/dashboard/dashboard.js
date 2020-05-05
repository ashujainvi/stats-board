import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "./dashboard.scss";
// components
import PageSpeed from "pages/dashboard/page-speed/PageSpeed";
import SideNav from "components/SideNav/SideNav";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { path } = this.props.match;
    return (
      <div className="dashboard">
        <SideNav />
        <Switch>
          <Route exact path={path}>
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
