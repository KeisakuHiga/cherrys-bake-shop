import React, { Component } from 'react'
import style from "../Faq/Faq.module.css"

class Faq extends Component {
  state = {  }
  render() { 
    return (
      <div className={style.faqcontainer}>
        <div className={style.faqinnerbox}>
          <div className={style.faqtitle}>
            <h2>FAQ</h2>
          </div>
          <div className={style.faqcontent}>
            <h5>How do I place an order?</h5>
            <p>You can place an order with us via phone or facebook. Also a quote for your order can be requested on our website.</p>
            <h5>Do you have a cancellation policy?</h5>
            <p>For custom cakes you will need to make a 20% deposit which can be sent via bank transfer or by going into our store. The deposit is non refundable if the order is cancelled less than 2 days prior to the pick up date.</p>
            <h5>I’ve seen a cake on your Instagram/Facebook that I love. Can you make me that?</h5>
            <p>Yes we are able to make any custom cakes in regards to the flavour, design, theme and size. Please contact us with any images or have a chat with us to talk about what you would like and we will be able to provide you with a quote.</p>
            <h5>Do you deliver? Where can I pick up my cake?</h5>
            <p>For three tier cakes or more (e.g wedding cakes) we can deliver and assemble the cake as required. For all other cakes they will need to be picked up by you at the store. Our address is listed at the bottom of the page.</p>
            <h5>Can I change my order?</h5>
            <p>Contact us if there is any changes at least 2 days before pick up date. Unfortunately we are not able to make any changes to the cake past this timeframe.</p>
            <h5>Do you cater for any allergies?</h5>
            <p>We do cater for all sorts of allergies. We can make gluten free, nut free, dairy free and eggless cakes. Please let us know of any dietary requirements for your order.</p>
          </div>
        </div>
      </div>

    );
  }
}

export default Faq;