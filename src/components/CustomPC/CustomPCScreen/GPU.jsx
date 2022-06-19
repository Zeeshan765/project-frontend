import React from 'react';
import { useState } from 'react';
import GPUComp from './GPUComp';
import apiService from '../../../services/ApiService';
function GPU(props) {
   console.log(props )
   const [products, setProducts] = useState([]);

   React.useEffect(() => {
     apiService.getComponents().then((res) => {
       setProducts(res.data);
       console.log(res.data);
     });
   }, []);
    
      return (
      
      <div className='TrendingProduct-container'>
      {products
          .filter((product) => product.category === 'Gpu')
          .map((product, index) => (
            <GPUComp key={index} product={product} />
          ))}
    
    
      </div>);
    };

export default GPU;