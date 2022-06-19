import React, { useState } from 'react';
import './cart.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import apiService from '../../services/ApiService';

const Cart = () => {
  const [total, setTotal] = useState('');
  const [items, setItems] = useState([]);
  //console.log(quantity);
  const getData = () => {
    apiService.get('/api/data/carts').then((res) => {
      //console.log(res.data.items[0].product.name);
      // console.log(res.data.items.quantity);
      setTotal(res.data.Total);
      setItems(res.data.items);
      //setQuantity(res.data.items.quantity)
    });
  };
  React.useEffect(getData, []);

  const handledeleteitem = (_id) => {
    axios.patch('/api/data/carts/deleteItem/' + _id).then((res) => {
      console.log(res);
      toast.success('Item Deleted Successfully');
      
       setItems((items) => {
        return items.filter((item) => {
          return item._id == _id;
        });
      });
    });
  };
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

  return (
    <>
      <div className='cart-container'>
        <table className='data-table'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          {console.log(items)}
         
            <tbody>
            
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.product.name}</td>
                  <td>{item.product.price}</td>
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
                    <button
                      className='del-btn'
                      onClick={(e) => handledeleteitem(item._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              
            </tbody>
          

          <tfoot className='footer'>
            <tr>
              <td>Grand Total</td>
              <td>{total}</td>
            </tr>
          </tfoot>
        </table>
        <button className='checkout-btn'> Order</button>
      </div>
    </>
  );
};

export default Cart;
