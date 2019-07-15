import React, { Component } from "react"
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {}

  // login = async (e) => {
  //   e.preventDefault()
  //   const url = process.env.REACT_APP_API_URL
  //   try {
  //     const response =  await axios.post(`${url}/auth/login`, this.state)
  //     const token = response.data.token
  //     localStorage.setItem("token", token)
  //   } catch (err) {
  //     this.setState({
  //       errorMessage: `Wrong credential ${err.message}`
  //     })
  //   }
  // }
  
  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    this.props.login(this.state)
  }

  logout = () => {
    localStorage.removeItem("token")
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
          <button onClick={this.logout}>Logout</button>
          {this.state.errorMessage && <h1>{this.state.errorMessage}</h1>}
        </>
      )
    }
  }
}

export default Login
