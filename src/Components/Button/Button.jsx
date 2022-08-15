import React from "react";
import styles from  "./Button.module.css";
const Button = (props) => {


  return (
    <>
      <button onClick={props.onClick}
        className={(`${styles.buttonStyle} ${props.styled} `)  }
        {...props}
      >
        
      </button>
    </>
  );
};

export default Button;
