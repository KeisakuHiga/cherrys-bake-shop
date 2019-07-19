import React, { Component } from "react";
import { Link } from "react-router-dom";
import facebook from "../NoMatch/facebook.jpg";
import style from "../NoMatch/NoMatch.module.css";

class NoMatch extends Component {
  state = {};
  render() {
    return (
      <>
        <div className={style.nomatchcontainer}>
          <img
            className={style.nomatchimage}
            src={facebook}
            alt="Page doesn't exist"
            a
            href="https://icons8.com"
          />
        </div>
        <ul className={style.nomatchcontent}>
          <h3>
            Meanwhile, we are baking fresh cakes for you. You can look at below
            options.
          </h3>
          <li className={style.navitem}>
            <Link className={style.navlink} to="/">
              Home
            </Link>
          </li>
          <li className={style.navitem}>
            <Link className={style.navlink} to="/About">
              About
            </Link>
          </li>
          <li className={style.navitem}>
            <Link className={style.navlink} to="/Quote">
              Quote
            </Link>
          </li>
          <li className={style.navitem}>
            <Link className={style.navlink} to="/Faq">
              FAQ
            </Link>
          </li>
          <li className={style.navitem}>
            <Link className={style.navlink} to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

export default NoMatch;
