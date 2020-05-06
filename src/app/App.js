// React stuff
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { setAuth } from "app/redux/actions/userActions";
// components
import Header from "app/shared/components/Header/Header";
// Pages
import Home from "app/pages/Home/Home";
import Login from "app/pages/Login/Login";
import Signup from "app/pages/Signup/Signup";
import Dashboard from "app/pages/Dashboard/Dashboard";
// services
import { isUserAuthenticated } from "app/shared/services/utils";

class App extends React.Component {
  componentDidMount() {
    this.props.setAuth(isUserAuthenticated());
  }
  render() {
    return (
      <Router>
        {this.props.user.isAuth ? null : <Header />}
        <Switch>
          <Route exact path="/">
            {this.props.user.isAuth ? <Redirect to="/dashboard" /> : <Home />}
          </Route>
          <Route path="/login">
            {this.props.user.isAuth ? <Redirect to="/dashboard" /> : <Login />}
          </Route>
          <Route path="/signup">
            {this.props.user.isAuth ? <Redirect to="/dashboard" /> : <Signup />}
          </Route>
          <Route path="/dashboard">
            {!this.props.user.isAuth ? <Redirect to="/login" /> : <Dashboard />}
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapActionsToProps = {
  setAuth,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
