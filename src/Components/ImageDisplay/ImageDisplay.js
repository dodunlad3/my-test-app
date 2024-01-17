import React from "react";
import "./ImageDisplay.css";

import placeHolder from "../../images/placeholder.png";

function ImageDisplay() {
  return (
    <div className="image-display-container">
        <img src={placeHolder} className="image"/>
    </div>
  );
}