import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import CardContainer from "../../components/CardContainer";
import "./style.scss";
import * as URL from "../../constants";

function Homepage() {
  const [homeItems, setHomeItems] = useState({});

  useEffect(() => {
    console.log('init');
    fetch(URL.homepageItems)
      .then((res) => res.json())
      .then((data) => setHomeItems(data))
      .catch((err) => console.error("Error fetch home items"));
  }, []);

  console.log(homeItems);
  return (
    <div className="Homepage">
      <Header
      ></Header>
      <div className="body mt-4 mx-auto ">
        <CardContainer sectionName="Sản phẩm hot" items={homeItems['hot_products']} />
          <CardContainer sectionName="Dành riêng cho bạn" items={homeItems['recommendations']} />
      </div>
    </div>
  );
}

export default Homepage;
