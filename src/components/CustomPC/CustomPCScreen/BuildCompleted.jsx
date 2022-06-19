import React from "react";
import { useState } from "react";
import Cart from "./CustomCart";
import { useSelector } from "react-redux";
import "./BuildCompleted.css";
import { getCartItems } from "../../../Redux/cartRedux";
import apiService from "../../../services/ApiService";
import { toast } from "react-toastify";
import CustomCart from "./CustomCart";
import { useHistory } from "react-router";

export default function BuildCompleted() {
  const cartItems = useSelector(getCartItems);
  const type = "Custom";
  const history = useHistory();

  const [cartDisplay, setcartDisplay] = useState(false);
  const handlecart = async () => {
    console.log(cartItems);
    await apiService
      .post("/api/data/carts/cartarray", { array: cartItems, type: type })
      .then((res) => {
        console.log(res);
        toast.success("Add To Cart Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
        history.push("/thankyou-custom")
       // window.location.href="/thankyou-custom"
      });
  };
  function showCart() {
    setcartDisplay(true);
  }
  function hideCart() {
    setcartDisplay(false);
  }
  return (
    <div>
      <h3 className="mainheading">Your Build</h3>
      <CustomCart></CustomCart>
      {/* <button onClick={showCart} className="viewbtn">
        View My Build
      </button>
      {cartDisplay && (
        <div> 
          <Cart />{" "}
          <button onClick={hideCart} className="viewbtn">
            Close
          </button>
        </div>
      )} */}
      <button className="addtocartbtn" onClick={handlecart}>Add To Cart</button>
    </div>
  );
}
