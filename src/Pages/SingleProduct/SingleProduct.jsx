import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import Button from "../../Components/Button/Button";
import styled from "./SingleProduct.module.css";
const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [readMore, setReadMore] = useState(false);

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`/api/products/${params._id}`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        setProduct(product);
      });
  }, [params._id]);
  const {image,name,price,category,desc} = product
  return (
    <>
      <div className={styled.singleProduct}>
        <div>
          <button
            className={styled.backBtn}
            onClick={() => {
              history.goBack();
            }}
          >
            <i className={`${styled.icon} fas fa-long-arrow-alt-left`}></i>
          </button>
        </div>
        <Layout>
          <div className={styled.productCard}>
            <div className={styled.imageWrapper}>
              <img src={image} alt={name} />
            </div>
            <div className={styled.infoWrapper}>
              <h3>{name}</h3>
              <h4>₹ {price}</h4>
              <h4> category {category}</h4>

              <Button>Add to Cart</Button>
              <button className={styled.btn}>
                <i class="far fa-heart"></i>
              </button>
              <h5>Product Info : </h5>
             
        <p>
          {desc}
        </p>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default SingleProduct;
