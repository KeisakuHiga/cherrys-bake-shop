import React from 'react'

function Navbar() {
  return (
    <>
    <div>
      <img src="" alt="Cherry's Logo"/>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Quote">Quote</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Faq">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}


export default Navbar;