import { useEffect, useState } from 'react';


const SimpleSuccess = (props) => {
 console.log(props)
 console.log("props")
  const [orderId, setOrderId] = useState(null);
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
      <h1>Order has been created successfully</h1>
      {/* {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`} */}
      <button style={{ padding: 10, marginTop: 20 }} onClick = {handlereturn}>Go to Homepage</button>
    </div>
  );
};

export default SimpleSuccess;
