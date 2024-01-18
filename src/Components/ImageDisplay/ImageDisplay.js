import React from "react";
import "./ImageDisplay.css";

import placeHolder from "../../images/placeholder.png";

//Should add src as a parameter
function ImageDisplay() {
  return (
    //You used classNames for these elements, but you used id selectors in your css. Whatever you have in imageDisplay.css is not being shown.
    //You can test that by adding obvious css changes to one of the elements
    <div className="image-display-container">
        <img src={placeHolder} className="image"/>
    </div>
  );
}

export default ImageDisplay;