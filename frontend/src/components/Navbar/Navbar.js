import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Navbar/Navbar.module.css'
import CherrysLogo from '../Navbar/cherryslogo.png'

function Navbar() {
  return (
    <>
      <div className={style.logocontainer}>
        <img className={style.logoimage} src={CherrysLogo} alt="Cherry's Logo"/>
      </div>
      <nav className={style.navbar}>
          <ul className={style.navbox}>
            <li className={style.navitem}>
              <Link className={style.navlink} to="/">Home</Link>
            </li>
            <li className={style.navitem}>
              <Link className={style.navlink} to="/About">About</Link>
            </li>
            <li className={style.navitem}>
              <Link className={style.navlink} to="/Quote">Quote</Link>
            </li>
            <li className={style.navitem}>
              <Link className={style.navlink} to="/Faq">FAQ</Link>
            </li>
            <li className={style.navitem}>
              <Link className={style.navlink} to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
          </ul>
      </nav>
    </>
  )
}


export default Navbar;