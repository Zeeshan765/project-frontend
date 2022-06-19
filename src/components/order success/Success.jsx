import { useEffect, useState } from 'react';

import { useLocation } from 'react-router';
import apiService from '../../services/ApiService';

const Success = (props) => {
  const type = "Online Payment"
  const location = useLocation();

  const data = location.state.stripeData;
  const cart = location.state.orderItems;
//   console.log("hey");
//   console.log(props)
//   console.log(cart)
  const amount = location.state.amount;
  //const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
const handlereturn = ()=>{
    window.location.href = "/"
}
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await apiService.post('/api/orders/newCustomOrder', {
          //userId: currentUser._id,
          orderItems: cart.map((item) => ({
            productname: item.name,
            price: item.price,
            product: item._id,
            quantity: item.quantity,
          })),
          //orderItems: cart,
          amount: amount,
          type,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }} onClick = {handlereturn}>Go to Homepage</button>
    </div>
  );
};

export default Success;
