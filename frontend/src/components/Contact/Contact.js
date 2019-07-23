import React, { Component } from "react";
import style from "../Contact/Contact.module.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <>
      <div className={style.contactcontainer}>
        <div className={style.contacttitle}>
          <h2>Contact Us</h2>
        </div>
        <div className={style.contactinner}>
          <div className={style.googleMapContainer}>
              <iframe className={style.googlemap}
                title="Cherry's Bakeshop and Cafe Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12615.399763966592!2d144.7718444!3d-37.7701166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2502533f29066!2sCherry&#39;s+Bake+Shop+%26+Cafe!5e0!3m2!1sen!2sau!4v1563250557464!5m2!1sen!2sau"
              />
          </div>
          <div className={style.cherrydetails}>
            <p>
              Telephone: (03) 9449 5729
              <pre />
              Address: 831B Ballarat Rd, Deer Park VIC 3023
              <pre />
              <a href="mailto:cherrysbakeshopandcafe@gmail.com">cherrysbakeshopandcafe@gmail.com</a>
              <pre />
              Opening Hours:
              <pre />
              Monday Closed
              <pre />
              Tuesday - Friday 10:00am – 6:00pm
              <pre /> 
              Saturday - Sunday 11:00am – 5:00pm
            </p>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Contact;
