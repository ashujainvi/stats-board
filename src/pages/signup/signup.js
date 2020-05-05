import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./signup.scss";
//components
import Canvas from "components/Canvas/Canvas";
import ErrorCard from "components/ErrorCard/ErrorCard";
//assets
import bgImage from "assets/images/login-background.jpg";
// services
import CommonHTTP from "services/common-http";

class Signup extends React.Component {
  http = new CommonHTTP();

  constructor() {
    super();
    this.state = {
      loading: false,
      email: "",
      password: "",
      confirmPassword: "",
      nickName: "",
      error: {},
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: {},
    });
  };

  handleSignup = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    // set user data for signup
    const userData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      nickName: this.state.nickName,
    };
    this.http
      .signup(userData)
      .then((res) => {
        if (Object.keys(res.data).includes("error")) {
          this.setState({ error: res.data, loading: false });
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
      <div className="signup-container">
        <div className="main-bg">
          <img src={bgImage} tabIndex="-1" alt="background" />
        </div>
        <Canvas />
        <form noValidate className="card login-form">
          <h2>Create an account</h2>
          <p>Note: Use unique nickname</p>
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
            id="nickName"
            name="nickName"
            type="text"
            placeholder="Nickname"
            value={this.state.nickName}
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
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          ></input>
          <button
            className="button button-primary"
            onClick={this.handleSignup}
            disabled={loading}
          >
            Sign up
          </button>
          <small>
            Dont have an account?
            <Link className="color-red" to="/login">
              Log in
            </Link>
          </small>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
