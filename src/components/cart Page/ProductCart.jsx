import "./productCart.css";
import React from "react";
import useState from "react-usestateref";
import "./cart.css";
import { toast } from "react-toastify";
import axios from "axios";
import apiService from "../../services/ApiService";
import { setProductTotal } from "../../Redux/cartRedux";
import PCBuildCart from "./PCBuildCart";
import { useDispatch, useSelector } from "react-redux";
import { getBuildTotal } from "../../Redux/cartRedux";
import { DeleteOutline, DeleteOutlineOutlined } from "@material-ui/icons";
import { Button } from "react-bootstrap";

const ProductCart = (props) => {
  const [productTotal, setproducttotal] = useState("");
  const [items, setItems, itemsRef] = useState([]);
  const dispatch = useDispatch();
  //const pt = useSelector(getProductTotal);
  const pt = productTotal;
  const bt = useSelector(getBuildTotal);
  const gt = pt + bt;
  console.log("y");
  console.log(gt);

  //console.log(quantity);
  const getData = () => {
    apiService.get("/api/data/carts").then((res) => {
      //console.log(res.data.items[0].product.name);

      console.log("Data from  Backend");
      console.log(res);
      console.log(res.data.totalPrice);
      setproducttotal(res.data.totalPrice);
      setItems(res.data.cart);
      //dispatch(setProductTotal(productTotal));
      // //setQuantity(res.data.items.quantity)
    });
  };
  React.useEffect(getData, []);

  const handledeleteitem = (_id) => {
    axios
      .patch("/api/data/carts/deleteItem/" + _id)
      .then((res) => {
        console.log(res.data);
        console.log("delete call")
        toast.success("Item Deleted Successfully",{
          theme:"colored"
        });

        setItems((items) => {
          return items.filter((item) => {
            return item._id === _id;
          });
        });
        if (items.length === 1) {
          window.location.reload();
        }

        props.delete(_id);
        if (itemsRef.current.length !== 0) {
          getData();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };
  // const handleconfirm = () => {
  //   window.location.href = "/order";
  // };
  // const handledecrement = (_id) => {
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
  // const clearcart = () => {
  //   apiService
  //     .delete("/api/data/carts/clear")
  //     .then((res) => {
  //       console.log(res.data);
  //       toast.success("Cart has been  Deleted Successfully", {
  //         theme: "colored",
  //       });
  //       getData();
  //       window.location.href = "/shop-cart";
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error(err.response.data, {
  //         position: toast.POSITION.TOP_LEFT,
  //         theme: "colored",
  //       });
  //     });
  // };

  return (
    <>
      <div>
        <p className="cartText">Your Cart</p>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        {console.log(items)}

        <tbody>
          {itemsRef.current.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td> Rs. {item.price}</td>
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
              <td>
                <DeleteOutlineOutlined
                  className="delete-icon"
                  style={{ fontSize: "50", color: "red" }}
                  onClick={(e) => handledeleteitem(item._id)}
                >
                
                </DeleteOutlineOutlined>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot className="footer">
          <tr>
            <td className="total"> Total</td>
            <td className="total"> Rs. {productTotal}</td>
          </tr>
        </tfoot>
      </table>

      {/* <h3 className="Gtotal">
              {" "}
              <span className="grandTotal"> Grand Total: </span> Rs. {gt}
            </h3> */}
      {/* <Button className="ord-btn" onClick={handleconfirm}>
              {" "}
              Order
            </Button>
            <Button className="clr-btn" onClick={clearcart}>
              Clear Cart
            </Button>
          {/* // </> */}
      {/* // )} */}
    </>
  );
};

export default ProductCart;
