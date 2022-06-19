import React from 'react';
import { useState } from 'react';
import CasingComp from './CasingComp';
import apiService from '../../../services/ApiService';
import { useSelector } from 'react-redux';
import { getmobosize } from '../../../Redux/cartRedux';

function Casing(props) {
  console.log(props )
  
  const [products, setProducts] = useState([]);
  const mobosize = useSelector(getmobosize)
  console.log(mobosize )
  React.useEffect(() => {
    apiService.getComponents().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
   
     return (
     
     <div className='TrendingProduct-container'>
     {products
         .filter((product) => (product.category === 'Casing' && product.size>=mobosize))
         .map((product, index) => (
           <CasingComp key={index} product={product} />
         ))}
   
   
     </div>);
   };

export default Casing;