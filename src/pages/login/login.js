import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./login.scss";
//components
import Canvas from "components/Canvas/Canvas";
import ErrorCard from "components/ErrorCard/ErrorCard";
//assets
import bgImage from "assets/images/login-background.jpg";
// services
import CommonHTTP from "services/common-http";
class Login extends React.Component {
  http = new CommonHTTP();

  constructor() {
    super();
    this.state = {
      loading: false,
      email: "",
      password: "",
      error: {},
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: {},
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    // set user data for login
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.http
      .login(userData)
      .then((res) => {
        console.log(res);
        if (Object.keys(res.data).includes("error")) {
          this.setState({
            error: res.data,
            loading: false,
          });
        } else {
          localStorage.setItem("FBTokenId", `Bearer ${res.data.token}`);
          this.props.history.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false,
          error: err,
        });
      });
  };
  render() {
    const { loading, error } = this.state;
    return (
      <div className="login-container">
        <div className="main-bg">
          <img src={bgImage} tabIndex="-1" alt="background" />
        </div>
        <Canvas />
        <form noValidate className="card login-form">
          <h2>Login to you account!</h2>
          <p>Use your email to login</p>
          {error.error ? <ErrorCard error={error} /> : null}
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          ></input>
          <button
            className="button button-primary"
            onClick={this.handleLogin}
            disabled={loading}
          >
            {loading ? "Loggin in" : "Log in"}
          </button>
          <small>
            Dont have an account?
            <Link className="color-blue" to="/signup">
              Sign Up
            </Link>
          </small>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
