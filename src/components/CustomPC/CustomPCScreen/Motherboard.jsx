import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getsocket } from '../../../Redux/cartRedux';
import apiService from '../../../services/ApiService';
import MoboComp from './MotherboardComp';

function Motherboard(props) {
  const [products, setProducts] = useState([]);
  const socket = useSelector(getsocket)
  console.log(socket)
  React.useEffect(() => {
    apiService.getComponents().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
    
      return (
      
      <div className='TrendingProduct-container'>
        {products
          .filter((product) => (product.category === 'Motherboard')&&(product.socket == socket))
          .map((product, index) => (
            <MoboComp key={index} product={product}  />
          ))}
    
      </div>);
    };

export default Motherboard;