import React, { useState } from "react";
import MainCarousel from "./MainCarousel/MainCarousel";
import Deliveryprocess from "./Deliveryprocess/Deliveryprocess";
import SpecialOffers from "./SpecialOffers/SpecialOffers";
import Products from "../../Components/Products/Products";
import "./style.css";
import Category from "./Category/Category";
import BestPrice from "./BestPrice/BestPrice";
import Layout from "../../Components/Layout/Layout";
import Button from "../../Components/Button/Button";
import Product from "../../Components/Product/Product";
import TodaysOffer from "./TodaysOffer/TodaysOffer";
const Home = () => {
  let isbuttonPurple = false;
  const homeData = {
    offers: [
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
    ],
  };

  return (
    <>
      <MainCarousel isbuttonPurple={isbuttonPurple} />
      <div className="container-flex ">
        <SpecialOffers offers={homeData.offers}></SpecialOffers>
      </div>
      <Deliveryprocess />
      <Layout>
        <div className="bestseller">
          <Layout>{<Products title="Best Seller" />}</Layout>
          <div>
            <Button>View All</Button>
          </div>
        </div>
      </Layout>

      <Category />
      <BestPrice />
      <TodaysOffer/>
    </>
  );
};

export default Home;
