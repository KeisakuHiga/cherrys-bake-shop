import React, { Component } from "react";
import Cherryfront from "../About/Cherryfront.png";
import style from "../About/About.module.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className={style.aboutcontainer}>
        <div className={style.photocontainer}>
          <img
            className={style.cherryphotograph}
            src={Cherryfront}
            alt="Cherry's Bakeshop and Cafe"
          />
        </div>
        <div className={style.aboutcontent}>
          <div className={style.abouttitle}>
            <h1>Our Story</h1>
          </div>
          <div className={style.aboutpara}>
            <p>
              Cherry's Bake Shop and Cafe was opened in 2016 by Mariz and Richard Rico. The store is named after their lovely daughter,{" "}
              <strong>Cherry</strong>, who shares the same burning passion for baking.
              <pre />
              Mariz is a qualified Filipino chef and has attained culinary certifications from culinary schools in Melbourne and the Philippines. Prior to opening the store, Mariz used to make cakes and orders from her own home. Cherry's Bakeshop and Cafe is Mariz's dream coming to life and also a tribute for her love of cooking and baking. All products at Cherry's are hand made with love while using the finest ingredients. We pride ourselves on delivering superior quality cakes and products for prices that can not be matched.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
