import React from "react";
import "./Footer.css";

import instaIcon from "../../images/insta-icon.png";
import twitterIcon from "../../images/twitter-icon.png";
import discordIcon from "../../images/discord-icon.png";

function Footer() {
  return (
    //This can be an id instead of a class name since this container will likely be unique
    <div className="footer-container">
        <a href=""><img src={instaIcon} alt="Instagram Icon" className="footer-icon" /></a>
        <a href=""><img src={twitterIcon} alt="Twitter Icon" className="footer-icon" /></a>
        <a href=""><img src={discordIcon} alt="Discord Icon" className="footer-icon" /></a>
    </div>
  );
}

export default Footer;