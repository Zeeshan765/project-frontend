import React, { useState } from "react";
import apiService from "../../services/ApiService";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { Modal, Box } from '@material-ui/core';
import "./userOrder.css";
import { toast } from "react-toastify";

const UserOrder = (props) => { 
  const [orders, setOrders] = useState([]);
  const [orders1, setOrders1] = useState([]);

  const[orderid,setOrderid]=useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

console.log(orderid)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  function handleView(order) {
    apiService.get("/api/orders/mysinglefind/" + orderid).then((res) => {
           setOrders1(res.data.orderItems);
          console.log("single")
          handleOpen();
      //   // console.log(res.data.orderItems[1]);
        });
    // setOpen(true);
  }


  //Get User Orders
  const getData = () => {
    apiService.get("/api/orders/myorders").then((res) => {
      setOrders(res.data);
      // setOrders1(res.data.orderItems)
      // console.log(res.data);
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
              <th>Action</th>
              <th>View Order</th>
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
                 <button>
                  Cancel Order
                 </button>

                </td>

                <td>
                 <button   onClick={() => {
                      handleView(order);
                       setOrderid(order._id);
                    }}>
                  View Order
                 </button>

                </td>
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






<Modal
          // className="modal"
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
          <button className="close-btn" onClick={handleClose}>
            CLOSE
          </button>
          <table className="data-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
            </tr>
          </thead>
          <tbody>
            {/* {orders.map((order, index) => ( */}
            {orders1.map((order1, index) => (
              <tr key={index}>
            
              
                <td>{order1.name}</td>
                <td>{order1.price}</td>
                <td>{order1.quantity}</td>
                              </tr>
                              
                              ))}
            {/* ))} */}
          </tbody>
        </table>
            
          </Box>
        </Modal>



    </>
  );
};

export default UserOrder;
