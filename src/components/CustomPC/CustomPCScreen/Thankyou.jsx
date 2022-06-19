import { useEffect, useState } from 'react';
import "./Thankyou.css";

const Thankyou = () => {
//  console.log(props)
//  console.log("props")
//   const [orderId, setOrderId] = useState(null);
const handlereturn = ()=>{
    window.location.href = "/"
}
 

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
      <h1>Thank You For Building your PC on our Platform</h1>
      {/* {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`} */}
      <button className='continueShopBtn' style={{ padding: 10, marginTop: 20 }} onClick = {handlereturn}>Continue Shopping</button>
    </div>
  );
};

export default Thankyou;
