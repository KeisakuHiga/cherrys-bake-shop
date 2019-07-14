import React, { Component } from 'react'

const axios = require('axios')

class QuoteDetail extends Component {
  state = {  }

  getOneQuote = async () => {
    const id = this.props.match.params.id
    // const url = 'https://cherrysbakeshopandcafe.khiga2943.now.sh/quote/:id'
    const url = `http://localhost:5000/quote/${id}`
    const response = await axios.get(url)
    console.log(response)
    const data = await response.data
    this.setState({
      oneQuote: data[0]
    })
  }

  componentDidMount = async () => {
    this.getOneQuote()
  }
  
  render() { 
    const { oneQuote } = this.state
    console.log(oneQuote)
    if(!oneQuote) {
      return null
    } else {
      return (
        <div className="QuoteDetail-container">
          <h1>Quote Detail</h1>
          <h3>Quote request date: {oneQuote.dateOfEvent}</h3>
          <h3>Type of product: {oneQuote.typeOfProduct}</h3>
          <h3>Type of occasion: {oneQuote.typeOfOccasion}</h3>
          <h3>Number of guests: {oneQuote.numberOfGuests}</h3>
          <h3>Cake flavour: {oneQuote.cakeFlavour}</h3>
          <h3>Filling flavour: {oneQuote.fillingFlavour}</h3>
          <h3>Message: {oneQuote.message}</h3>
          <h3>User: {oneQuote.user.userName.firstName} {oneQuote.user.userName.lastName}</h3>
          <h3>Phone Number: {oneQuote.user.contact.phoneNumber}</h3>
          <h3>Email: {oneQuote.user.contact.email}</h3>
        </div>
      )
    }
  }
}

export default QuoteDetail