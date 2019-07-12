import React, { Component } from 'react'
import style from '../Home/Home.module.css'

class Home extends Component {
  state = {  }
  render() { 
    return (
        <div className={style.homecontainer}>
          <div className={style.gallerycontainer}>
            <div className={style.galleryone}></div>
            <div className={style.gallerytwo}></div>
            <div className={style.gallerythree}></div>
            <div className={style.galleryfour}></div>
            <div className={style.galleryfive}></div>
            <div className={style.gallerysix}></div>
            <div className={style.galleryseven}></div>
            <div className={style.galleryeight}></div>
            <div className={style.gallerynine}></div>
          </div>
        </div>
    );
  }
}

export default Home;