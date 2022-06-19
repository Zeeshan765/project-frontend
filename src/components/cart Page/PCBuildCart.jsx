import React, { useState } from "react";
import "./PCBuild.css";
import { toast } from "react-toastify";
import axios from "axios";
import apiService from "../../services/ApiService";
import { useDispatch } from "react-redux";
import { setBuildTotal } from "../../Redux/cartRedux";
const PCBuildCart = () => {
  const [CustomTotal, setCustomTotal] = useState("");
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  //console.log(quantity);
  const getData = () => {
    apiService.get("/api/data/carts/cartarray").then((res) => {
      //console.log(res.data.items[0].product.name);

      console.log("Data from  Backend");
      console.log(res.data);
      console.log(res.data.totalPrice);
      setCustomTotal(res.data.totalPrice);

      setItems(res.data.cart);
      dispatch(setBuildTotal(CustomTotal));
      // //setQuantity(res.data.items.quantity)
    });
  };
  React.useEffect(getData, []);

  const handledeleteitem = (_id) => {
    axios.patch("/api/data/carts/deleteItem/" + _id).then((res) => {
      console.log(res);
      toast.success("Item Deleted Successfully");

      setItems((items) => {
        return items.filter((item) => {
          return item._id == _id;
        });
      });
    });
  };
  // const handleconfirm = () => {
  //   window.location.href = "/CustomOrder";
  // };
  // // const handledecrement = (_id) => {
  //   axios.patch('/api/data/carts/decrement/' + _id).then((res) => {
  //     console.log(res);
  //     getData();
  //   });
  // };
  // const handleincrement = (_id) => {
  //   console.log(_id);
  //   //setQuantity(quantity + 1);
  //   axios.patch('/api/data/carts/increment/' + _id).then((res) => {
  //     console.log(res);
  //     getData();
  //   });
  // };

  return (
    <>
      <div className="cart-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Custom PC Specs</th>
              <th>Price</th>
            </tr>
          </thead>
          {console.log(items)}

          <tbody>
            {items?.map((item, index) => (
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
          </tbody>
          <br />

          <tfoot className="footer">
            <tr>
              <td className="footertext">Total</td>
              <td className="footertext"> Rs. {CustomTotal}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default PCBuildCart;
