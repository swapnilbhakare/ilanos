import React from "react";
import "./style.css";

const Delivery = (props) => {
  const { icon } = props;
  return (
    <>
      <div className="delivery">
        <div>
          <div>
            <img src={icon.img} alt="delivery" />
          </div>
          <span>{icon.desc}</span>
        </div>
      </div>
    </>
  );
};

export default Delivery;
