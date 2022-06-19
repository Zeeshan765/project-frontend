import React, { useState } from "react";
import apiService from "../../services/ApiService";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

import "./userOrder.css";
import { toast } from "react-toastify";

const UserOrder = (props) => {
  const [orders, setOrders] = useState([]);

  //Get User Orders
  const getData = () => {
    apiService.get("/api/orders/myorders").then((res) => {
      setOrders(res.data);
      console.log(res.data);
    });
  };
  React.useEffect(getData, []);

  return (
    <>
      {orders.length == 0 ? (
        <h1>There is No Order</h1>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Amount</th>
              <th>Order Status</th>
              <th>Post Review</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order._id}</td>
                <td>{order.amount}</td>
                <td>{order.status}</td>
                <td>
                  <VisibilityOutlinedIcon
                    onClick={(e) => {
                      //console.log("navigate to update");
                      if (order?.status === "Delivered") {
                        props.history.push("/view-myorder/" + order._id);
                      } else {
                        toast.error(
                          "You can't post review until you recieve the package",
                          { theme: "colored" }
                        );
                      }
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserOrder;
