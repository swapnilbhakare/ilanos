import React from "react";
import Button from "../../../Components/Button/Button";
import Layout from "../../../Components/Layout/Layout";
import "./style.css";
const BestSeller = () => {
  return (
    <>
      <Layout>
        <div className="best-seller">
          <div>
            <h2>Best Sellers</h2>
          </div>
          <div className="products">
            <div className="product">
              <div>
                <img src="/images/drone.png" alt="drone" />
              </div>
              <div>
                <p>HKI Tech Quadcopter Drone With 360 Camera & Controller</p>
                <span>$85.00</span>
              </div>
            </div>
            <div className="product">
              <div>
                <img src="/images/drone.png" alt="drone" />
              </div>
              <div>
                <p>HKI Tech Quadcopter Drone With 360 Camera & Controller</p>
                <span>$85.00</span>
              </div>
            </div>
            <div className="product">
              <div>
                <img src="/images/drone.png" alt="drone" />
              </div>
              <div>
                <p>HKI Tech Quadcopter Drone With 360 Camera & Controller</p>
                <span>$85.00</span>
              </div>
            </div>
            <div className="product">
              <div>
                <img src="/images/drone.png" alt="drone" />
              </div>
              <div>
                <p>HKI Tech Quadcopter Drone With 360 Camera & Controller</p>
                <span>$85.00</span>
              </div>
            </div>
            <div className="product">
              <div>
                <img src="/images/drone.png" alt="drone" />
              </div>
              <div>
                <p>HKI Tech Quadcopter Drone With 360 Camera & Controller</p>
                <span>$85.00</span>
              </div>
            </div>
            <div className="product">
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
            <Button>View All</Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BestSeller;
