import React from "react";
import Layout from "../../Components/Layout/Layout";
import Products from "../../Components/Products/Products";
import SortBy from "../../Components/SortBy/SortBy";

const ShopAll = () => {
  const ShopAllStyle = {
    paddingTop:"2rem",
    background: "#fff",
    pading: "0 1rem",
    textAlign: "center",
  };
  return (
    <>
      <div style={ShopAllStyle}>
        <div>
          <h2 style={{fontSize:"2rem"}}>Shop All</h2>
        </div>
     
        <div className="container-flex">
          <div>
            <Layout>
              <div>
              <SortBy/>
              <Products  />
                </div>
            
            </Layout>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopAll;
