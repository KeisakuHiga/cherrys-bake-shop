import React, { Component } from 'react'
const axios = require('axios')
class Admin extends Component {
  state = {  }

  getAllQuotes = async () => {
    // const url = 'https://cherrysbakeshopandcafe.khiga2943.now.sh/quote/getAllQuotes'
    const url = 'http://localhost:5000/quote/getAllQuotes'
    const response = await axios.get(url)
    const data = response.data
    this.setState({
      allQuotes: data
    })
  }

  dateFormat = (date) => {
    date = new Date(date)
    const month = date.toLocaleString("en-us", { month: "short" })
    const day = date.getDate()
    const year = date.getFullYear()
    const newDate = month+'. '+day+', ' + year
    return newDate
  }

  componentDidMount = async () => {
    this.getAllQuotes()
  }

  render() {     
    const { allQuotes } = this.state
    if(!allQuotes) {
      return null
    } else {
      return (
        <div className="DashBoard-container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">User First Name</th>
                <th scope="col">User Last Name</th>
                <th scope="col">Product Type</th>
                <th scope="col">Event Date</th>
                <th scope="col">Quote Request Date</th>
              </tr>
            </thead>
            <tbody>
              {allQuotes.map((quote, index) => (
                <tr key={index} className="DashBoard-quotes-container">
                  <th key={quote.user.userName.firstName} scope="row">{quote.user.userName.firstName}</th>
                  <th key={quote.user.userName.lastName} >{quote.user.userName.lastName}</th>
                  <td key={quote.typeOfProduct}>{quote.typeOfProduct}</td>
                  <td key={quote.dateOfEvent}>{this.dateFormat(quote.dateOfEvent)}</td>
                  <td key={quote.createdAt}>{this.dateFormat(quote.createdAt)}</td>
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


