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
            <h1>Login</h1>
            <div className={style.formcon}>
              <form>  
                <input className={style.input} placeholder="Email"
                  type="text"
                  name="email"
                  id="email"
                  onChange={this.handleInput}
                />
                <input className={style.input} placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleInput}
                />
                <div className={style.submitcon}>
                  <input className={style.subinput} type="submit" value="Login" onClick={this.handleLogin} />
                </div>
              </form>
              <div className={style.error}>
                {this.props.errorMessage && <p>{this.props.errorMessage}</p>}
              </div>            
            </div>


          </div>
        </div>
      )
    }
  }
}

export default Login
