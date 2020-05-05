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
import { setAuth } from "redux/actions/userActions";
// components
import Header from "components/Header/Header";
// Pages
import Home from "pages/home/home";
import Login from "pages/login/login";
import Signup from "pages/signup/signup";
import Dashboard from "pages/dashboard/dashboard";
// services
import { isUserAuthenticated } from "services/utils";

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
