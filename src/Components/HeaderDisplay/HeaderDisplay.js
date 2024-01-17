import React from "react";
import "./HeaderDisplay.css";
import SplashTxt from "../SplashText/SplashText.js";

import placeHolder from "../../images/placeholder.png";

function HeaderDisplay() {
  return (
    <div className="header-display-container">
        <img src={placeHolder} />
        <SplashTxt className="splash-text"/>
    </div>
  );
}