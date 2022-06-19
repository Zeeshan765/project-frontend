import React from 'react';
import { useState } from 'react';
import PSUComp from './PSUComp';
import apiService from '../../../services/ApiService';
import { useSelector } from 'react-redux';
import { getgpuwatt} from "../../../Redux/cartRedux";
function PSU(props) {
  console.log(props )
  const [products, setProducts] = useState([]);
  const watt = useSelector(getgpuwatt)
  console.log(watt)
  React.useEffect(() => {
    apiService.getComponents().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
   
     return (
     
     <div className='TrendingProduct-container'>
     {products
         .filter((product) => (product.category === 'Psu'  && product.watt - watt >= 0))
         .map((product, index) => (
           <PSUComp key={index} product={product} />
         ))}
   
   
     </div>);
   };

export default PSU;