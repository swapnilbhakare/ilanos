import Featurette from "../../../Components/Featurette/Featurette";
import styles from "./BestPrice.module.css";
import Button from "../../../Components/Button/Button";
const BestPrice = (props) => {
  return (
    <>
      <Featurette
      image='/images/laptop-2.png'
        title="₹1500"
        discount="Save up to"
        subTitle="on selected laptop & tablets brands"
        offersConditions="Terms and conditions apply"
      >
        <Button styled={styles.buttonStyle}>Shop</Button> 
        <div className={styles.span}>
            <p className={styles.spanItem}>Best Price</p>
          </div>
      </Featurette>
    </>
  );
};

export default BestPrice;
