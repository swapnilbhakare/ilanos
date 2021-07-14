import Button from "../../../Components/Button/Button";
import Layout from "../../../Components/Layout/Layout";

import "./style.css";
const BestPrice = (props) => {
  return (
    <>
      <Layout>
        <div></div>
        <div>
          <h3>Save up to</h3>
          <h2>$150</h2>
          <h3>on selected laptop & tablets brands</h3>
          <span>Terms and conditions apply</span>
          <Button>Shop</Button>
        </div>
      </Layout>
    </>
  );
};

export default BestPrice;
