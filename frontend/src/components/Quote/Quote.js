import React, { Component } from "react";
import style from "../Quote/Quote.module.css";

class Quote extends Component {
<<<<<<< HEAD
  state = {}

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
=======
  state = {};
  render() {
    return <div className={style.quotecontainer} />;
>>>>>>> master
  }

  handleQuote = e => {
    e.preventDefault()
    this.props.createNewQuote(this.state)
  }

  render() {
      return (
        <>
        <div className={style.quotecontainer}>
          <div className="quoteinner">
            <form>
              <div className={style.radio}>
                <label>What would you like to order?</label>
                <label>
                  <span>Custom Cakes</span>
                  <input type="radio" name="typeOfProduct" id="typeOfProduct" value="Custom Cakes" onChange={this.handleInput}/>
                </label>
                <label>
                  <span>Standard Cakes</span>
                  <input type="radio" name="typeOfProduct" id="typeOfProduct" value="Standard Cakes" onChange={this.handleInput}/>
                </label>
                <label>
                  <span>Wedding Cakes</span>
                  <input type="radio" name="typeOfProduct" id="typeOfProduct" value="Wedding Cakes" onChange={this.handleInput}/>
                </label>
                <label>
                  <span>Ube Cakes</span>
                  <input type="radio" name="typeOfProduct" id="typeOfProduct" value="Ube Cakes" onChange={this.handleInput}/>
                </label>
                <label>
                  <span>Filipino Cuisine</span>
                  <input type="radio" name="typeOfProduct" id="typeOfProduct" value="Filipino Cuisine" onChange={this.handleInput}/>
                </label>
                <label>
                  <span>Cupcakes</span>
                  <input type="radio" name="typeOfProduct" id="typeOfProduct" value="Cupcakes" onChange={this.handleInput}/>
                </label>
                <label>
                  <span>Macarons</span>
                  <input type="radio" name="typeOfProduct" id="typeOfProduct" value="Macarons" onChange={this.handleInput}/>
                </label>
                <label>
                  <span>Pinoy Bread</span>
                  <input type="radio" name="typeOfProduct" id="typeOfProduct" value="Pinoy Bread" onChange={this.handleInput}/>
                </label>
              </div>
              <label>What is your occasion?</label>
              <input
                type="text"
                name="typeOfOccasion"
                id="typeOfOccasion"
                onChange={this.handleInput}
              />
              <label>Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={this.handleInput}
              />
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={this.handleInput}
              />
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={this.handleInput}
              />
              <label>Message</label>
              <textarea
                name="message"
                id="message"
                onChange={this.handleInput}
              />
              <label>Date of your event</label>
              <input 
                type="date" 
                name="dateOfEvent" 
                id="dateOfEvent"
                onChange={this.handleInput}
              />
              <label>Date and Time of Pick Up</label>
              <input 
                type="date" 
                name="pickUpDate" 
                id="pickUpDate"
                onChange={this.handleInput}
              />
              <label>Time of Pick Up</label>
              <input 
                type="time" 
                name="pickUpTime"
                id="pickUpTime"
                onChange={this.handleInput}
              />  
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                onChange={this.handleInput}
              />
              <label>Cake Flavour</label>
              <input
                type="text"
                name="cakeFlavour"
                id="cakeFlavour"
                onChange={this.handleInput}
              />
              <label>Filling Flavour</label>
              <input
                type="text"
                name="fillingFLavour"
                id="fillingFlavour"
                onChange={this.handleInput}
              />
              <label>Number of Guests</label>
              <input
                type="number"
                name="numberOfGuests"
                id="numberOfGuests"
                onChange={this.handleInput}
              />
              <input type="submit" value="Submit" onClick={this.handleQuote} />
            </form>
            {this.props.errorMessage && <h1>{this.props.errorMessage}</h1>}

          </div>
        </div>
        </>
      )
    }
}

export default Quote;
