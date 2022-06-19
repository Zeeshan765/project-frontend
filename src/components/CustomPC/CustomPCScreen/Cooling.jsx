import React from 'react';
import { useState } from 'react';
import CoolingComp from './CoolingComp';
import apiService from '../../../services/ApiService';
import { useSelector } from 'react-redux';
import { getsocket } from '../../../Redux/cartRedux';

function Cooling(props) {
  console.log(props )
  
  const [products, setProducts] = useState([]);
  const socket = useSelector(getsocket)
 
  React.useEffect(() => {
    apiService.getComponents().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
   
     return (
     
     <div className='TrendingProduct-container'>
     {products
         .filter((product) => (product.category === 'Cooler' && product.coolingsockets.includes(socket)))
         .map((product, index) => (
           <CoolingComp key={index} product={product} />
         ))}
   
   
     </div>);
   };

export default Cooling;