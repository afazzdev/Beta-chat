import React, { Component } from "react";
import InputSignUp from "../components/InputSignUp";

class RegisterPage extends Component {
  state = {};

  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    phoneNumber: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className="container-login">
        <InputSignUp
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default RegisterPage;
