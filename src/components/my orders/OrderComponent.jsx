/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import OrderItems from "./OrderItems";
import Divider from "@material-ui/core/Divider";
import moment from "moment";
import { useHistory } from "react-router-dom";
// import { OrderComponentHeading } from "../../Styles/MyTypographies";
// import { FlexBox, SpaceBetween } from "../../Styles/StyledBox";
// import LoadingScreen from "../../Components/LoadingScreen";
import { toast } from "react-toastify";
import apiService from "../../services/ApiService";
// import orderService from "../../Services/OrderService";
import { useParams } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  text: {
    color: "black",
  },
}));

export default function OrderComponent() {
  const orderId = useParams();
  const classes = useStyles();
  const [index, setindex] = useState();

  const [orders, setOrders] = useState("");
  const [loading, setloading] = useState(false);

  //Get User Orders
  // const getData = () => {
  //   apiService.get("/api/orders/myorders").then((res) => {
  //     setOrders(res.data);
  //     console.log(res.data);
  //   });
  // };
  // React.useEffect(getData, []);

  // const Orders = () => {
  //   setloading(true);
  //   apiService
  //     .orderDetails(orderId.id)
  //     .then((data) => {
  //       setloading(false);
  //       setOrders(data.data);
  //     })
  //     .catch((error) => {
  //       setloading(false);
  //       console.log(error);
  //     });
  // };
  // useEffect(Orders, []);

  // const ButtonLabel = () => {
  //   if (orders.status === "PLACED") {
  //     setindex(1);
  //     console.log("Placed");
  //   }
  //   if (orders.status === "PACKAGING") {
  //     setindex(2);
  //   }
  //   if (orders.status === "SHIPPING") {
  //     setindex(3);
  //   }
  //   if (orders.status === "DELIVERED" || orders.status === "RETURNED") {
  //     setindex(4);
  //   }
  // };
  // useEffect(ButtonLabel, [orders]);

  return (
    <Box
      m={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
        },
      }}
    >
      {/* <LoadingScreen bool={loading} /> */}
      {/* {orders && ( */}
      <Card
        sx={{
          backgroundColor: "#fafafa",
          width: {
            xs: "800px",
            sm: "800px",
            md: "800px",
            lg: "800px",
            xl: "800px",
          },
        }}
      >
        <CardContent
          sx={{
            padding: {
              xs: "0",
              sm: "0",
              md: "20",
              lg: "20",
              xl: "20",
            },
          }}
        >
          <Box
            m={2}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },

              justifyContent: "space-between",
            }}
          >
            {/* <OrderComponentHeading>Order# </OrderComponentHeading> */}
            <Typography>orders</Typography>

            {/* <Button
                  disabled={orders.status !== "PLACED" ? true : false}
                  onClick={() => {
                    orderService
                      .cancelOrder(order._id)
                      .then((data) => {
                        console.log(data);
                        Orders();
                        toast.success(data.data, {
                          position: toast.POSITION.BOTTOM_LEFT,
                        });
                      })
                      .catch((error) => {
                        console.log(error.response);
                        toast.error(error.response.data, {
                          position: toast.POSITION.BOTTOM_LEFT,
                        });
                      });
                  }}
                >
                  cancel Order
                </Button> */}
          </Box>

          <Card sx={{ margin: "10px" }}>
            <CardContent>
              {/* {orders.items.map((items) => ( */}
                {/* <OrderItems
                
                  orderId={orders._id}
                  orderStatus={orders.status}
                  items={items}
                  key={items._id}
                /> */}
              {/* ))} */}<Typography>Product Name</Typography>
            </CardContent>
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Card sx={{ margin: "10px" }}>
              <CardContent>
                <Typography>Sub Total</Typography>
                <Typography>PKR. </Typography>

                <Box sx={{ width: "25%" }}></Box>
                <Typography>PKR. </Typography>

                <Divider />

                {/* <OrderComponentHeading>Total</OrderComponentHeading> */}
                <Typography>PKR. </Typography>

                <Divider />

                {/* <OrderComponentHeading>Advance</OrderComponentHeading> */}
                <Typography>PKR. </Typography>

                {/* <OrderComponentHeading>
                      Cash on Delivery
                    </OrderComponentHeading> */}
                <Typography>PKR. </Typography>
              </CardContent>
            </Card>
            <Card sx={{ margin: "10px" }}>
              <CardContent>
                {/* <OrderComponentHeading>
                    Shipping Details
                  </OrderComponentHeading> */}

                {/* <OrderComponentHeading>Name</OrderComponentHeading> */}
                <Typography>buyers</Typography>

                {/* <OrderComponentHeading>Address</OrderComponentHeading> */}
                <Box sx={{}}>
                  <Typography align="right" className={classes.text}>
                   address
                  </Typography>
                </Box>

                {/* <OrderComponentHeading>City</OrderComponentHeading> */}
                <Typography>city</Typography>

                {/* <OrderComponentHeading>Phone</OrderComponentHeading> */}
                <Typography>contact</Typography>
              </CardContent>
            </Card>
          </Box>
        
        </CardContent>
      </Card>
      {/* // )} */}
    </Box>
  );
}
