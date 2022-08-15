import React from "react";
import styles from "./SortBy.module.css";
const SortBy = () => {
  return (
    <>
      <select className={styles.styleGroup}>
        <select >Shop All</select>
        <option >Newest</option>
        <option >Price (Low to High)</option>
        <option >Price (High to Low)</option>
        <option >Name A To Z</option>
        <option >Name Z To A</option>
      </select>
    </>
  );
};

export default SortBy;
