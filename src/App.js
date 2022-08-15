import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import ShopAll from "./Pages/ShopAll/ShopAll";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
function App() {
  // const [cart, setCart] = useState({});
  // // Fetch cart from local storage
  // useEffect(() => {
  //   getCart().then((cart) => {
  //     setCart(JSON.parse(cart));
  //   });
  // }, []);
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop-all" component={ShopAll} />
          <Route path="/products/:_id" component={SingleProduct} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
