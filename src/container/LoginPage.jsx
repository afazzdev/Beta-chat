import React, { Component } from "react";
import InputLogin from "../components/InputLogin";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f8f8"
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/home" />;
    }
    return (
      <div className={this.style}>
        <InputLogin onSubmit={this.handleSubmit} onChange={this.handleChange} />
      </div>
    );
  }
}

export default LoginPage;
