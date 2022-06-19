import React, { useState } from "react";
import { toast } from "react-toastify";
import apiService from "../../services/ApiService";
import "./Order.css";
const Order = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [items, setItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState("cod");
  console.log("items");
  console.log(items);

  function handleChange(e) {
    setSelectedOption(e.target.value);
  }
  const getData = () => {
    apiService.get("/api/data/carts/cartarray").then((res) => {
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

  const handleorder = (e) => {
    e.preventDefault();

    apiService
      .post("/api/orders/newOrder", {
        address,
        city,
        phoneNo: phoneNumber,
        amount,
        orderItems: items,
      })
      .then((res) => {
        console.log("response");
        console.log(res.data);
        toast.success("Order  has been Placed Successfully");
      });
  };

  return (
    <div>
      <div>
        <h3> My PC Build</h3>
      </div>
      <div className="cart-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Specifications</th>
              <th>Price</th>
            </tr>
          </thead>
          {console.log(items)}

          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>

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
          <label>
            <input
              type="radio"
              value="cod"
              onChange={(e) => {
                handleChange(e);
              }}
              checked={selectedOption === "cod"}
            />
            Cash on Delivery
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="card"
              onChange={(e) => {
                handleChange(e);
              }}
              checked={selectedOption === "card"}
            />
            Credit/Debit Card
          </label>
        </div>
      </div>
      <div>
        {selectedOption === "cod" ? (
          <div>
            <form className="addProductForm">
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
              <button onClick={handleorder}>Confirm Order</button>
            </form>
          </div>
        ) : (
          <div>Stripe Method</div>
        )}
      </div>
    </div>
  );
};

export default Order;
