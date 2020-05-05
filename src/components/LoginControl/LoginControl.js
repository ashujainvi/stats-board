import React from "react";
import { Link, withRouter } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { setAuth } from "redux/actions/userActions";

class LoginControl extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("FBTokenId");
    this.props.setAuth(false);
    this.props.history.push("/");
  };
  render() {
    const isLoggedIn = this.props.user.isAuth;
    let button;
    if (!isLoggedIn) {
      button = (
        <Link to="/login">
          <button className="button button-primary">Login</button>
        </Link>
      );
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
