import React from "react";
import Button from "../../../Components/Button/Button";
import styles from "./SpacialOffers.module.css";
const SpecialOffers = (props) => {

  return (
    <>
      <div className={`container ${styles.brands}`}>
        {props.offers.map((offer) => {
          return (
            <div className={`${styles.wrapper}`} key={offer.offer_id}>
              <img className={`${styles.image}`} src={offer.img} alt="iphone" />

              <div className={styles.textWrapper}>
                <span>{offer.offerName}</span>
                <h3>{offer.offerTitle}</h3>
                <p>{offer.offerDescription}</p>
                <Button styled={styles.buttonWhite}>Shop</Button>
              </div>
            </div>
          );
        })}
    
      </div>
    </>
  );
};

export default SpecialOffers;
