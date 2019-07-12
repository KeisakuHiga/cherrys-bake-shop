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

  // getUser = async () => {
  //   const url = ''
  // }

  componentDidMount = async () => {
    this.getAllQuotes()
  }

  render() {     
    const { allQuotes } = this.state
    console.log(allQuotes)
    if(!allQuotes) {
      return null
    } else {
      return (
        <div className="Admin-container">
          <h1>hello from Admin.js</h1>
          {allQuotes.map((quote, index) => (
            <div key={index}>
              <h3 key={quote._id}>{quote.typeOfProduct}</h3>
              <h3 key={quote.user._id}>{quote.user.userName.firstName}</h3>
            </div>
          ))}
        </div>
      )
    }
  }
}

export default Admin;