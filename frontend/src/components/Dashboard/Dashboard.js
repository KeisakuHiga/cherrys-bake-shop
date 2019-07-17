import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
class Admin extends Component {
  state = {  }
  
  handleClick = (e) => {
    e.preventDefault()
    console.log('click')
    // return <Link to={`/QuoteDetail/${id}`}/>
    // this.router.transitionTo('Home');
  }

  render() {     
    const { allQuotes } = this.props
    if(!allQuotes) {
      return null
    } else {
      return (
        <div className="DashBoard-container">
          {/* <table className="table table-striped"> */}
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" >Number</th>
                <th scope="col" >First Name</th>
                <th scope="col" >Last Name</th>
                <th scope="col" >Phone Number</th>
                <th scope="col" >Estimated Pick Up</th>
                <th scope="col" >Created At</th>
              </tr>
            </thead>
            <tbody>
              {allQuotes.map((quote, index) => (
                <tr key={index} onClick={this.handleClick}>
                  <th key={quote._id} scope="row"><Link to={`/QuoteDetail/${quote._id}`}>{index + 1}</Link></th>
                  <td key={quote.user.userName.firstName}>{quote.user.userName.firstName}</td>
                  <td key={quote.user.userName.lastName}>{quote.user.userName.lastName}</td>
                  <td key={quote.user.contact.phoneNumber}>{quote.user.contact.phoneNumber}</td>
                  <td key={quote.pickUp.time}><Moment local format="MMM DD, YYYY LT">{quote.pickUp.time}</Moment></td>
                  <td key={quote.createdAt}><Moment local format="MMM DD, YYYY LT">{quote.createdAt}</Moment></td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default Admin;


