import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import apiService from "../../services/ApiService";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

// import orderService from "../../Services/OrderService";
import Card from "react-bootstrap/Card";
import { CardContent } from "@material-ui/core";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
// import Auth from "../../AuthWrapper/IsLoginFalse";
// import { NameBar } from "../../Styles/NameBar";
// import LoadingScreen from "../../Components/LoadingScreen";
// import { MidPager } from "../../Styles/MidPager";
// import moment from "moment";
import { useHistory } from "react-router-dom";
import { styled } from "@material-ui/styles";
import { toast } from "react-toastify";
// import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

const Links = styled(Typography)({
  color: "black",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
    color: "#ba6a62",
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    justifyContent: "center",
  },
}));

export default function OrderHistory(props) {
  console.log(props);
  const classes = useStyles();
  const history = useHistory();

  const [orders, setOrders] = useState([]);

  const [orderDetails, setorderDetails] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  //Get User Orders
  const getData = () => {
    apiService.get("/api/orders/myorders").then((res) => {
      setOrders(res.data);
      console.log(res.data);
    });
  };
  React.useEffect(getData, []);

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <Box m={2}>
          <Card sx={{ backgroundColor: "#fafafa" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Typography color="primary">Order Id</Typography>
                  <Typography noWrap sx={{ width: "30ch" }}></Typography>
                </Box>
                <Links
                // onClick={() => {
                //   history.push("/orderdetail/" + order._id);
                // }}
                >
                  View
                </Links>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: {
                    xs: "start",
                    sm: "start",
                    md: "center",
                    lg: "center",
                  },
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  },
                  height: {
                    xs: "60",
                    sm: "60",
                    md: "50",
                    lg: "50",
                  },
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Typography color="primary">Order Amount</Typography>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    //   onClick={() => {
                    //     history.push("/seller/" + order.Seller._id);
                    //   }}
                  >
                    {/* {order.Seller.storeName} */}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography color="primary">Order Status</Typography>
                  <Typography>
                    {/* {moment(order.createdAt).format("lll")} */}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography color="primary">Post Review</Typography>
                  {/* <Typography>{order.status}</Typography> */}
                </Box>

                <Button
                //   disabled={order.status !== "PLACED" ? true : false}
                // onClick={() => {
                //   orderService
                //     .cancelOrder(order._id)
                //     .then((data) => {
                //       console.log(data);
                //       Orders();
                //       toast.success(data.data, {
                //         position: toast.POSITION.BOTTOM_LEFT,
                //       });
                //     })
                //     .catch((error) => {
                //       console.log(error.response);
                //       toast.error(error.response.data, {
                //         position: toast.POSITION.BOTTOM_LEFT,
                //       });
                //     });
                // }}
                >
                  cancel Order
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <>
        {/* <MidPager name={error} /> */}
        <Typography
          sx={{
            display: "flex",
            fontSize: "20px",
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Typography>
      </>
    </Box>
  );
}
