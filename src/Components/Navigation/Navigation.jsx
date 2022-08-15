import React from "react";
import "./Navigation.css";
import BradingNav from "./BrandingNav";
import Nav from "./Nav";

const Navigation = () => {
  return (
    <>
      <div className="container-flex">
        <BradingNav />
        <Nav />
      </div>
    </>
  );
};

export default Navigation;
