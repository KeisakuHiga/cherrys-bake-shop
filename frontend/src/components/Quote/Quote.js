import React, { Component } from "react";
import style from "../Quote/Quote.module.css";

class Quote extends Component {
  state = {
    typeOfProduct: []
  };

  handleInput = e => {
    let productArray = this.state.typeOfProduct;
    if (e.target.id === "typeOfProduct") {
      productArray.push(e.target.value);
      this.setState({
        typeOfProduct: productArray
      });
    } else {
      this.setState({
        [e.target.id]: e.target.value
      });
    }
  };

  handleQuote = async (e) => {
    e.preventDefault();
    const result = await this.props.createNewQuote(this.state);
    if (result) {
      this.props.history.push('/')
    }
  };

  render() {
    return (
      <>
        <div className={style.quotecontainer}>
          <div className={style.quoteinner}>
            <form>
              <div className={style.quotecontent}>
                <div>
                  <p>We are based in Deer Park.</p>
                  <p>
                    If you are after a quote for a custom made cake or filipino
                    order, please fill out the form below and I will get back to
                    you as soon as possible.
                  </p>
                  <p>
                    You can also email us directly at:{" "}
                    <a href="mailto:cherrysbakeshopandcafe@gmail.com">
                      cherrysbakeshopandcafe@gmail.com
                    </a>
                  </p>
                  <p>
                    Download my filipino food list and cake flavour list{" "}
                    <a href="https://drive.google.com/file/d/10feovHfpQSJTftvNRoH3oeT3SOhDqzfx/view">
                      here
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <label>What would you like to order?</label>
              </div>
              <div className={style.checkbox}>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="typeOfProduct"
                      id="typeOfProduct"
                      value="Custom Cakes"
                      onChange={this.handleInput}
                    />
                    <span> Custom Cakes</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="typeOfProduct"
                      id="typeOfProduct"
                      value="Standard Cakes"
                      onChange={this.handleInput}
                    />
                    <span> Standard Cakes</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="typeOfProduct"
                      id="typeOfProduct"
                      value="Wedding Cakes"
                      onChange={this.handleInput}
                    />
                    <span> Wedding Cakes</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="typeOfProduct"
                      id="typeOfProduct"
                      value="Ube Cakes"
                      onChange={this.handleInput}
                    />
                    <span> Ube Cakes</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="typeOfProduct"
                      id="typeOfProduct"
                      value="Filipino Cuisine/Dessert"
                      onChange={this.handleInput}
                    />
                    <span> Filipino Cuisine/Dessert</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="typeOfProduct"
                      id="typeOfProduct"
                      value="Cupcakes"
                      onChange={this.handleInput}
                    />
                    <span> Cupcakes</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="typeOfProduct"
                      id="typeOfProduct"
                      value="Macarons"
                      onChange={this.handleInput}
                    />
                    <span> Macarons</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="typeOfProduct"
                      id="typeOfProduct"
                      value="Pinoy Bread"
                      onChange={this.handleInput}
                    />
                    <span> Pinoy Bread</span>
                  </label>
                </div>
              </div>
              <div className={style.occasion}>
                <label>What is your occasion?</label>
                <input
                  type="text"
                  name="typeOfOccasion"
                  id="typeOfOccasion"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.email}>
                <label>Email Address</label>
                <input
                  className={style.emailinput}
                  type="text"
                  name="email"
                  id="email"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.completename}>
                <div className={style.first}>
                  <label>First Name</label>
                  <input
                    className={style.firstinput}
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={this.handleInput}
                  />
                </div>
                <div className={style.last}>
                  <label>Last Name</label>
                  <input
                    className={style.lastinput}
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={this.handleInput}
                  />
                </div>
              </div>
              <div className={style.message}>
                <label>Message</label>
                <textarea
                  className={style.messageinput}
                  name="message"
                  id="message"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.dateevent}>
                <label>Date of your event</label>
                <input
                  className={style.dateinput}
                  type="date"
                  name="dateOfEvent"
                  id="dateOfEvent"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.completepickup}>
                <div className={style.pickupevent}>
                  <label>Date of Pick Up</label>
                  <input
                    className={style.dateinput}
                    type="date"
                    name="pickUpDate"
                    id="pickUpDate"
                    onChange={this.handleInput}
                  />
                </div>
                <div className={style.time}>
                  <label>Time of Pick Up</label>
                  <input
                    className={style.timeinput}
                    type="time"
                    name="pickUpTime"
                    id="pickUpTime"
                    onChange={this.handleInput}
                  />
                </div>
              </div>
              <div className={style.phone}>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.flavour}>
                <label>Cake Flavour</label>
                <input
                  type="text"
                  name="cakeFlavour"
                  id="cakeFlavour"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.filling}>
                <label>Filling Flavour</label>
                <input
                  type="text"
                  name="fillingFLavour"
                  id="fillingFlavour"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.guests}>
                <label>Number of Guests</label>
                <input
                  className={style.guestinput}
                  type="number"
                  name="numberOfGuests"
                  id="numberOfGuests"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.quotesub}>
                <input
                  type="submit"
                  value="Submit"
                  onClick={this.handleQuote}
                />
              </div>
            </form>
            <div className={style.errorquote}>
              {this.props.errorMessage && <h2>{this.props.errorMessage}</h2>}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Quote;
