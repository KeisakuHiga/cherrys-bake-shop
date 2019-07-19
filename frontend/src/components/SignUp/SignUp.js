import React, { Component } from "react"
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
  state = {}

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSignUp = e => {
    e.preventDefault()
    this.props.register(this.state)
  }

  render() {
    if (this.props.authentication) {
      return <Redirect to="/" />
    } else {
      return (
        <>
          <form>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={this.handleInput}
            />
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={this.handleInput}
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={this.handleInput}
            />
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              onChange={this.handleInput}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleInput}
            />
            <input type="submit" value="Sign Up" onClick={this.handleSignUp} />
          </form>
          {this.props.errorMessage && <h1>{this.props.errorMessage}</h1>}
        </>
      )
    }
  }
}

export default SignUp
