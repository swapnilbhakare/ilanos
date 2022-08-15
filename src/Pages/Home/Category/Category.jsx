import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../Components/Layout/Layout";
import styles from "./Category.module.css";
const Category = () => {
  const category = [
    {
      id: 1,
      title: "Computer",
      img: "./images/cat-laptop.png",
    },
    {
      id: 2,
      title: "Mobile",
      img: "./images/cat-mobile.png",
    },
    {
      id: 3,
      title: "Drone & cameras",
      img: "./images/cat-drone.png",
    },
    {
      id: 4,
      title: "Sale",
      img: "./images/cat-sale.png",
    },
    {
      id: 5,
      title: "Tablets",
      img: "./images/cat-tab.png",
    },
    {
      id: 6,
      title: "Best Sellers",
      img: "./images/cat-best.png",
    },
    {
      id: 7,
      title: "T.V Home cinema",
      img: "./images/cat-tv.png",
    },
    {
      id: 8,
      title: "Wearable Tech",
      img: "./images/cat-watch.png",
    },
    {
      id: 9,
      title: "Speaker",
      img: "./images/cat-speaker.png",
    },
   
    {
      id: 10,
      title: "Headphones",
      img: "./images/cat-headphone.png",
    },
  ];
  return (
    <>
      <Layout>
        <div className={styles.Category}>
          <div>
            <h2>Shop by Category</h2>
          </div>
          <div className={styles.items}>
          {category.map((item) => {
            return (
          
                <Link to='/category'>
                  <div>
                    <div>
                      <img src={item.img} alt={item.title} />
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                </Link>
            
            );
          })}
            </div>
        </div>
      </Layout>
    </>
  );
};

export default Category;
