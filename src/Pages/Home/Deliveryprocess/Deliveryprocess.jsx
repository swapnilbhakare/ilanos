import Layout from "../../../Components/Layout/Layout";

import styles from './DeliveryProcess.module.css'
const Deliveryprocess = () => {
 const icons =[
  {
   "id":1,
   "img":"/images/delivery-man.png",
   "desc":"Curb-side pickup"
  },
  {
   "id":2,
   "img":"/images/delivery-box.png",
   "desc":"Free shipping on orders over ₹50"
  },
  {
   "id":3,
   "img":"/images/price-tag.png",
   "desc":"Low prices guaranteed"
  },
  {
   "id":4,
   "img":"/images/24-hours.png",
   "desc":"Available to you 24/7 "
  }
]
  return (
    <>
      <Layout >
        {icons.map((icon) => {
          return (
            <div key={icon.id} className={styles.delivery}>
        <div>
          <div>
            <img src={icon.img} alt="delivery" />
          </div>
          <span>{icon.desc}</span>
        </div>
      </div>
          )
        })}
      </Layout>
    </>
  );
};

export default Deliveryprocess;
