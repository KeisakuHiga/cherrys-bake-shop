import React from 'react';
import { Route, Switch } from 'react-router-dom'

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Faq from './components/Faq/Faq'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import NoMatch from './components/NoMatch/NoMatch'
import Order from './components/Order/Order'
import Signup from './components/Signup/Signup'

class Routes extends React.Component {
  state = {}
  render() {
    return (
      <Switch>
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Faq" component={Faq} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Order" component={Order} />
        <Route path="/Signup" component={Signup} />
        <Route path="/" exact component={Home} />
        <Route component={NoMatch} />
      </Switch>
    ) 
  }
}

export default Routes