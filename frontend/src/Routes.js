import React from 'react';
import { Route, Switch } from 'react-router-dom'

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
  render() {
    const { authentication } = this.props
    return (
      <Switch>
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Faq" component={Faq} />
        <Route path="/Login" render={() => {
          return <Login login={this.props.login} authentication={authentication} />
        }} />
        {/* <Route path="/SignUp" component={SignUp} /> */}
        <Route path="/SignUp" render={() => {
          return <SignUp register={this.props.register} authentication={authentication} />
        }} />
        <Route path="/Quote" component={Quote} />
        <Route path="/DashBoard" render={(props) => {
          return <DashBoard {...props} allQuotes={this.props.allQuotes} dateFormat={this.props.dateFormat} />
        }} />
        <Route path="/QuoteDetail/:id" render={(props) => {
          return <QuoteDetail {...props} dateFormat={this.props.dateFormat} />
        }} />
        <Route path="/" exact component={Home} />
        <Route component={NoMatch} />
      </Switch>
    ) 
  }
}

export default Routes