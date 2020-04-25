import React from "react";
import { Link, withRouter } from "react-router-dom";

class LoginButton extends React.Component {
  handleLogout = (event) => {
    localStorage.removeItem("FBTokenId");
    this.props.history.push("/");
  };
  render() {
    if (!this.props.authenticated) {
      return (
        <Link to="/login">
          <button className="button button-primary">Login</button>
        </Link>
      );
    } else {
      return (
        <button className="button button-secondary" onClick={this.handleLogout}>
          Logout
        </button>
      );
    }
  }
}

export default withRouter(LoginButton);
