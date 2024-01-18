import React from "react";
import "./HeaderDisplay.css";
import SplashTxt from "../SplashText/SplashText.js";

import placeHolder from "../../images/placeholder.png";

function HeaderDisplay() {
  return (
        /*
          Assigning className to SplashTxt will not be like a normal html element's className. Rather you are passing a parameter named className assigned as "splash-text"
          You would be able to access the parameter through props.className. This does not look like your intended usage.

          Any css changing SplashTxt as a class should be put in a css file in the SplashText directory. If you want to change this specific SplashText and not all of it
          you should create a wrapper. An example is shown below
          <div id="splash-text-container">
            <SplashTxt/>
          </div>
        */
    <div className="header-display-container">
        <img src={placeHolder} />
        <SplashTxt className="splash-text"/>
    </div>
  );
}

export default HeaderDisplay;