import React from 'react';
import { useState } from 'react';
import ProcessorsComp from './ProcessorsComp';
import apiService from '../../../services/ApiService';
function Processors() {
   
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
          .filter((product) => product.category === 'Processor')
          .map((product, index) => (
            <ProcessorsComp key={index} product={product} />
          ))}
    
    
      </div>);
    };

export default Processors;