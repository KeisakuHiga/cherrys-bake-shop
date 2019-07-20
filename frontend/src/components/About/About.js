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
              The Cherry's Bakeshop and Cafe is dream of Mariz and Richard Rico
              which came true in 2016. Named after their lovely daughter,{" "}
              <strong>Cherry</strong>, who showed a great passion for baking, ever
              since she was a little girl.
              <pre />
              Mariz is a qualified Filipino chef and has attained culinary
              certifications from well-known culinary schools in Melbourne and
              Philippines. Mariz used to previously sell cakes and orders from
              their home. The Cherry's Bakeshop and Cafe is Mariz's tribute to her
              love for baking. All products at Cherry's are made by hand with love
              and using finest ingredients. We are a local business outlet whose
              proud to deliver superior quality cakes since inception.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
