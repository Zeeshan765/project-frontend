import React from 'react';
import { useState } from 'react';
import RamComp from './RamComp';
import apiService from '../../../services/ApiService';
import { getramSupp } from '../../../Redux/cartRedux';
import { useSelector } from 'react-redux';
function Ram(props) {
  console.log(props )
  const [products, setProducts] = useState([]);
  const ramSupp = useSelector(getramSupp)
  React.useEffect(() => {
    apiService.getComponents().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
   
     return (
     
     <div className='TrendingProduct-container'>
     {products
         .filter((product) => product.category === 'Ram' && product.ramSupport === ramSupp)
         .map((product, index) => (
           <RamComp key={index} product={product} />
         ))}
   
   
     </div>);
   };

export default Ram;