import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>PIZZA CASTLE</h1>
        <p>" Made by hand, Eaten by hand "</p>

        <p>Copyrights 2022 &copy; Somesh Kumar Sahu</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/somesh.kumar.568">Instagram</a>
        <a href="https://www.facebook.com/somesh.kumar.568">Youtube</a>
        <a href="https://www.facebook.com/somesh.kumar.568">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;