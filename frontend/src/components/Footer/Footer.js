import React, { Component } from "react";
import style from "../Footer/Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div className={style.footercontainer}>
          <h1 className="footer-text ml-3 text-dark">
            Cherry's Bakeshop and Cafe
          </h1>

          <h4 className="footer-text ml-3 text-dark">
            831B Ballarat Rd, Deer Park VIC 3023
          </h4>
          <h4 className="footer-text ml-3 text-dark">
            Tuesdays - Fridays: 10am - 6pm{" "}
          </h4>
          <h4 className="footer-text ml-3 text-dark">
            Saturdays and Sundays: 11am - 5pm
          </h4>
        </div>
      </>
    );
  }
}
export default Footer;
