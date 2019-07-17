import React, { Component } from 'react'
import style from "../Faq/Faq.module.css"

class Faq extends Component {
  state = {  }
  render() { 
    return (
      <div className={style.faqcontainer}>
        <div className={style.faqinnerbox}>
          <h1>FAQ</h1>
          <h5>How do I place an order?</h5>
          <h5>Do you have a cancellation policy?</h5>
          <h5>I’ve seen a cake on your Instagram/Facebook that I love. Can you make me that?</h5>
          <h5>Do you deliver? Where can I pick up my cake?</h5>
          <h5>Can I change my order?</h5>
          <h5>Do you cater for any allergies?</h5>
        </div>
      </div>

    );
  }
}

export default Faq;