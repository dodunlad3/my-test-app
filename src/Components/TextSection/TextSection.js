import React from "react";

function TextSection({title, text}) {
    return (
        //There is no need to assign a class name if you are not going to use it for anything
        <div className="text-section">
        <h2>{title}</h2>
        <p>{text}</p>
        </div>
    );
}

export default TextSection;