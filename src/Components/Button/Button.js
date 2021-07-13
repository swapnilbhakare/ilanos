import React from "react";
import "./Button.css";
const Button = (props) => {
  let isbuttonPurple = true;
  return (
    <>
      <button
        className={isbuttonPurple ? "button-purple" : "button-white"}
        {...props}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
