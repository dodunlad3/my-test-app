import React from "react";

function TextSection({title, text}) {
    return (
        <div className="text-section">
        <h2>{title}</h2>
        <p>{text}</p>
        </div>
    );
}

export default TextSection;