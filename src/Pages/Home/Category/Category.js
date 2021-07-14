import React, { useState } from "react";
import Layout from "../../../Components/Layout/Layout";
import "./style.css";
const Category = () => {
  const [category, setcategory] = useState([]);
  return (
    <>
      <Layout>
        <div className="category">
          <div>
            <h2>Shop by Category</h2>
          </div>
          <div className="items">
            <a href="#">
              <div>
                <div>
                  <img src="/images/laptop.webp" alt="drone" />
                </div>
              </div>
              <h3>computers</h3>
            </a>
            <a href="#">
              <div>
                <div>
                  <img src="/images/laptop.webp" alt="drone" />
                </div>
              </div>
              <h3>computers</h3>
            </a>
            <a href="#">
              <div>
                <div>
                  <img src="/images/laptop.webp" alt="drone" />
                </div>
              </div>
              <h3>computers</h3>
            </a>
            <a href="#">
              <div>
                <div>
                  <img src="/images/laptop.webp" alt="drone" />
                </div>
              </div>
              <h3>computers</h3>
            </a>
            <a href="#">
              <div>
                <div>
                  <img src="/images/laptop.webp" alt="drone" />
                </div>
              </div>
              <h3>computers</h3>
            </a>
            <a href="#">
              <div>
                <div>
                  <img src="/images/laptop.webp" alt="drone" />
                </div>
              </div>
              <h3>computers</h3>
            </a>
            <a href="#">
              <div>
                <div>
                  <img src="/images/laptop.webp" alt="drone" />
                </div>
              </div>
              <h3>computers</h3>
            </a>
            <a href="#">
              <div>
                <div>
                  <img src="/images/laptop.webp" alt="drone" />
                </div>
              </div>
              <h3>computers</h3>
            </a>
            <a href="#">
              <div>
                <div>
                  <img src="/images/laptop.webp" alt="drone" />
                </div>
              </div>
              <h3>computers</h3>
            </a>
            <a href="#">
              <div>
                <div>
                  <img src="/images/laptop.webp" alt="drone" />
                </div>
              </div>
              <h3>computers</h3>
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Category;
