import React from "react";
import Button from "../../../Components/Button/Button";
import Layout from "../../../Components/Layout/Layout";
import "./style.css";
const BestSellers = () => {
  return (
    <>
      <Layout>
        <div className="best-seller">
          <div>
            <h2>Best Sellers</h2>
          </div>
          <div className="products">
            <div className="product">
              <h6>Sale</h6>
              <div>
                <img src="/images/drone.png" alt="drone" />
              </div>
              <div>
                <p>HKI Tech Quadcopter Drone With 360 Camera & Controller</p>
                <span>$85.00</span>
              </div>
            </div>
            <div className="product">
              <h6>Sale</h6>
              <div>
                <img src="/images/drone.png" alt="drone" />
              </div>
              <div>
                <p>HKI Tech Quadcopter Drone With 360 Camera & Controller</p>
                <span>$85.00</span>
              </div>
            </div>
            <div className="product">
              <h6>Sale</h6>
              <div>
                <img src="/images/drone.png" alt="drone" />
              </div>
              <div>
                <p>HKI Tech Quadcopter Drone With 360 Camera & Controller</p>
                <span>$85.00</span>
              </div>
            </div>
            <div className="product">
              <h6>Sale</h6>
              <div>
                <img src="/images/drone.png" alt="drone" />
              </div>
              <div>
                <p>HKI Tech Quadcopter Drone With 360 Camera & Controller</p>
                <span>$85.00</span>
              </div>
            </div>
          </div>
          <div>
            <Button style={{ padding: "0.5rem 8rem ", fontSize: "1rem" }}>
              View All
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BestSellers;
