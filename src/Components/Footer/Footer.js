import React from "react";
import "./Footer.css";

import instaIcon from "../../images/insta-icon.png";
import twitterIcon from "../../images/twitter-icon.png";
import discordIcon from "../../images/discord-icon.png";

function Footer() {
  return (
    <div className="footer-container">
        <a href=""><img src={instaIcon} /></a>
        <a href=""><img src={twitterIcon} /></a>
        <a href=""><img src={discordIcon} /></a>
    </div>
  );
}