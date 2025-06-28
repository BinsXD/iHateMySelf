import React from "react";
import "./style.css";

export const GroupWrapper = ({ className, overlapGroupClassName }) => {
  return (
    <div className={`group-wrapper ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className="text">Login</div>
      </div>
    </div>
  );
};
