import React, { Component } from 'react'
import style from '../Social/Social.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'



class Social extends Component {
  state = {  }
  render() { 
    return (
      <>
        <nav className={style.social}>
          <ul>
            <li className={style.phone}>
              <a href="tel:+03 94495729">
                <FontAwesomeIcon icon={faPhone} className={style.icon} />
              Phone</a>
            </li>
          </ul>
          <ul>
            <li className={style.facebook}>
              <a href="https://www.facebook.com/cherrysbakeshopandcafe/">
                <FontAwesomeIcon icon={faFacebook} className={style.icon} />
              Facebook</a>
            </li>
          </ul>
          <ul>
            <li className={style.instagram}>
              <a href="https://www.instagram.com/cherrysbakeshopandcafe">
                <FontAwesomeIcon icon={faInstagram} className={style.iconinsta} />
              Instagram</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Social;