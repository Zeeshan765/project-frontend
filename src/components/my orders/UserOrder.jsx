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

  // status type color
  const statusColor = (status) => {
    if (status === "Pending") {
      return "#cf9f0e";
    } else if (status === "Delivered") {
      return "#28a745";
    } else if (status === "cancelled") {
      return "#dc3545";
    }
  };


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
                <td>Rs. {order.amount}</td>
                <td style={{ color: statusColor(order.status) }} >{order.status}</td>
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
