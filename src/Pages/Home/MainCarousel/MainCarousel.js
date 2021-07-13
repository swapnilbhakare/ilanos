import React from "react";
import Button from "../../../Components/Button/Button";
const MainCarousel = () => {
  return (
    <>
      <div className="container-flex ">
        <div className="hero-section carousel">
          <div className="hero-image">
            <img src="/images/watch.png" alt="hero" />
          </div>
          <div className="hero-text">
            <span> Best Prices </span>
            <h1>
              Incredible Prices
              <br /> on All Your
              <br /> Favorite Items
            </h1>
            <p>Get more for less on selected brands</p>
            <Button>Shop now</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCarousel;
