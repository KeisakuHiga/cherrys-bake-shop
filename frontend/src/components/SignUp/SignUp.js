import React, { Component } from "react"
import axios from "axios"

class SignUp extends Component {
  state = {}

  register = async (e) => {
    e.preventDefault()
    const url = process.env.REACT_APP_API_URL
    try {
      const response =  await axios.post(`${url}/auth/register`, this.state)
      const token = response.data.token
      localStorage.setItem("token", token)
    } catch (err) {
      this.setState({
        errorMessage: `Error => ${err.message}`
      })
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  logout = () => {
    localStorage.removeItem("token")
  }

  render() {
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
          <input type="submit" value="Sign Up" onClick={this.register} />
        </form>
        <button onClick={this.logout}>Logout</button>
        {this.state.errorMessage && <h1>{this.state.errorMessage}</h1>}
      </>
    )
  }
}

export default SignUp
