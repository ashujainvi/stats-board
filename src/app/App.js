import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./App.scss";
import Header from "components/Header/Header";

// Pages
import home from "pages/home/home";
import Login from "pages/login/login";
import Signup from "pages/signup/signup";
import Dashboard from "pages/dashboard/dashboard";

// auth
let authenticated;
const token = localStorage.FBTokenId;
if (token) {
  // decode token to get expiration time
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href("/login");
    authenticated = false;
  } else {
    authenticated = true;
  }
}
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header authenticated={authenticated} />
        <Switch>
          <Route exact path="/" component={home} />
          {/* // redirect to home page if already authenticated */}
          <Route path="/login">
            {authenticated ? <Redirect to="/dashboard" /> : <Login />}
          </Route>
          <Route path="/signup">
            {authenticated ? <Redirect to="/dashboard" /> : <Signup />}
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
