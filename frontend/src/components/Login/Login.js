import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import style from '../Login/Login.module.css'


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
        <div className={style.logincontainer}>
          <div className={style.logininner}>
            <form className={style.loginform}>
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
          </div>
        </div>
      )
    }
  }
}

export default Login
