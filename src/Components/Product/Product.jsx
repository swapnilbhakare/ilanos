import React from "react";
import { Link } from "react-router-dom";
const Product = (props) => {
  const{product}=props
  return (
    <>
      <Link to={`/products/${product._id}`} className="product" style={props.gorw}>
        {product.onSale ? <h6>Sale</h6> : ""}
        <div >
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <p>{product.name}</p>
          <span>$ {product.price}</span>
        </div>
      </Link>
    </>
  );
};

export default Product;
