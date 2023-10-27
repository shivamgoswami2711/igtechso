import React from "react";
import "./style/primaryButton.css"

function PrimaryButton({text}) {
  return (
    <div className="primary__button">
      <span className="primary__button__text">{text}</span>
    </div>
  );
}
export default PrimaryButton;
