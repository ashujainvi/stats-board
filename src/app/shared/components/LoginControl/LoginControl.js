import React from "react";
import { Link, withRouter } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { setAuth } from "app/redux/actions/userActions";

class LoginControl extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("FBTokenId");
    this.props.setAuth(false);
    this.props.history.push("/");
  };

  render() {
    const isLoggedIn = this.props.user.isAuth;
    const isUserOnLoginPage = this.props.location.pathname === "/login";
    let button;
    if (!isLoggedIn) {
      if (!isUserOnLoginPage) {
        button = (
          <Link to="/login">
            <button className="button button-primary">Login</button>
          </Link>
        );
      } else {
        button = (
          <Link to="/signup">
            <button className="button button-primary">Signup</button>
          </Link>
        );
      }
    } else {
      button = (
        <button className="button button-primary" onClick={this.handleLogout}>
          Logout
        </button>
      );
    }

    return button;
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

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(LoginControl));
