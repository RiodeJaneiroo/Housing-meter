import React from "react";
import "./message.css";
const message = ({ type, text }) => {
  if (!text) {
    return null;
  }
  const wordType = ["danger", "success", "warning"];
  return (
    <div className="bMessage">
      <div className={`alert alert-${wordType[type]}`} role="alert">
        {text}
      </div>
    </div>
  );
};

export default message;
