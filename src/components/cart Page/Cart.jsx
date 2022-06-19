import React, { useEffect, useState } from "react";
import "./cart.css";
import { toast } from "react-toastify";
import axios from "axios";
import apiService from "../../services/ApiService";
import { setProductTotal } from "../../Redux/cartRedux";
import PCBuildCart from "./PCBuildCart";
import { setBuildTotal } from "../../Redux/cartRedux";

import { useDispatch, useSelector } from "react-redux";
import { getProductTotal, getBuildTotal } from "../../Redux/cartRedux";
import { DeleteOutline, DeleteOutlineOutlined } from "@material-ui/icons";
import { Button } from "react-bootstrap";
import ProductCart from "./ProductCart";

const Cart = () => {
  const [productTotal, setproducttotal] = useState("");
  const [items1, setItems1] = useState([]);
  const [CustomTotal, setCustomTotal] = useState("");
  const [items, setItems] = useState([]);
  const [gt, setGT] = useState(0);
  const [deletedID, setDeletedID] = useState("");
  const bt = useSelector(getBuildTotal);
  console.log("price");
  console.log(bt)
  useEffect(() => {
    setGT(productTotal + CustomTotal);
  }, [productTotal, CustomTotal]);

  const getAction = (e) => {
    setDeletedID(e);
  };
  //const gt = productTotal + bt;

  const dispatch = useDispatch();
  //const pt = useSelector(getProductTotal);
  //   const pt = productTotal;
  //   const bt = useSelector(getBuildTotal);
  //   const gt = pt + bt;
  // console.log("y");
  // console.log(gt);

  // //console.log(quantity);
  const getData = () => {
    apiService.get("/api/data/carts").then((res) => {
      //console.log(res.data.items[0].product.name);

      console.log("Data from  Simple");
      console.log(res);
      console.log(res.data.totalPrice);
      setproducttotal(res.data.totalPrice);
      setItems1(res.data.cart);
      //dispatch(setProductTotal(productTotal));
      // //setQuantity(res.data.items.quantity)
    });
  };
  React.useEffect(getData, [deletedID]);

  const getData2 = () => {
    apiService.get("/api/data/carts/cartarray").then((res) => {
      //console.log(res.data.items[0].product.name);

      console.log("Data from  Backend");
      console.log(res.data);
      console.log(res.data.totalPrice);
      setCustomTotal(res.data.totalPrice);

      setItems(res.data.cart);
      dispatch(setBuildTotal(CustomTotal));
      // //setQuantity(res.data.items.quantity)
    });
  };
  React.useEffect(getData2, [deletedID]);

  // const handledeleteitem = (_id) => {
  //   axios
  //     .patch("/api/data/carts/deleteItem/" + _id)
  //     .then((res) => {
  //       console.log(res.data);
  //       toast.success("Item Deleted Successfully");

  //       setItems((items) => {
  //         return items.filter((item) => {
  //           return item._id == _id;
  //         });
  //       });
  //       getData();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error(err.response.data, {
  //         position: toast.POSITION.TOP_LEFT,
  //       });
  //     });
  // };
  const handleconfirm = () => {
    window.location.href = "/order";
  };
  // const handledecrement = (_id) => {
  //   axios.patch('/api/data/carts/decrement/' + _id).then((res) => {
  //     console.log(res);
  //     getData();
  //   });
  // };
  // const handleincrement = (_id) => {
  //   console.log(_id);
  //   //setQuantity(quantity + 1);
  //   axios.patch('/api/data/carts/increment/' + _id).then((res) => {
  //     console.log(res);
  //     getData();
  //   });
  // };
  const clearcart = () => {
    apiService
      .delete("/api/data/carts/clear")
      .then((res) => {
        console.log(res.data);
        toast.success("Cart has been  Deleted Successfully", {
          theme: "colored",
        });
        // getData();
        window.location.href = "/shop-cart";
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
          theme: "colored",
        });
      });
  };

  return (
    <>
      {items1?.length === 0 && items?.length === 0 ? (
        <div class="center">
          <h1>There are no items in the Cart</h1>
        </div>
      ) : (
        <>
          <ProductCart delete={getAction} />
          <PCBuildCart delete={getAction} />
          <h3 className="Gtotal">
            {" "}
            <span className="grandTotal"> Grand Total: </span> Rs. {gt}
          </h3>
          <Button className="ord-btn" onClick={handleconfirm}>
            {" "}
            Order
          </Button>
          <Button className="clr-btn" onClick={clearcart}>
            Clear Cart
          </Button>
          {/* // </>
      // )} */}
        </>
      )}
    </>
  );
};

export default Cart;
