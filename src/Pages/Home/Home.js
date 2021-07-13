import React from "react";
import MainCarousel from "./MainCarousel/MainCarousel";
import Deliveryprocess from "./Deliveryprocess/Deliveryprocess";
import SpecialOffers from "./SpecialOffers/SpecialOffers";
import BestSeller from "./BestSeller/BestSeller";
import "./style.css";

const Home = () => {
  let isbuttonPurple = false;
  const offers = [
    {
      offer_id: 1,
      img: "./images/iphone.png",
      offerName: "Holiday Deals",
      offerTitle: "Up to  30% off",
      offerDescription: "Selected Smartphone Brands ",
    },
    {
      offer_id: 2,
      img: "./images/headphones.png",
      offerName: "Just In",
      offerTitle: "Take Your Sound Anywhere",
      offerDescription: "Top Headphone Brands",
    },
  ];
  return (
    <>
      <MainCarousel isbuttonPurple={isbuttonPurple} />
      <div className="container brands">
        <SpecialOffers offers={offers}></SpecialOffers>
      </div>
      <Deliveryprocess />
      <BestSeller />
    </>
  );
};

export default Home;
