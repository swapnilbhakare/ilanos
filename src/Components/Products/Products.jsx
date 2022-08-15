import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import Button from "../Button/Button";
import "./style.css";
import Layout from "../Layout/Layout";
const Products = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  return (
    <>
      <Layout>
        <div>
          <div className="products">
            <div>
              <h2>{props.title}</h2>
            </div>
            <div>
              {products.map((product,index) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Products;
