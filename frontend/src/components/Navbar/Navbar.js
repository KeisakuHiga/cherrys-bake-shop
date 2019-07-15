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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Quote">Quote</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Faq">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}


export default Navbar;