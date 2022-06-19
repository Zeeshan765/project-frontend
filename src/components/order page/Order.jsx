import React, { useState } from "react";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router";
import apiService from "../../services/ApiService";
import dp from "../Register/bg.jpg";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  Radio,
  Icon,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
//import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { deepOrange, purple } from "@material-ui/core/colors";
import "./Order.css";
import { Dropdown } from "bootstrap";
import { CreditCard, LocalShipping } from "@material-ui/icons";
//const KEY = process.env.REACT_APP_STRIPE;
const KEY =
  "pk_test_51KjbNHLoabZssHHofWiLVgSqVV4cMVrz9Kjav5dCBTXNuDzCt2upUXymf3cDa9Ovb5dDjjJCopnKoo5GtSKV6axa00TuBA0197";
const Order = () => {
  const history = useHistory();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Lahore");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [items, setItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState("cod");
  const [stripeToken, setStripeToken] = useState(null);
  const type = "Cash On Delivery";
  //console.log(token)
  console.log("items");
  console.log(items);

//Get Phone Number
React.useEffect(() => {
  apiService.get("api/user/find").then((res) => {
    console.log(res.data);
   
    setPhoneNumber(res.data.phone);
  });
}, []);



  //Handle o Token
  const onToken = (token) => {
    setStripeToken(token);
  };

  //Handle Radio Button Function
  function handleChange(e) {
    setSelectedOption(e.target.value);
  }

//get phone number of user


  const getData = () => {
    apiService.get("/api/data/carts/complete").then((res) => {
      //console.log(res.data.items[0].product.name);
      console.log("Data from  Backend");
      console.log(res.data.cart);
      console.log(res.data.totalPrice);
      setAmount(res.data.totalPrice);
      setItems(res.data.cart);
      // //setQuantity(res.data.items.quantity)
    });
  };
  React.useEffect(getData, []);
  //let val = 500;
  React.useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await apiService.post("/api/checkout/payment", {
          tokenId: stripeToken.id,
          //amount: {amount},
          amount: amount,
        });
        history.push("/Success", {
          stripeData: res.data,
          orderItems: items,
          amount,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, amount, history]);

  const handleorder = (e) => {
    e.preventDefault();

    apiService
      .post("/api/orders/newCustomOrder", {
        address,
        city,
        phoneNo: phoneNumber,
        amount,
        orderItems: items,
        type,
      })
      .then((res) => {
      //  console.log("response");
        console.log(res.data);
        toast.success("Order  has been Placed Successfully");
      history.push("/SimpleSuccess")
        // swal({
        //   title: 'Congratulations!',
        //   text: 'Logged In Successfully',
        //   icon: 'success',
        //   button: 'Ok ',
        // });

      });
  };
  const validation = (e) => {
    e.preventDefault();
    if (address === "") {
      toast.error("Please Enter Address");
    } else if (city === "") {
      toast.error("Please Enter City");
    }  else {
      handleorder(e);
      

    }
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "-30px",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "50%",

      margin: "auto",

      padding: "10px",
      backgroundColor: "black",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px #000",
    },

    paper: {
      margin: theme.spacing(8, 6),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    icon: {
      fontSize: "50px",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    radio: {
      color: purple[500],
      "&.Mui-checked": {
        color: purple[400],
      },
    },
    textField: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 0,
      marginTop: "50px",
      fontWeight: 500,
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",

      border: "2px solid #000",
    },
    input: {
      color: "white",
      backgroundColor: "#362245",
      height: 80,
      fontSize: "25px",
    },
    button: {
      backgroundColor: "#362245",
      fontSize: "20px",
      fontWeight: 500,
      color: "white",
      padding: "30px",
      marginLeft: "10px",
      "&.Mui-hover": {
        backgroundColor: purple[400],
        border: "2px solid #000",
      },
    },
    checkBox: {
      color: "white",
    },
    InputLabel: {
      marginRight: "auto",
      padding: "10px",
      // border: "2px solid #000",
      color: "white",
      marginTop: "50px",
      fontSize: "25px",
      backgroundColor: "#362245",
      border: "2px solid #000",
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",

      width: "50%",
    },
    select: {
      color: "white",
      fontSize: "20px",
      backgroundColor: "#362245",

      marginLeft: "40%",
    },
    Link: {
      color: "white",
      fontSize: "18px",
      marginTop: "40px",
    },
    SignText: {
      color: "white",
      fontSize: "42px",
      marginTop: "5px",
    },

    floatingLabelFocusStyle: {
      color: "white",
      fontSize: "20px",
    },

    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <div>
        <div className="orderTitle">Order Summary</div>
      </div>
      <div className="cart-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          {console.log(items)}

          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                {/* <td className='quant'>
                  <button onClick={(e) => handledecrement(item._id)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={(e) => handleincrement(item._id)}>+</button>
                  {/* <button
                  // style={{ height: '10px', width: '10px' }}
                  // className='btnDec'
                  // variant='primary'
                  //onClick={decrementCount}
                  >
                    -
                  </button> */}
                {/* <p className='countText'>{item.quantity}</p> */}
                {/* <button
                  // style={{ height: '10px', width: '10px' }}
                  // className='btnInc'
                  // variant='primary'
                  //onClick={incrementCount}
                  >
                    +
                  </button> */}
                {/* </td> */}
              </tr>
            ))}
            <br />
            <tr>
              <td>Total: {amount} RS/-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="addProductTitle">Payment Method</h3>
        <div className="radio">
          <label className="radioLabel">
            <Radio
              className={classes.radio}
              color="secondary"
              // type="radio"
              value="cod"
              onChange={(e) => {
                handleChange(e);
              }}
              checked={selectedOption === "cod"}
            />
            Cash on Delivery <LocalShipping />
          </label>

          <label className="radioLabel">
            <Radio
              className={classes.radio}
              color="secondary"
              // type="radio"
              value="card"
              onChange={(e) => {
                handleChange(e);
              }}
              checked={selectedOption === "card"}
            />
            Credit/Debit Card <CreditCard />
          </label>
        </div>
      </div>
      <br />
      <div>
        {selectedOption === "cod" ? (
          <div>
            <Grid container component="main" className={classes.root}>
              {/* <Grid item md={7} className={classes.image} /> */}
              <Grid item style={{ backgroundColor: "#180c2b" }} md={12}>
                <div style={{ color: "#474745" }} className={classes.paper}>
                  <Typography
                    className={classes.SignText}
                    component="h1"
                    variant="h5"
                  >
                    Cash on Delivery
                  </Typography>
                  <form className={classes.form} noValidate>
                    <TextField
                      required={true}
                      className={classes.textField}
                      InputLabelProps={{
                        className: classes.floatingLabelFocusStyle,
                      }}
                      InputProps={{
                        className: classes.input,
                      }}
                      variant="filled"
                      margin="normal"
                      value={address}
                      color="secondary"
                      fullWidth
                      id="address"
                      label="Billing Address"
                      name="address"
                      autoComplete="address"
                      autoFocus
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                    <br />
                    <InputLabel
                      fullWidth
                      margin="normal"
                      required={true}
                      className={classes.InputLabel}
                      id="city"
                    >
                      City
                      <Select
                        autoFocus
                        className={classes.select}
                        labelId="city"
                        id="city"
                        value={city}
                        label="City"
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      >
                        <MenuItem value={"Lahore"}>Lahore</MenuItem>
                        <MenuItem value={"Sheikhupura"}>Sheikhupura</MenuItem>

                        <MenuItem value={"Gujranwala"}>Gujranwala</MenuItem>
                      </Select>
                    </InputLabel>

                    <br />
                    <TextField
                      required={true}
                      className={classes.textField}
                      InputLabelProps={{
                        className: classes.floatingLabelFocusStyle,
                      }}
                      InputProps={{
                        className: classes.input,
                      }}
                      variant="filled"
                      margin="normal"
                      color="secondary"
                      fullWidth
                      value={phoneNumber}
                      id="Phone"
                      label="Phone"
                      name="Phone"
                      autoComplete="Phone"
                      autoFocus
                      // onChange={(e) => {
                      //   setPhoneNumber(e.target.value);
                      // }}
                    />
                    <br />

                    <Grid
                      container
                      justify="flex-end"
                      spacing={4}
                      style={{ padding: 20 }}
                    ></Grid>

                    <Grid
                      container
                      justify="space-around"
                      spacing={4}
                      style={{ padding: 20 }}
                    ></Grid>
                    {/* <Button className={classes.button} onClick={handleupdate}>
                      {" "}
                      Update{" "}
                    </Button>
                    <Button className={classes.button} onClick={handlechange}>
                      {" "}
                      Change Password{" "}
                    </Button> */}
                  </form>
                  <Button className={classes.button} onClick={validation}>
                    Confirm Order
                  </Button>
                </div>
              </Grid>
            </Grid>

            {/* <form className="addProductForm">
              <div>
                <select
                  name="City"
                  id="City"
                  className="CityDropDown"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                >
                  City
                  <option disabled selected>
                    {" "}
                    Select City{" "}
                  </option>
                  <option value="Lahore">Lahore</option>
                  <option value="Sheikhupura">Sheikhupura</option>
                  <option value="Multan">Multan</option>
                </select>
              </div>
              <br />
              <div className="addProductItem">
                <label>Billing Address</label>
                <input
                  className="billingAddress"
                  type="text"
                  value={address}
                  placeholder="Enter Address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>

              <br />

              <div className="addProductItem">
                <label>Phone No.</label>

                <input
                  value={phoneNumber}
                  type="text"
                  placeholder="Enter Phone No."
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
              <button onClick={validation}>Confirm Order</button>
            </form> */}
          </div>
        ) : (
          <div>
            <StripeCheckout
              name="Multiverse Of Computers"
              image={dp}
              billingAddress
              description={`Your total is ${amount}`}
              // description={500}
              amount={amount * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <div className="cardpayment">
                <Button
                  style={{
                    backgroundColor: "#362245",
                    border: "2px solid #000",
                    fontWeight: "600",
                  }}
                  className={classes.button}
                >
                  Proceed with Card Payment
                </Button>
              </div>
            </StripeCheckout>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
