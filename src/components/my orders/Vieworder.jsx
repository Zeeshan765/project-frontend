import React, { useEffect, useState } from "react";
import apiService from "../../services/ApiService";
import Rating from "@material-ui/lab/Rating";

import { Modal, Box } from "@material-ui/core";

import "./vieworder.css";
import { toast } from "react-toastify";

const Vieworder = (props) => {
  const [orders, setOrders] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentOrderID, setCurrentOrderID] = useState(null);
  const [currentOrdertype, setCurrentOrdertype] = useState(null);

  const product = props.match.params.id;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  function handleView() {
    console.log("view");
    setOpen(true);
  }

  //post rating and comment
  const handlecomment = (e) => {
    e.preventDefault();
    if (comment.length === 0) {
      toast.error("Comment Cannot be Empty");
    } else {
      apiService
        .post(`/api/components/comments/${currentOrderID}`, {
          rating,
          comment,
          type:currentOrdertype,
        })
        .then((res) => {
          console.log(res.data);
          toast.success("Comment Added Successfully", {
            theme: "colored",
          });
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.response.data);
          toast.error(err.response.data, {
            position: toast.POSITION.TOP_LEFT,
          });
        });
    }
  };

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
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders[0]?.orderItems.map((order, index) => (
            <tr key={index}>
              <td>{order._id}</td>
              <td>{order.price}</td>
              <td>
                <button
                className="add-comment"
                  onClick={() => {
                    handleView();
                    setCurrentOrderID(order._id);
                    setCurrentOrdertype(order.type);
                  }}
                >
                  Add Comment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        // className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4>Rate This Product</h4>
          <Rating
            name="simple-controlled"
            value={rating}
            precision={0.5}
            onChange={(event, newRating) => {
              setRating(newRating);
            }}
          />
          <hr></hr>
          <h4>Comment</h4>
          <input
            className="inputCom"
            type="text"
            placeholder="Enter Comments Here "
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />

          <button className="post-btn" onClick={handlecomment}>
            Post Comment
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default Vieworder;
