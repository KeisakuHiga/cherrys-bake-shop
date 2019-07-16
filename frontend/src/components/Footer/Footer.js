import React, { Component } from "react";
import style from "../Footer/Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <>
        <div className={style.footercontainer}>
          <h1 className="footer-text ml-3 text-light">
            Cherry's Bakeshop and Cafe
          </h1>

          <h4 className="footer-text ml-3 text-light">
            831B Ballarat Rd, Deer Park VIC 3023
          </h4>
        </div>
      </>
    );
  }
}
export default Footer;
