import React from "react";

import CustomCartComp from "./CustomCartComp";
import { useSelector } from "react-redux";
import { getCartItems } from "../../../Redux/cartRedux";
export default function CustomCart() {
  const cartitems = useSelector(getCartItems);

  return (
    <div className="TrendingProduct-container">
      {cartitems.map((item, index) => (
        <CustomCartComp
          style={{ backgroundcolor: "red" }}
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}
