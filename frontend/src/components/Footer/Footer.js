import React, { Component } from "react";
import style from "../Footer/Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div className={style.footercontainer}>
          <div className={style.footertext}>
            <h1>
              Cherry's Bake Shop & Cafe
            </h1>
            <h4>
              831B Ballarat Rd, Deer Park VIC 3023
            </h4>
            <h4>
              Tuesdays - Fridays: 10am - 6pm{" "}
            </h4>
            <h4>
              Saturdays and Sundays: 11am - 5pm
            </h4>
          </div>
        </div>
      </>
    );
  }
}
export default Footer;
