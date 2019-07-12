// This login form is used for only admin account

import React, { Component } from "react";
import axios from "axios";


class Login extends Component {
  state = {};

  authenticate = e => {
    e.preventDefault();
    // want to send the state value to back-end
    const url = process.env.REACT_APP_API_URL;
    axios
      .post(`${url}/auth/login`, this.state)
      .then(response => {
        console.log(response);
        const token = response.data.token;
        console.log(token);
        localStorage.setItem("token", token);
      })
      .catch(err => {
        this.setState({
          errorMessage: `Wrong credential ${err.message}`
        });
      });
  };

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  };

  logout = () => {
    localStorage.removeItem("token");
  };

  render() {
    return (
      <>
        <form>
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={this.handleInput}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleInput}
          />
          <input type="submit" value="Submit" onClick={this.authenticate} />
        </form>
        <button onClick={this.logout}>Logout</button>
        {this.state.errorMessage && <h1>{this.state.errorMessage}</h1>}
      </>
    );
  }
}

export default Login;
