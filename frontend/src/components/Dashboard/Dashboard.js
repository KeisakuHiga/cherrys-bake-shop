import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

class Admin extends Component {
  state = {  }

  render() {     
    const { allQuotes } = this.props
    if(!allQuotes) {
      return null
    } else {
      return (
        <div className="DashBoard-container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User First Name</th>
                <th scope="col">User Last Name</th>
                <th scope="col">Event Date</th>
                <th scope="col">Quote Request Date</th>
              </tr>
            </thead>
            <tbody>
              {allQuotes.map((quote, index) => (
                <tr key={index} className="DashBoard-quotes-container">
                  <th key={quote._id} scope="row"><Link to={`/QuoteDetail/${quote._id}`}>Quote Detail</Link></th>
                  <td key={quote.user.userName.firstName}>{quote.user.userName.firstName}</td>
                  <td key={quote.user.userName.lastName}>{quote.user.userName.lastName}</td>
                  <td key={quote.createdAt}><Moment local format="MMM DD, YYYY">{quote.pickUp.time}</Moment></td>
                  <td key={quote.createdAt}><Moment local format="MMM DD, YYYY">{quote.createdAt}</Moment></td>
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


