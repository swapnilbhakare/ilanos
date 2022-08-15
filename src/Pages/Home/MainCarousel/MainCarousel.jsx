import React from "react";
import Button from "../../../Components/Button/Button";
import styles from './MainCarousel.module.css'
const MainCarousel = () => {
  return (
    <>
      <div className="container-flex ">
        <div className={`${styles.heroSection}`}>
          <div className={`${styles.heroImage}`}>
            <img src="/images/watch.png" alt="hero" />
          </div>
          <div className={styles.heroText}>
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
