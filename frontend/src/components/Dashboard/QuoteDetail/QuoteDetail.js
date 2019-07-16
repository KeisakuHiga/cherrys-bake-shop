import React, { Component } from 'react'
import Moment from 'react-moment'
const axios = require('axios')

class QuoteDetail extends Component {
  state = {  }

  getOneQuote = async () => {
    const id = this.props.match.params.id
    const url = `${process.env.REACT_APP_API_URL}/quote/${id}`
    const response = await axios.get(url)
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
    if(!oneQuote) {
      return null
    } else {
      return (
        <div className="QuoteDetail-container">
          <h1>Quote Detail</h1>
          <h3>Quote request date: <Moment local format="MMM DD, YYYY">{oneQuote.createdAt}</Moment></h3>
          <h3>Date of event:<Moment local format="MMM DD, YYYY">{oneQuote.dateOfEvent}</Moment></h3>
          <h3>Estimated pick up date: <Moment local format="MMM DD, YYYY">{oneQuote.pickUp.date}</Moment> / <Moment local format="LT">{oneQuote.pickUp.time}</Moment></h3>
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