import React, { useEffect, useState } from "react";
import apiService from "../../services/ApiService";


import "./NewView.css";


const NewView = (props) => {
  const [orders, setOrders] = useState([]);
 

  const product = props.match.params.id;



  //Get User Orders
  const getData = () => {
    apiService.get("/api/orders/myorders").then((res) => {
      setOrders(res.data.filter((order) => order._id === product));
      console.log(res.data);
    });
  };
  React.useEffect(getData, []);

  return (
    <>
      <table className="data-table">
        <thead>
          <tr>
          <th>Product Id</th>

            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            
          </tr>
        </thead>
        <tbody>
          {orders[0]?.orderItems.map((order, index) => (
            <tr key={index}>
              <td>{order._id}</td>

              <td>{order.name}</td>
              <td>{order.price}</td>
              <td>{order.quantity}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    
    </>
  );
};

export default NewView;
