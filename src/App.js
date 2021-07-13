import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import ShopAll from "./Pages/ShopAll";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop-all" component={ShopAll} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
