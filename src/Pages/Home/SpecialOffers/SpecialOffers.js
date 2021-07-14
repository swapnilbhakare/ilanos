import React from "react";
import Button from "../../../Components/Button/Button";
import "./style.css";
const SpecialOffers = (props) => {
  return (
    <>
      {props.offers.map((offer) => {
        return (
          <div key={offer.offer_id}>
            <img src={offer.img} alt="iphone" />
            <div className="text-wrapper">
              <span>{offer.offerName}</span>
              <h3>{offer.offerTitle}</h3>
              <p>{offer.offerDescription}</p>
              <Button
                className={
                  props.isbuttonPurple ? "button-purple" : "button-white"
                }
              >
                Shop
              </Button>
            </div>
          </div>
        );
      })}
      ;
    </>
  );
};

export default SpecialOffers;
