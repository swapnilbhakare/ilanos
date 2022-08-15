import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const FilterBy = () => {
  return (
    <>
      <div className="filter">
        <h2>Filter By</h2>
        <ul>
          <li>
            <Link to="/shopAll">All</Link>
          </li>

          <li>
            <Link to="/computer">Computer</Link>
          </li>
          <li>
            <Link to="/tablet">Tablet</Link>
          </li>
          <li>
            <Link to="/camera"> Drones & Cameras </Link>
          </li>
          <li>
            <Link to="/headphones"> Headphones </Link>
          </li>
          <li>
            <Link to="/speakers">Speakers</Link>
          </li>
          <li>
            <Link to="/mobile">Mobile</Link>
          </li>
          <li>
            <Link to="/tv">TV & Home Cinema </Link>
          </li>
          <li>
            <Link to="/watch">Wearable Tech </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FilterBy;
