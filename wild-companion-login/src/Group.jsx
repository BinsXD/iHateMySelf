import React from "react";
import "./style.css";

export const Group = ({ className, overlapGroupClassName, text }) => {
  return (
    <div className={`group ${className}`}> 
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};
