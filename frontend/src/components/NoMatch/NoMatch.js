import React, { Component } from "react";
import facebook from "../NoMatch/facebook.jpg";
import style from "../NoMatch/NoMatch.module.css";

class NoMatch extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className> Oops...We can't seem to find the page you're after.</h2>
        <pre />
        <div className={style.nomatchcontainer}>
          <img
            className={style.nomatchimage}
            src={facebook}
            alt="Page doesn't exist"
          />
        </div>
      </>
    );
  }
}

export default NoMatch;
