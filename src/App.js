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
  itemDescription:
    "Loại màn hình: Carta HD 6 inch Bộ nhớ 8GB Mật độ điểm ảnh: 300 ppi. Thời gian sử dụng pin 4 tuần 30ph/ ngày Không bị màn hình chói lóa. Tích hợp đèn - đọc mà không có mỏi mắt Dễ dàng lật trang và ghi chú lên sách",
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path={`/product/:name`}>
          <ProductPage item={tmp} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
