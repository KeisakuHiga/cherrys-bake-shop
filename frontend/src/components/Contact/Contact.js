import React, { Component } from "react";
class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="googleMapcontainer">
          <iframe
            width="600"
            height="450"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12615.399763966592!2d144.7718444!3d-37.7701166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2502533f29066!2sCherry&#39;s+Bake+Shop+%26+Cafe!5e0!3m2!1sen!2sau!4v1563250557464!5m2!1sen!2sau"
            allowFullScreen
          />
        </div>
      </>
    );
  }
}

export default Contact;
