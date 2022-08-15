import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
const BrandingNav = () => {
  return (
    <div>
      <div className="branding-nav">
        <div className="brand-container">
          <div className="logo-wrapper">
            <Link to="/">
              <h2>ilanoS</h2>
            </Link>
          </div>
          <div className="search-wrapper">
            <input type="search" placeholder="Search..." />
            {/* <button>
                <i className="fas fa-search"></i>
              </button> */}
            <Button>
              <i className="fas fa-search"></i>
            </Button>
          </div>
        </div>
        <div className="cart-wrapper">
          <Link to="/login">
            <i className="fas fa-user-circle"></i>
            <span>login</span>
          </Link>
          <Link to="/favorites">
            <i className="far fa-heart"></i>
            <span>Favorites</span>
          </Link>
          <Link to="/cart">
            <i className="fas fa-shopping-basket"></i>
            <span>100</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandingNav;
