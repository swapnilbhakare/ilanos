import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <ul className="navbar">
      <Link to="/shop-all">Shop All</Link>
      <Link to="/computer">Computer</Link>
      <Link to="/tablets">Tablets</Link>
      <Link to="/cameras">Drones & Cameras</Link>
      <Link to="/audio">Audio</Link>
      <Link to="/mobile">Mobile</Link>
      <Link to="/tv-cinema">T.V & Home Cinema</Link>
      <Link to="/wearable-tech">Wearable tech</Link>
      <Link to="/sale">Sale</Link>
    </ul>
  );
};

export default Nav;
