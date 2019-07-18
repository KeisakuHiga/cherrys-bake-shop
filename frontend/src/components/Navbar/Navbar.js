import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "../Navbar/Navbar.module.css";
import CherrysLogo from "../Navbar/cherryslogo.png";

class Navbar extends Component {
  state = {};

  handleLogout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    const { authentication } = this.props;
    return (
      <>
        <div className={style.logocontainer}>
          <img
            className={style.logoimage}
            src={CherrysLogo}
            alt="Cherry's Logo"
          />
        </div>
        <nav className={style.navbar}>
          <ul className={style.navbox}>
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
            {authentication ? (
              <li className={style.navitem}>
                <Link className={style.navlink} to="/Dashboard">
                  Dashboard
                </Link>
              </li>
            ) : null}
            {authentication ? null : (
              <li className={style.navitem}>
                <Link className={style.navlink} to="/Login">
                  Login
                </Link>
              </li>
            )}
            {authentication ? (
              <li className={style.navitem} onClick={this.handleLogout}>
                <Link className={style.navlink} to="/">
                  Logout
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
