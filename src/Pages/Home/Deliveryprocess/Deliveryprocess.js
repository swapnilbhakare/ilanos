import React, { useState, useEffect } from "react";
import Delivery from "../Delivery/Delivery";
import Layout from "../../../Components/Layout/Layout";

import "./style.css";
const Deliveryprocess = () => {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((icons) => {
        setIcons(icons.delivery);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Layout className="delivery">
        {icons.map((icon) => {
          return <Delivery key={icon.id} icon={icon} />;
        })}
      </Layout>
    </>
  );
};

export default Deliveryprocess;
