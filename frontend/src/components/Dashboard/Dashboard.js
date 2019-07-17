import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import style from './Dashboard.module.css'

class Admin extends Component {
  state = {  }

  render() {     
    const { allQuotes } = this.props
    if(!allQuotes) {
      return null
    } else {
      return (
        <>
          <h1>All Quotes</h1>
          <div className={style.dashboardcontainer}>
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
                  <tr key={index} onClick={() => window.location =`/QuoteDetail/${quote._id}`}>
                    <th key={quote._id} scope="row">{index + 1}</th>
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
        </>
      )
    }
  }
}

export default Admin;


