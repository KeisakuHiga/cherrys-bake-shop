import React, { Component } from 'react'
import Moment from 'react-moment'
import style from './QuoteDetail.module.css'

const axios = require('axios')

class QuoteDetail extends Component {
  state = {  }

  getOneQuote = async () => {
    const token = localStorage.getItem('token')
    const id = this.props.match.params.id
    const url = `${process.env.REACT_APP_API_URL}/quote/${id}`
    const response = await axios.get(url, {headers: { token } })
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
      return ( <div className={style.quotedetailouterloading}>
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
      )
    } else {
      return (
        <>
        <div className={style.quotedetailouter}>
          <div className={style.titleouter}>
            <div>
              <h1 className={style.quotetitle}>Quote Details</h1>
            </div>
          </div>
          <div className={style.quotedetailcontainer}>
            <div className={style.userinfocontainer}>
              <h3>User Info</h3>
              <p>Name: {oneQuote.user.userName.firstName} {oneQuote.user.userName.lastName}</p>
              <p>Phone Number: {oneQuote.user.contact.phoneNumber}</p>
              <p>Email: {oneQuote.user.contact.email}</p>
            </div>
            <div className={style.dateinfo}>
              <h3>Date Info</h3>
              <p>Quote created at: <Moment local format="MMM DD, YYYY LT">{oneQuote.createdAT}</Moment></p>
              <p>Date of event: <Moment local format="MMM DD, YYYY LT">{oneQuote.dateOfEvent}</Moment></p>
              <p>Estimated pick up date: <Moment local format="MMM DD, YYYY LT">{oneQuote.pickUpDateAndTime}</Moment></p>
            </div>
            <div className={style.aboutproduct}>
              <h3>Product Info</h3>
              <p>Type of product: {oneQuote.typeOfProduct.map(product => <span>{product}, </span>)}</p>
              <p>Type of occasion: {oneQuote.typeOfOccasion}</p>
              <p>Cake flavour: {oneQuote.flavour.cakeFlavour}</p>
              <p>Filling flavour: {oneQuote.flavour.fillingFlavour}</p>
            </div>
            <div className={style.otherinfo}>
              <h3>Other Info</h3>
              <p>Number of guests: {oneQuote.numberOfGuests} people</p>
              <p>Message: {oneQuote.message}</p>
            </div>
          </div>
        </div>
        </>
      )
    }
  }
}

export default QuoteDetail