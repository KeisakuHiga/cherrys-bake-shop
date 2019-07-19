import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Faq from './components/Faq/Faq'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import NoMatch from './components/NoMatch/NoMatch'
import Quote from './components/Quote/Quote'
import DashBoard from './components/Dashboard/Dashboard'
import QuoteDetail from './components/Dashboard/QuoteDetail/QuoteDetail'

class Routes extends React.Component {
  state = {}
  
    handleSignUp = () => {
      if (this.props.authentication) {
        return <Redirect to="/" />
      } else {
        return <SignUp register={this.props.register} authentication={this.props.authentication} errorMessage={this.props.errorMessage} />
      }
    }

  handleQuote = () => {
    if (this.props.authentication) {
      return <Redirect to="/" />
    } else {
      return <Quote createNewQuote={this.props.createNewQuote} errorMessage={this.props.errorMessage} />
    }
  }
  
  handleLogin = () => {
    if (this.props.authentication) {
      return <Redirect to="/" />
    } else {
      return <Login login={this.props.login} authentication={this.props.authentication} errorMessage={this.props.errorMessage} />
    }
  }

  render() {
    const { authentication } = this.props
    return (
      <Switch>
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Faq" component={Faq} />
        <Route path="/Quote" render={(props) => {
          return <Quote {...props} createNewQuote={this.props.createNewQuote} />}} />
        <Route path="/Login" render={this.handleLogin} />
        <Route path="/SignUp" render={this.handleSignUp} />
        { authentication ? <Route path="/DashBoard" render={(props) => {
          return <DashBoard {...props} allQuotes={this.props.allQuotes} />
        }} /> : null }
        { authentication ? <Route path="/QuoteDetail/:id" render={(props) => {
          return <QuoteDetail {...props} />
        }} /> : null }
        <Route path="/" exact component={Home} />
        <Route component={NoMatch} />
      </Switch>
    ) 
  }
}

export default Routes