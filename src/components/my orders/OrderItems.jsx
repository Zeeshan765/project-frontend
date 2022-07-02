import React from "react";
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
// import CommentWriting from "../../Components/PopUps/CommentWriting";


export default function OrderItems({ items, orderStatus, orderId }) {
  console.log(items); 
  return (
    <>
      {" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography>{items.productName}</Typography>
        </Box>
        <Box sx={{ width: "25%" }}>
          <Typography align="center">Qty: {items.quantity}</Typography>
        </Box>
        <Box sx={{ width: "25%" }}>
          <Typography align="center">PKR. {items.totalPrice}</Typography>
        </Box>
        {orderStatus === "DELIVERED" ? (
          <Box sx={{ width: "25%" }}>
            {/* <CommentWriting orderId={orderId} itemId={items._id} /> */}
          </Box>
        ) : (
          <></>
        )}
      </Box>
      <Divider />
    </>
  );
}
