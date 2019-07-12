import React, { Component } from "react";
class About extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <img src="" alt="Cherry's Bakeshop and Cafe" />
        </div>
        <div className="About-container-expand-lg p-2 bg-dark text-white text-justify">
          <h1>Our Story</h1>
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
      </>
    );
  }
}

export default About;
