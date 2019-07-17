import React, { Component } from "react"
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {}
  
  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleLogin = e => {
    e.preventDefault()
    this.props.login(this.state)
  }

  render() {
    if (this.props.authentication) {
      return <Redirect to="/" />
    } else {
      return (
        <>
          <form>
            <label>Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={this.handleInput}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleInput}
            />
            <input type="submit" value="Submit" onClick={this.handleLogin} />
          </form>
          {this.state.errorMessage && <h1>{this.state.errorMessage}</h1>}
        </>
      )
    }
  }
}

export default Login
