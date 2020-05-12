import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "./Dashboard.scss";
// components
import Sidebar from "app/pages/Dashboard/Sidebar/Sidebar";
import Navbar from "app/pages/Dashboard/Navbar/Navbar";
import Analytics from "app/pages/Dashboard/Analytics/Analytics";
import Overview from "app/pages/Dashboard/Overview/Overview";
import PageSpeed from "app/pages/Dashboard/PageSpeed/PageSpeed";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarActive: false,
    };
  }

  sidenavToggleHandler = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return { isSidebarActive: !prevState.isSidebarActive };
    });
  };
  render() {
    // use dynamic path from 'withRouter' high order component props
    const { path } = this.props.match;
    return (
      <div className="dashboard">
        <Sidebar isActive={this.state.isSidebarActive} />
        <div className="dashboard-body">
          <Navbar sidenavToggleHandler={this.sidenavToggleHandler} />
          <Switch>
            <Route exact path={path}>
              {/* overview page is default view for dashboard */}
              <Redirect to={`${path}/overview`} />
            </Route>
            <Route exact path={`${path}/overview`}>
              <Overview />
            </Route>
            <Route exact path={`${path}/analytics`}>
              <Analytics />
            </Route>
            <Route exact path={`${path}/pagespeed`}>
              <PageSpeed />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
