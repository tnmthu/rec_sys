import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./containers/Homepage";
import ProductPage from "./containers/ProductPage";

const tmp = {
  itemName:
    "Máy đọc sách Kindle PaperWhite Gen 4 (10th) - Bản 8GB 2019 - Hàng chính hãng",
  itemImage:
    "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
  itemPrice: 123456,
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/product">
          <ProductPage item={tmp} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
