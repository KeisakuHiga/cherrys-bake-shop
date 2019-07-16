import React, { Component } from "react";
import style from "../Contact/Contact.module.css";
class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <h2> Contact Us </h2>
        <div className={style.googleMapContainer}>
          <div className={style.googleMapInfo}>
            <iframe
              title="Cherry's Bakeshop and Cafe Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12615.399763966592!2d144.7718444!3d-37.7701166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2502533f29066!2sCherry&#39;s+Bake+Shop+%26+Cafe!5e0!3m2!1sen!2sau!4v1563250557464!5m2!1sen!2sau"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
