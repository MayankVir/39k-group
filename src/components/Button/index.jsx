import React, { useState } from "react";
import "./styles.scss";

const Button = ({ handleClick, isClicked, setIsClicked }) => {
  const handleButtonClick = () => {
    handleClick();
  };

  return (
    <div className="buttonContainer">
      <button className={isClicked ? "circle" : ""} onClick={handleButtonClick}>
        <span className={isClicked ? "click" : ""}>Submit</span>
      </button>
    </div>
  );
};

export default Button;
