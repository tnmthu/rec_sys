import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./containers/Homepage";
import ProductPage from "./containers/ProductPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/product">
          <ProductPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
