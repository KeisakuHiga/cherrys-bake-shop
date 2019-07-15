import React, { Component } from 'react'
import style from '../Social/Social.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'



class Social extends Component {
  state = {  }
  render() { 
    return (
      <>
        <FontAwesomeIcon icon={faPhone} size="2x" className={style.phone} />
        <FontAwesomeIcon icon={faFacebook} size="2x" className={style.phone} />
        <FontAwesomeIcon icon={faTwitter} size="2x" className={style.phone} />
      </>
    );
  }
}

export default Social;